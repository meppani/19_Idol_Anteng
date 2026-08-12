# Kiblat Project - Indonesian Idol Voting System

## 1. Project Overview
A luxurious, elegant, and premium landing page for an Indonesian Idol-themed voting system. The application features a dark midnight & blue stage curtain ambient theme (`curtain-bg`), centered **Sembilan Belas Idol** emblem logo, header credit **"PRESENTED BY KARANG TARUNA RW 19"**, personalized hero subtext ("RW 19 Antapani Tengah"), contestant origins assigned to local neighborhood RTs (**RT 01** - **RT 05**), participant #1 profile assigned to **Reza** with custom image `Reza Foto.png` (`public/reza.png`), clean card layouts with zero view counts and zero top badges, simplified category filters (**Semua** and locked **Finalist 🔒**), and an **Ice Light Blue, Cyan & Metallic Silver** button color palette (with ExternalLink icon removed from VoteButton).

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom Design System Tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Repository: `meppani/19_Idol_Anteng`)

## 3. Current State
- **Status:** 🚀 ExternalLink Icon Removed from VoteButton, Pushed to GitHub (`meppani/19_Idol_Anteng`).
- **Completed Milestones:**
  - [x] Initialized Next.js project structure with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
  - [x] Removed `ExternalLink` icon from `src/components/VoteButton.tsx`.
  - [x] Renamed participant #1 from "Salma Salsabil" to **"Reza"** in `src/data/participants.ts`.
  - [x] Updated participant #1 photo to **`Reza Foto.png`** (`public/reza.png`).
  - [x] Removed view count badges (`2.4M Views`, `1.9M Views`, etc.) from all participant cards in `ParticipantCard.tsx`.
  - [x] Removed top overlay badges ("Top Trending #1", "Runner Up", etc.) from all cards.
  - [x] Updated all contestant origins in `src/data/participants.ts` to **RT 01**, **RT 02**, **RT 03**, **RT 04**, **RT 05**.
  - [x] Simplified category filter tabs to **Semua** and **Finalist 🔒** with locked toast interaction.
  - [x] Added **"PRESENTED BY KARANG TARUNA RW 19"** credit next to header logo in `Navbar.tsx`.
  - [x] Re-themed all buttons to **Ice Light Blue, Electric Cyan & Silver** gradients (0% yellow/gold).
  - [x] Redesigned Hero Section matching Screenshot 2 (blue stage curtain backdrop, Sembilan Belas Idol logo, neon blue glowing halo).
  - [x] Verified zero-error production build (`npx next build --webpack`).
  - [x] Pushed code to remote repository `meppani/19_Idol_Anteng` on branch `main`.

## 4. Project File Structure
```
19_Idol_Anteng/
├── claude.md                   # Single Source of Truth (Kiblat)
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── public/
│   ├── logo.png                # Official Sembilan Belas Idol Logo
│   └── reza.png                # Custom Photo for Participant #1 (Reza)
└── src/
    ├── app/
    │   ├── globals.css         # Blue stage curtain gradient, neon blue glows & shimmer keyframes
    │   ├── layout.tsx          # Root layout with Outfit & Plus Jakarta fonts
    │   └── page.tsx            # Main landing page composition
    ├── components/
    │   ├── Navbar.tsx          # Header with SembilanBelas Idol logo, Karang Taruna RW 19 credit & ice blue VOTE button
    │   ├── Hero.tsx            # Stage Curtain Hero with neon blue glowing logo & ice cyan CTA buttons
    │   ├── VoteButton.tsx      # Clean ice light blue / cyan / silver glowing CTA button (No ExternalLink icon)
    │   ├── ParticipantCard.tsx # Framer Motion hover cards with RT 01-05 origin & clean image layout
    │   ├── ParticipantGrid.tsx # Category filter with Semua & Locked Finalist 🔒 tab + toast notification
    │   └── Footer.tsx          # Step-by-step voting guide & RW 19 Antapani Tengah credits
    ├── data/
    │   └── participants.ts     # Idol contestants dataset with Reza (/reza.png), RT 01-05 origins & YouTube performance links
    └── types/
        └── participant.ts      # TypeScript interfaces
```
