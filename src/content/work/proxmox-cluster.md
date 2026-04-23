---
title: "Virtualization Infrastructure"
description: "3-node Proxmox cluster with TrueNAS iSCSI storage on commodity hardware"
slug: proxmox-cluster
---

## The Problem

The organization had isolated VMware ESXi servers scattered across locations:

- **No cluster** — Each server was independent; no HA, no load balancing
- **Expensive licensing** — VMware licensing was costly and inflexible
- **Inefficient** — VMs were resource-heavy; each server ran fewer workloads
- **Single points of failure** — One server down = downtime, no failover

## The Approach

Replace the isolated ESXi servers with a **3-node Proxmox cluster** using commodity hardware and **TrueNAS for iSCSI storage**.

Proxmox is open-source and free (no license fees for clustering), and supports both VMs and LXC containers (much more efficient than pure VMs).

## Implementation

### Proxmox Cluster (3 nodes)
- 3-node cluster for high availability
- Proxmox free tier supports full clustering (unlike some competitors)
- VM failover automatic if a node goes down
- Live migration support (move VMs between nodes without downtime)

### Storage: TrueNAS on Commodity Hardware
- Dell server with 16 disks
- TrueNAS handling storage + iSCSI
- Used commodity hardware instead of expensive enterprise SANs
- iSCSI multipath configuration for reliability

### iSCSI Multipath
- 4-link bundle at the storage target (TrueNAS)
- 2-link bundles at each Proxmox node
- This configuration gave excellent performance and reliability (iSCSI isn't the most loved protocol, but in multipath it works really well)

### LXC Containers Instead of VMs
- Proxmox supports both VMs and LXC containers
- Migrated 80% of Linux VMs to LXC containers
- LXC containers behave almost identically to VMs (full OS init, networking) but are much lighter
- **Result:** 40% resource efficiency improvement vs pure VMs

### Snapshots & Thin Provisioning
- Used thin LVM volumes for instant snapshots
- Easy backup and recovery
- Efficient storage use

## Results

**Infrastructure:**
- **Enterprise-grade** HA virtualization
- **~€10,000 hardware cost** (vs €50,000+ for commercial solutions)
- **99.9% uptime** — automatic failover on node failure
- **40% more efficiency** — LXC containers vs pure VMs

**Operational:**
- Free clustering (Proxmox free tier)
- Open-source = no vendor dependency
- Community support and documentation
- Easy to maintain and evolve

## Why This Works

1. **Right tool for the job** — Proxmox is mature and stable for this use case
2. **Commodity hardware** — No need for expensive enterprise servers
3. **Mixed workload support** — VMs for complex workloads, containers for Linux services
4. **Efficient use of resources** — Containers mean more workloads per hardware
5. **Open-source philosophy** — Aligns with pragmatic, vendor-agnostic approach

## Key Learning

Enterprise infrastructure doesn't have to be expensive. With pragmatic tool selection, commodity hardware, and understanding your workload (when to use VMs, when to use containers), you can build reliable, scalable systems for a fraction of vendor pricing.
