# Deployment Guide

Your website is generated as static HTML files in `dist/`. These can be deployed to any web server.

## Prerequisites

- You own a server with web root at `/var/www/danielgrigore.ro` (adjust path as needed)
- Nginx or Apache installed on the server
- TLS/HTTPS configured (Let's Encrypt via Certbot)

## Local Build & Deploy

### Option 1: Manual Deploy (rsync)

```bash
# Build locally
npm run build

# Copy to server via rsync
rsync -av --delete dist/ user@your-server:/var/www/danielgrigore.ro/
```

The `--delete` flag removes files from the server that no longer exist locally (keeps it clean).

### Option 2: Automated Script

Create `deploy.sh` in your project root:

```bash
#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Deploying to server..."
rsync -av --delete dist/ user@your-server:/var/www/danielgrigore.ro/

echo "✓ Deployed!"
```

Then:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 3: Git-Based Deploy

If your server has git and a post-receive hook:

```bash
# On server: set up bare repo
ssh user@server
mkdir -p ~/repos/danielgrigore.ro.git
cd ~/repos/danielgrigore.ro.git
git init --bare

# Create post-receive hook
cat > hooks/post-receive << 'EOF'
#!/bin/bash
cd /tmp/build
git clone ~/repos/danielgrigore.ro.git .
npm install
npm run build
rsync -av --delete dist/ /var/www/danielgrigore.ro/
EOF
chmod +x hooks/post-receive
```

Then locally:
```bash
git remote add deploy user@server:~/repos/danielgrigore.ro.git
git push deploy main
```

## Nginx Configuration

Add to `/etc/nginx/sites-available/danielgrigore.ro`:

```nginx
server {
    listen 80;
    server_name danielgrigore.ro www.danielgrigore.ro;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name danielgrigore.ro www.danielgrigore.ro;

    # TLS certificate
    ssl_certificate /etc/letsencrypt/live/danielgrigore.ro/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/danielgrigore.ro/privkey.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;

    root /var/www/danielgrigore.ro;
    index index.html;

    # Cache static assets aggressively (Astro generates content hashes)
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache other static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Serve HTML files without caching (they might change)
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Fallback to index.html for SPA-style routing
    error_page 404 =200 /index.html;

    # Disable .git and other sensitive files
    location ~ /\. {
        deny all;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/danielgrigore.ro /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## HTTPS via Let's Encrypt

```bash
sudo certbot certonly --webroot -w /var/www/danielgrigore.ro -d danielgrigore.ro -d www.danielgrigore.ro
```

Then add the certs to the Nginx config above.

Auto-renewal (usually automatic with certbot):
```bash
sudo certbot renew --dry-run
```

## Testing

After deployment, verify:

```bash
# Test DNS
dig danielgrigore.ro

# Test HTTPS
curl -I https://danielgrigore.ro

# View server logs
ssh user@server tail -f /var/log/nginx/access.log
ssh user@server tail -f /var/log/nginx/error.log
```

## Updating Content

When you add new case studies or blog posts:

1. Add markdown files to `src/content/work/` or `src/content/blog/`
2. Run `npm run build`
3. Deploy: `./deploy.sh` or `git push deploy main`

The site regenerates automatically — no database, no build process on the server.

## Troubleshooting

**404 on all pages except home?**
- Make sure Nginx config includes the `error_page 404 =200 /index.html;` directive

**Styles look broken?**
- Check that `/var/www/danielgrigore.ro/_astro/` directory exists and contains CSS files
- Verify Nginx isn't caching old CSS files (check Cache-Control headers)

**TLS certificate expired?**
- Run `sudo certbot renew`
- Check `/var/log/letsencrypt/letsencrypt.log`

**Need to rebuild?**
- Just run `npm run build` locally and deploy again — entire `dist/` is replaced
