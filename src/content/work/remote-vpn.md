---
title: "Remote VPN & MFA"
description: "Flexible VPN authentication for diverse user base with Fortigate and Azure integration"
slug: remote-vpn
---

## The Problem

External clients and partners needed VPN access, but the requirements were complex:

- **Not all users have directory accounts** — Some do (Azure Entra), but many don't
- **Not all can use IPsec** — Some need SSL VPN for compatibility
- **MFA is required** — But not all users have MFA-capable devices
- **Users need flexibility** — Different users should authenticate through different systems based on their situation

## The Approach

**Fortigate** (firewall) + **Forti Authenticator** (MFA/auth server) + **Azure Entra SAML** integration

The system supports multiple authentication realms and MFA methods, giving flexibility based on user situation.

## Implementation

### Multi-Layer Authentication
- Users synced from LDAP inside Forti Authenticator (everything in Entra comes from on-prem sync)
- Forti Authenticator integrated with Entra via SAML
- Users can authenticate with different realms in different systems

### For Directory Users (Entra/Azure AD)
- Use Azure SAML authentication via Forti Authenticator
- Leverage Azure MFA (Microsoft MFA)
- No additional token licenses burned (more efficient)

### For Non-Directory Users
- Use Forti Authenticator's self-service portal
- Users can register themselves
- Can change passwords and associate MFA tokens
- Flexible token licensing (not everyone uses it)

### Authorization & Security
- RADIUS authorization attributes pushed for specific groups of users
- Groups matched against FortiGate security policies
- Fine-grained access control based on user attributes

### VPN Options
- **IPsec** for users with compatible clients
- **SSL VPN** for users needing maximum compatibility

## Results

- **MFA for all users** without burning licensing on every token
- **Flexible authentication** — users use the system appropriate for them
- **Self-service for external users** — reduced onboarding friction
- **No additional directory management** — leveraged existing Entra infrastructure
- **Full integration** with FortiGate security policies

## Why This Works

1. **Pragmatic layering** — Used Fortigate's native tools (Forti Authenticator) rather than external auth servers
2. **Vendor integration** — Tapped into existing Azure infrastructure without duplicating authentication systems
3. **Flexible design** — Different user types use different systems, reducing friction and licensing costs
4. **Scalable** — RADIUS attributes mean new users and groups are authorized through existing processes
