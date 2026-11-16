# Prakhar Khokhar

**Student developer · Linux & open source · desktop systems**

I like understanding how software behaves under the hood, especially when it meets real hardware and real users. That curiosity usually turns into a project, a bug investigation, a small upstream fix, or a rather ambitious side quest. My main interests are Linux, desktop software, systems programming, and making technology work better on everyday hardware.

I'm currently balancing JEE preparation with open-source development and learning programming. This page is a snapshot of what I'm building, investigating, and learning—not a claim that every project or patch is finished.

## What I'm working on

### [KDE Frameworks](https://invent.kde.org/) — active contributions

I've been investigating freezes and correctness issues in KDE's **Get New Stuff** installation and update workflows, particularly around [KNewStuff](https://invent.kde.org/frameworks/knewstuff) and [KPackage](https://invent.kde.org/frameworks/kpackage).

My first KDE merge request, [KPackage !139 — Fix synchronous package update execution](https://invent.kde.org/frameworks/kpackage/-/merge_requests/139), has now been **merged**. It removes redundant synchronous package-update work from the `Update` constructor, leaving execution to the normal asynchronous `PackageJob` path, and includes a regression test for the update execution behaviour.

Another KDE merge request is currently pending review, with more work planned around package handling and KNewStuff's asynchronous installation flow. That work involves archive extraction, job and worker lifecycles, cancellation and synchronization, preserving fallback/error behaviour, and regression coverage. I'm treating this as a correctness problem as much as a performance problem: asynchronous code needs clear ownership and cleanup rules, not just a faster happy path.

I distinguish ongoing investigations and proposed fixes from changes that have actually been merged upstream.

### [ULLI-Next](https://github.com/Prakhar-Khokhar/ulli-next) — ongoing

**ULLI means USB-Less Linux Installer.** The project aims to let users prepare and boot a Linux environment from an internal drive without first creating a USB installer.

I'm maintaining the project and developing its newer native **Qt 6 / C++20** direction. The rewrite introduces structured installation plans, platform-specific backends, disk discovery and identity checks, partition-layout previews, ISO handling and validation. It is also teaching me to think carefully about failure paths and the consequences of system-level operations.

Alongside that newer rewrite, I've worked on the existing Windows/PowerShell installer: updating its distribution metadata, adding opt-in Fedora RAM boot support, removing its dependency on an external `distros.json` file, and improving related logging, error handling, and helper wiring. These changes are part of ULLI-Next's own development.

The Qt/C++ rewrite is at a buildable development stage, but it is **experimental and not ready for real disk installations**. The legacy Linux/Python and Windows/PowerShell implementations remain in the repository; see the project README for the current status and safety notes.

### [PumpkinMC](https://github.com/Prakhar-Khokhar/Pumpkin-Mc) — exploration

Exploring the Pumpkin Minecraft server ecosystem and its performance and implementation trade-offs. I'm interested in how server architecture, plugins, and practical constraints shape the experience on modest hardware.

### Minecraft server and dashboard — personal project

I've experimented with a modded cross-play Minecraft server for a small group of friends, including a web dashboard and running services on constrained Android hardware. It has been a practical way to learn about networking, deployment, server administration, and keeping services usable with limited resources.

## Open-source contributions

### [KDE Frameworks](https://invent.kde.org/)

**Merged: [KPackage !139 — Fix synchronous package update execution](https://invent.kde.org/frameworks/kpackage/-/merge_requests/139)**

My first merged KDE contribution fixes a synchronous execution path in `KPackage::PackageJob::Update`. The update constructor previously triggered the package update directly, even though the normal `PackageJob::start()` path already schedules the work asynchronously. Removing that redundant call prevents the same update from being executed twice and avoids doing the work synchronously during job construction.

The contribution also includes a regression test for update execution, with follow-up review feedback addressed before merging.

**Another KDE merge request is pending review.** I'm continuing work in the KDE Frameworks area, including KNewStuff's asynchronous archive extraction and the lifecycle, cancellation, and cleanup guarantees that come with it. I'll keep merged work separate from work that is still being reviewed or developed.

### [PorteuX Linux](https://github.com/porteux/porteux)

**Merged: [#135 — Fix App Store window freezing during installations](https://github.com/porteux/porteux/pull/135)** · 1 November 2026

This change makes application installations asynchronous instead of blocking the GTK main loop:

- Replaced the blocking `subprocess.run()` call with `subprocess.Popen()`, so the App Store remains responsive while installers run.
- Used GLib I/O watches to drain installer stdout and stderr without letting full pipes stall a process.
- Used a GLib child watch to collect the installer process's exit status and finish handling only after the process and output streams are complete.
- Started installers in their own session so they can continue running if the App Store is closed.
- Closed the installation-options dialog when installation starts, rather than keeping it open until the installer finishes.

This was a practical desktop-usability fix: installation work should not freeze the application that launched it. I also tested the change on PorteuX KDE Plasma 2.8 before it was merged.

I value small, concrete fixes just as much as larger projects: upstream software gets better because people investigate the annoying details and send improvements back.

## Experiments and technical rabbit holes

I tend to investigate questions that catch my attention, especially when the answer requires testing rather than just reading a specification. Examples include:

- **Linux on real hardware:** desktop distributions, UEFI boot flows, bootloaders, filesystems, and kernel / graphics-driver behaviour across Intel integrated graphics generations.
- **Qt and desktop internals:** GUI responsiveness, asynchronous jobs, thread and object lifecycles, archive handling, and regression testing in KDE Frameworks.
- **Performance on constrained devices:** tried lightweight BitNet inference on an older Pentium 3825U system and ran into CPU instruction-support limits; also explored what can realistically run with limited RAM, storage, or power.
- **Android and custom software:** device-specific ROM / AOSP feasibility, hardware capabilities, and the practical barriers between an interesting idea and a working port.
- **Minecraft infrastructure:** cross-play, server implementations, plugins, networking, and running a useful server without dedicated server hardware.

These are investigations and experiments, not all polished or completed projects. I try to keep that distinction clear.

## A little recognition

- **vivo Ignite 2024 — All-India Top 200**, for a technology concept / innovation entry.

## What I'm learning now

- **C++ / Qt 6:** developing the skills needed for ULLI-Next and native desktop software.
- **KDE Frameworks development:** asynchronous programming, job and worker lifecycles, Qt testing, and maintaining responsive GUI applications.
- **Java:** continuing to learn the language for a Minecraft-related project and broader JVM development.
- **Algorithms and competitive programming:** strengthening fundamentals while exploring the ZIO / ZCO / INOI pathway.
- **Linux systems development:** improving my understanding of boot flows, filesystems, hardware interfaces, packaging, and safe system-level operations.

I'm still early in parts of this journey. I'd rather show the work, the decisions, the failed attempts, and what I learned than pretend to be an expert in everything I touch.

## How I like to work

I enjoy the full loop: **question → hypothesis → experiment → failure → diagnosis → improvement**. I care about reproducibility, practical constraints, and whether a tool helps an actual person—not just whether the idea sounds impressive. I also try to be explicit about what is experimental, what is validated, and what has actually shipped.

If you're interested in Linux, KDE, open source, systems programming, Minecraft infrastructure, or unusual hardware experiments, feel free to explore the repositories or connect with me on [GitHub](https://github.com/Prakhar-Khokhar).

---

*This page is updated as projects evolve. “Ongoing,” “exploration,” and “learning” are intentional labels; they distinguish current work from completed contributions.*
