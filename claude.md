# Kiblat Project - Indonesian Idol Voting System

## 1. Project Overview
A luxurious, elegant, and premium landing page for an Indonesian Idol-themed voting system. The application features a dark midnight & blue stage curtain ambient theme (`curtain-bg`) matching Screenshot 2, with the centered **Sembilan Belas Idol** emblem logo, electric neon blue glowing spotlight halos, glassmorphic UI components, a Hero section with a prominent Google Form VOTE CTA button, and interactive Framer Motion participant cards linking to YouTube performances.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom Design System Tokens (Blue stage curtain background, Electric Neon Cyan glow, Gold accents)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Repository: `meppani/19_Idol_Anteng`)

## 3. Current State
- **Status:** 🚀 Redesign Hero Section Complete & Pushed to GitHub Repository (`meppani/19_Idol_Anteng`).
- **Completed Milestones:**
  - [x] Initialized Next.js project structure with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
  - [x] Redesigned Hero Section matching Screenshot 2:
    - Blue stage curtain backdrop (`curtain-bg` with dark vignette folds)
    - Centered official logo image `Logo SembilanBelas Idol.png` (`public/logo.png`)
    - Multi-layered electric neon blue glowing halo behind the logo (`neon-blue-glow-lg`)
    - Clean white headline text: **"Dukung Idola Favoritmu Menuju Panggung Spektakuler"**
    - Google Form VOTE button and YouTube performances link
  - [x] Updated `Navbar.tsx` brand logo to match the official `Sembilan Belas Idol` logo.
  - [x] Created contestant data model (`src/types/participant.ts`) and realistic contestant dataset with YouTube URLs (`src/data/participants.ts`).
  - [x] Built `ParticipantCard.tsx` powered by **Framer Motion** (hover scale, glow box-shadow, shine line, YouTube redirect).
  - [x] Built `ParticipantGrid.tsx` with live search and category filter tabs.
  - [x] Built `Footer.tsx` with a step-by-step voting guide and official event links.
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
    │   ├── Navbar.tsx          # Sticky glass header with SembilanBelas Idol logo & VOTE button
    │   ├── Hero.tsx            # Redesigned Stage Curtain Hero with neon blue glowing logo & CTA
    │   ├── VoteButton.tsx      # Reusable multi-layered glowing CTA button
    │   ├── ParticipantCard.tsx # Framer Motion hover scale & glow cards with YouTube links
    │   ├── ParticipantGrid.tsx # Category filterable & searchable contestant grid
    │   └── Footer.tsx          # Step-by-step voting guide & footer links
    ├── data/
    │   └── participants.ts     # Idol contestants dataset with YouTube performance links
    └── types/
        └── participant.ts      # TypeScript interfaces
```
