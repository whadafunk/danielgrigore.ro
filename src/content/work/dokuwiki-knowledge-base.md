---
title: "Knowledge Base Implementation"
description: "Building organizational memory with dokuWiki"
slug: dokuwiki-knowledge-base
---

## The Problem

The organization had scattered knowledge across emails, spreadsheets, and people's heads:

- **No central documentation** — Information about systems, procedures, configurations lived with individuals
- **Knowledge loss on turnover** — When people left, their expertise went with them
- **Repetitive questions** — The same issues were solved multiple times because solutions weren't documented
- **No organizational learning** — The company couldn't evolve infrastructure knowledge systematically

## The Approach

Implement **dokuWiki** — a lightweight, file-based wiki that doesn't require a database or heavy infrastructure.

But the real work wasn't the wiki software (takes 10 minutes to install). The real work was:
1. Structuring the documentation so it makes sense
2. Creating enough initial content to show value
3. Building a culture where people document together

## Implementation

### Structure
I created a hierarchy that made sense for the organization:

- **Operational Guidelines** — How we approach infrastructure decisions
- **User Procedures** — Step-by-step guides for end users
- **Operational Procedures** — How our team maintains systems
- **Service Catalog** — What services we offer and how to request them
- **Infrastructure Blueprint** — Architecture diagrams and system descriptions
- **Virtualization Infrastructure** — Details about our VM/container platform
- **Storage** — Storage architecture and how to request storage
- **Security** — Security policies and procedures
- **Public Keys** — SSH public keys for authentication

### Culture Building
- I documented enough initial content to show the wiki was useful (not empty)
- Ran recurring documentation sessions with the team
- Had teams document their services together
- Made it clear that "writing good documentation" was a valued skill

### The "Public Keys" Section
One simple example: Created a section where users/admins post their SSH public keys. This solved authentication management across systems and promoted a culture where "being documented" was normal.

## Results

- **Single source of truth** for infrastructure knowledge
- **New team members** can onboard faster (read instead of asking)
- **Knowledge survives** employee turnover
- **Reduced repetition** — if it's in the wiki, it's been solved before
- **Institutional memory** — the organization learns and improves over time

## Why This Works

1. **Low friction** — dokuWiki is simple, file-based, doesn't require database management
2. **Good enough** — Not fancy, but it works and doesn't get in the way
3. **Culture** — Documentation is only as good as the culture that supports it
4. **Practical value** — People use it because it solves actual problems (faster onboarding, avoiding repetition)

## Key Learning

Great documentation systems aren't about the tool. They're about building a culture where documenting what you know is valued and normalized. The tool should be invisible — it just gets out of the way so people can write.
