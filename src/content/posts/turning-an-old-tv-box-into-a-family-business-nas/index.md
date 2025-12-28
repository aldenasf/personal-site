---
title: "Turning an old TV Box into a Family Business NAS"
description: "Repurposing an old $15 Android TV box into a functional NAS for my family's printing business."
date: "Dec 27 2025"
image: "./IMG_20251228_120033.jpg"
---

## Project Motivation

My parents run a printing business at home. Since we have multiple computers, we were constantly moving files around using flash drives. If we were designing something on one computer and wanted to print it, we had to manually transfer it to the specific computer connected to the printer. It worked, but it was inefficient and slowed down our workflow.

I had been watching YouTube videos about repurposing old Set-Top Boxes (STBs) as home servers. I wanted to see if I could apply that to a real-world use case, so I convinced my parents to let me get a second-hand **IndiHome HG680P**.

## The Setup

I didn't wanna deal with the headache of rooting it myself yet, so I bought one that already had Armbian installed. My goal wasn't just to play around with it. I wanted to see if I could actually make it useful for the business.

- **Hardware:** IndiHome HG680P.
- **OS & Software:** Armbian + CasaOS (for a user-friendly web UI).
- **Storage:** Multiple external hard drives repurposed from the business.
- **Networking:** Connected via Ethernet to our existing network switch.
- **Power Management:** Initially, I used simple USB-to-SATA converters that drew power directly from the STB. However, as we added more drives, I realized the STB wouldn't provide enough current to spin multiple HDDs. I upgraded to **powered USB-to-SATA adapters** that use their own external power supplies to ensure the system remains stable and doesn't overload the STB.

As I wasn't very familiar with Linux at the start, I followed tutorials to get CasaOS installed. The process was pretty straightforward: I updated the package lists and ran the install script via the terminal. Once CasaOS was running, I did the rest of the work through the web UI like mounting the drives, setting up the network shares (SMB), and then mapping them to all the Windows computers in the business. The result? My dad was impressed, and we now use it daily to share design files instantly across the shop.

## Challenges & Known Issues

While the system works well enough for our daily needs, it still had a few small issues:

1. **Connectivity Drops**: Occasionally, the network shares becoma inaccessible from Windows even though the STB is still online and can access the drives. A reboot of the STB usually resolves the issue.
2. **Mounting Erros**: During a reboot, the system sometimes fails to mount all external hard drives on the first try, requiring a second restart to correctly mount all the hard drives.

## Future Enhancements

My next plan for this project is to expand the STB's functionality by turning it into a **dedicated print server** while it continues to run as a NAS.

Currently, our USB printers are connected to a "main" computer and shared over the network from there. The downside is that the main computer must remain powered on for any other computer to print. By connecting the printers directly to the STB and configuring **CUPS (Common Unix Printing System)**, I plan to make the printers available to the entire network 24/7.
