# Kiblat Project - Indonesian Idol Voting System

## 1. Project Overview
A luxurious, elegant, and premium landing page for an Indonesian Idol-themed voting system. The application features a dark midnight & blue stage curtain ambient theme (`curtain-bg`) matching Screenshot 2, centered **Sembilan Belas Idol** emblem logo, header sponsor credit **"PRESENTED BY KARANG TARUNA RW 19"**, electric neon cyan glowing halos, and an **Ice Light Blue, Cyan & Metallic Silver** button palette with 0% yellow/gold.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom Design System Tokens (Blue stage curtain background, Ice Cyan/Silver button palette)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Repository: `meppani/19_Idol_Anteng`)

## 3. Current State
- **Status:** 🚀 Button Palette Updated & Header Credit Added — Pushed to GitHub (`meppani/19_Idol_Anteng`).
- **Completed Milestones:**
  - [x] Initialized Next.js project structure with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
  - [x] Added **"PRESENTED BY KARANG TARUNA RW 19"** text credit next to the header logo in `Navbar.tsx`.
  - [x] Redesigned ALL buttons across the site to use **Ice Light Blue, Electric Cyan, and Metallic Silver** gradients (Removed 100% of yellow/gold colors from all buttons, tabs, and badges).
  - [x] Redesigned Hero Section matching Screenshot 2 (blue stage curtain backdrop, Sembilan Belas Idol logo, neon blue glowing halo, clean white headline).
  - [x] Built `ParticipantCard.tsx` powered by **Framer Motion** (ice cyan hover scale, glow box-shadow, shine line, YouTube redirect).
  - [x] Built `ParticipantGrid.tsx` with live search and ice cyan category filter tabs.
  - [x] Built `Footer.tsx` with a step-by-step voting guide and Karang Taruna RW 19 credits.
  - [x] Verified zero-error production build (`npx next build`).
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
    │   ├── VoteButton.tsx      # Ice light blue / cyan / silver glowing CTA button (No yellow/gold)
    │   ├── ParticipantCard.tsx # Framer Motion hover cards with ice cyan VOTE button & YouTube links
    │   ├── ParticipantGrid.tsx # Ice cyan category filterable & searchable contestant grid
    │   └── Footer.tsx          # Step-by-step voting guide & Karang Taruna RW 19 credits
    ├── data/
    │   └── participants.ts     # Idol contestants dataset with YouTube performance links
    └── types/
        └── participant.ts      # TypeScript interfaces
```
