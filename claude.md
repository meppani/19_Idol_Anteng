# Kiblat Project - Indonesian Idol Voting System

## 1. Project Overview
A luxurious, elegant, and premium landing page for an Indonesian Idol-themed voting system. The application features a dark midnight & blue stage curtain ambient theme (`curtain-bg`), centered **Sembilan Belas Idol** emblem logo, header credit **"PRESENTED BY KARANG TARUNA RW 19"**, contestant origins assigned to local neighborhood RTs (**RT 01** - **RT 05**), clean card layouts with zero top badges, simplified category filters (**Semua** and locked **Finalist 🔒**), and an **Ice Light Blue, Cyan & Metallic Silver** button color palette.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom Design System Tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Repository: `meppani/19_Idol_Anteng`)

## 3. Current State
- **Status:** 🚀 Card Badges Removed, RT Origins Set, Finalist Filter Locked — Pushed to GitHub (`meppani/19_Idol_Anteng`).
- **Completed Milestones:**
  - [x] Initialized Next.js project structure with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
  - [x] Removed top overlay badges ("Top Trending #1", "Runner Up", etc.) from all participant cards in `ParticipantCard.tsx`.
  - [x] Updated all contestant origins in `src/data/participants.ts` from city names to **RT 01**, **RT 02**, **RT 03**, **RT 04**, **RT 05**.
  - [x] Simplified category filter tabs in `ParticipantGrid.tsx` to only **Semua** and **Finalist 🔒** (removed Top 6 and Spekta).
  - [x] Implemented locked interaction for **Finalist 🔒** tab with toast notification feedback (`🔒 Kategori Finalist Belum Dibuka!`).
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
│   └── logo.png                # Official Sembilan Belas Idol Logo
└── src/
    ├── app/
    │   ├── globals.css         # Blue stage curtain gradient, neon blue glows & shimmer keyframes
    │   ├── layout.tsx          # Root layout with Outfit & Plus Jakarta fonts
    │   └── page.tsx            # Main landing page composition
    ├── components/
    │   ├── Navbar.tsx          # Header with SembilanBelas Idol logo, Karang Taruna RW 19 credit & ice blue VOTE button
    │   ├── Hero.tsx            # Stage Curtain Hero with neon blue glowing logo & ice cyan CTA buttons
    │   ├── VoteButton.tsx      # Ice light blue / cyan / silver glowing CTA button
    │   ├── ParticipantCard.tsx # Framer Motion hover cards with RT 01-05 origin & clean image layout (no badges)
    │   ├── ParticipantGrid.tsx # Category filter with Semua & Locked Finalist 🔒 tab + toast notification
    │   └── Footer.tsx          # Step-by-step voting guide & Karang Taruna RW 19 credits
    ├── data/
    │   └── participants.ts     # Idol contestants dataset with RT 01-05 origins & YouTube performance links
    └── types/
        └── participant.ts      # TypeScript interfaces
```
