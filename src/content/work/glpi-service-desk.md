---
title: "Service Desk & Asset Management System"
description: "From scattered processes to integrated workflow management using GLPI"
slug: glpi-service-desk
---

## The Problem

A mid-size technology holding company with 30+ subsidiary companies was struggling with:

- **No centralized asset tracking** — Equipment scattered across locations with no clear ownership or lifecycle tracking
- **Manual service requests** — Employees emailed requests or called; no workflow, no audit trail
- **No change management** — Network changes, server updates, configuration changes were ad-hoc with minimal documentation
- **Compliance gaps** — Auditors required proof of asset ownership, change approvals, and service continuity
- **Knowledge loss** — When technicians left, their expertise left with them. Recurring issues were "rediscovered" repeatedly

## The Approach

Instead of buying an expensive commercial ITSM platform, I implemented **GLPI** (open-source), which offered:
- Lower TCO (total cost of ownership)
- Flexibility for customization without vendor lock-in
- Community support and active development
- Ability to integrate with existing infrastructure

## Implementation

### Asset Management with Physical Traceability
- Created QR code stickers for all equipment using GLPI's built-in QR code plugin
- Employees scan a sticker with their phone → opens the asset page in GLPI
- Asset page shows: ownership, location, configuration, service history, warranty status
- **Result:** Instant visibility, faster troubleshooting, reduced redundant purchases

### Service Request Workflow
- Employees submit requests through web portal or email (integrated)
- Requests categorized, assigned, and tracked with SLAs
- Users can see status in real-time; no more "where's my ticket?"
- **Result:** Predictable response times, user satisfaction, data for capacity planning

### Change Management Integration
Service requests that require infrastructure changes automatically trigger change requests.

**Example: IPsec Tunnel Provisioning**
- Customer/partner fills out a form (agreement terms: bandwidth, security requirements, endpoints)
- Form generates a change request
- Infrastructure team reviews and approves
- A custom asset is created in GLPI for the tunnel itself
- Asset linked to the change request for full traceability
- **The clever bit:** When reviewing the form, suggest a memorable name for the tunnel (e.g., "Tweety," "Phoenix," "Beacon")
- Customer agrees: "We'll document this as Tweety" — no more talking about IP addresses
- Configuration details stored in the asset record for future reference

### Knowledge Base Integration
- Common issues and resolutions documented in GLPI's built-in wiki
- Linked to relevant assets, services, and change records
- New team members can self-serve instead of asking the same questions repeatedly

### Reporting & Visibility
- Management sees: incident volume by category, resolution times, asset lifecycle costs, change success rates
- Infrastructure team sees: capacity utilization, recurring issues, process bottlenecks

## Results

**Quantifiable:**
- Incident resolution time: **40% faster** (clearer ownership, faster access to asset info)
- Repeat tickets: **60% reduction** (knowledge base prevents rediscovery)
- Change success rate: **99%+** (structured workflow, clear approvals, documentation)
- Compliance audit pass rate: **100%** (full change history, asset tracking, audit trails)

**Qualitative:**
- Employees understand IT as a service, not a mysterious black box
- Technical team morale improved (processes reduce firefighting, repetition)
- Management has real visibility into IT operations
- Infrastructure became "knowable" — even non-technical people understand where systems are and why changes take time

## Why This Works

1. **Right tool for the job** — GLPI isn't glamorous, but it's exactly what this organization needed (flexibility, cost-effectiveness, integration capability)
2. **Process before tool** — We didn't just deploy software; we designed workflows that solve real problems
3. **Organizational design** — "Tweety" isn't cute branding; it's making infrastructure human-understandable — ITSM maturity
4. **Knowledge capture** — The system becomes the organization's memory, surviving employee transitions
5. **Compliance as a side effect** — By designing good processes, compliance happens naturally
