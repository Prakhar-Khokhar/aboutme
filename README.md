# Prakhar Khokhar

**Student developer · Linux & open source · systems tinkerer**

I like understanding how things work under the hood, then turning that curiosity into tools, fixes, experiments, and occasionally very ambitious side quests. Most of my work sits around Linux, desktop computing, game servers, and making software work better on real-world hardware.

I'm currently balancing school and JEE preparation with open-source work and learning programming. This portfolio is a living snapshot: shipped work, ongoing projects, experiments, and things I'm actively learning—not a claim that every idea here is finished.

## What I'm building

### [ULLI-Next](https://github.com/Prakhar-Khokhar/ulli-next) — ongoing
A USB-less Linux installation tool: the goal is to make trying or installing Linux easier without needing a separate USB installer.

I'm maintaining the project and developing its newer native **Qt 6 / C++20** direction. The work involves much more than a UI: disk discovery and validation, partition planning, installation modes, ISO integrity checks, boot configuration, and safety checks around destructive operations. I've also been exploring distro-specific live-boot options, including loading a live environment into RAM where supported.

**Focus:** safer installation workflows, portability, and making Linux more approachable for people who don't want to wrestle with boot media.

### [PumpkinMC](https://github.com/Prakhar-Khokhar/Pumpkin-Mc) — exploration
Exploring the Pumpkin Minecraft server ecosystem and its performance / implementation trade-offs. I'm interested in how server architecture, plugins, and practical constraints affect the experience on modest hardware.

### Minecraft server and dashboard — personal project
I've experimented with a modded cross-play Minecraft server for a small group of friends, including a web dashboard and running services on constrained Android hardware. This has been a practical way to learn about networking, deployment, server administration, and keeping a service usable with limited resources.

## Open-source contributions

### [PorteuX Linux](https://github.com/porteux/porteux)
I've contributed fixes and improvements around the PorteuX App Store and related scripts, including work involving its JSON app database and Steam / 32-bit support. I value small, concrete fixes just as much as large projects: upstream software gets better because people investigate the annoying details and send improvements back.

### [ULLI-Next](https://github.com/Prakhar-Khokhar/ulli-next)
Ongoing maintenance, debugging, safety reviews, and feature development. I've spent time investigating partitioning edge cases, ISO size / filesystem limits, disk-selection safeguards, and boot options. This project is where I'm learning to think carefully about the consequences of systems software—not just whether a feature works on the happy path.

## Experiments and technical rabbit holes

I tend to investigate questions that catch my attention, especially when the answer requires testing rather than just reading a spec. Examples include:

- **Linux on real hardware:** desktop distributions, bootloaders and GRUB themes, kernel / graphics-driver behavior, and compatibility across Intel integrated graphics generations.
- **Performance on constrained devices:** testing lightweight AI inference on older CPUs, comparing hardware bottlenecks, and exploring how much can be done with limited RAM, storage, or power.
- **Android and custom software:** device-specific ROM / AOSP feasibility, hardware capabilities, and the practical barriers between an interesting idea and a working port.
- **Minecraft infrastructure:** cross-play, server implementations, plugins, networking, and running a useful server without dedicated server hardware.
- **Desktop Linux usability:** making installation and boot workflows less intimidating for people coming from Windows.

These are investigations and experiments, not all polished or completed projects. I try to keep the distinction clear.

## A little recognition

- **vivo Ignite 2024 — All-India Top 200**, for a technology concept / innovation entry.

## What I'm learning now

- **C++:** building the skills needed for ULLI-Next's native implementation and algorithmic problem-solving.
- **Java:** learning the language for a Minecraft-related project and broader JVM development.
- **Algorithms and competitive programming:** developing stronger fundamentals while exploring the ZIO / ZCO / INOI pathway.
- **Linux systems development:** improving my understanding of boot flows, filesystems, hardware interfaces, packaging, and safe system-level operations.

I'm still early in parts of this journey. I'd rather show the work, the decisions, the failed attempts, and what I learned than pretend to be an expert in everything I touch.

## How I like to work

I enjoy the full loop: **question → hypothesis → experiment → failure → diagnosis → improvement**. I care about reproducibility, practical constraints, and whether a tool helps an actual person—not just whether the idea sounds impressive.

If you're interested in Linux, open source, systems programming, Minecraft infrastructure, or unusual hardware experiments, feel free to explore the repositories or reach out through my GitHub profile.

---

*This page is updated as projects evolve. “Ongoing,” “exploration,” and “learning” are intentional labels; they distinguish current work from completed contributions.*
