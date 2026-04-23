---
title: "Multi-Tenant DNS Architecture"
description: "Scaling DNS for a holding company with 30+ subsidiary companies"
slug: powerdns-multitenant
---

## The Problem

A holding company with 30+ subsidiary companies, all sharing a common enterprise directory (Azure Entra/Microsoft Entra ID), needed:

- **Decentralized DNS administration** — Each subsidiary needed to manage its own internal DNS zones (for their specific applications, services, internal hostnames)
- **Central control** — Security and compliance teams needed oversight and audit trails
- **Scalability** — Adding new zones and administrators couldn't require IT intervention each time
- **Performance** — Standard DNS solutions were slow for the recursive lookups happening across 30+ company networks
- **Integration** — Solution needed to work with existing Azure identity management and operational workflows

## The Approach

Instead of buying a commercial DNS solution (expensive, overkill for most subsidiaries, vendor lock-in), I built a pragmatic stack:

**Core Architecture:**
- **PowerDNS Recursor** (for fast recursive lookups)
- **PowerDNS Authoritative Server** (for internal zones)
- **pdns-admin** (web UI for zone management)
- **Azure SAML authentication** (users log in with their Entra ID credentials)
- **Integration with php-IPAM** (so DNS zones sync with IP address management system)

## Implementation

### PowerDNS Recursor
- Handles recursive lookups for all 30+ company networks
- Dramatically faster response times than standard solutions
- Caches frequently used lookups
- **Result:** Reduced query latency, improved user experience across all subsidiaries

### pdns-admin with Azure SAML
- Web-based interface for managing DNS zones
- Users authenticate via Azure Entra ID (same directory they use for everything else)
- No additional password management
- **Result:** Easy adoption, secure authentication, audit trail of who changed what

### Delegated Administration
- Each subsidiary can manage its own internal DNS zones
- Zone admins are provisioned from the Entra directory (group membership)
- Central team retains oversight: can see all zones, audit changes, enforce standards
- **Result:** Subsidiaries are autonomous; central team isn't a bottleneck

### API Integration
- pdns-admin exposes an API for automation
- Integration with php-IPAM: when an IP is assigned, DNS record is created automatically
- Integration with service desk system (GLPI): when a server is provisioned (change request), DNS entry is auto-created
- **Result:** DNS scales with infrastructure; no manual record creation

### Full Operational Integration
- Zone management links to GLPI change requests
- All DNS changes are recorded in audit logs
- phpIPAM tracks which IPs are mapped to DNS names
- Service desk tracks DNS-related changes alongside infrastructure changes
- **Result:** Single source of truth across DNS, IP management, and service tracking

## Results

**Performance:**
- Query response time: **70% faster** than previous solution (especially for recursive lookups across 30+ networks)
- Reduced latency for applications relying on DNS resolution

**Operational:**
- Subsidiaries can manage DNS independently (no IT bottleneck)
- **100% audit trail** of all changes (who, what, when, why)
- Zero manual zone creation work
- New subsidiaries onboard in hours (not weeks)

**Integration:**
- DNS management is now part of the integrated IT operations workflow
- When a server is provisioned, DNS is automatically created
- When an IP is assigned, DNS reverse lookup is created automatically
- When a zone is delegated, the admin group is automatically provisioned from Entra directory

## Why This Works

1. **Right tools** — PowerDNS is faster and more flexible than standard solutions. pdns-admin is lightweight but powerful. Open-source stack means no vendor lock-in.

2. **Authentication integration** — Using Azure SAML meant users didn't need to remember another password. Adoption was immediate.

3. **Organizational design** — By delegating zone management to subsidiaries, we removed a central bottleneck while maintaining oversight.

4. **Automation** — Integrating DNS with IP management and service desk meant DNS scales automatically with infrastructure. No manual work.

5. **Compliance** — Full audit trail of all changes, traceable back to change requests and asset management.

## Key Learning

Infrastructure excellence comes from seeing how different systems connect. This wasn't just "implement PowerDNS" — it was understanding that DNS is part of a larger ecosystem (IP management, service delivery, change control, authentication). By integrating these pieces thoughtfully, we created a system that's not just fast and reliable, but also **knowable** to the people managing it.
