# Kiblat Project - Indonesian Idol Voting System

## 1. Project Overview
A luxurious, elegant, and premium landing page for an Indonesian Idol-themed voting system. The application features a dark midnight ambient theme with metallic gold gradients, neon cyan glowing effects, glassmorphic UI components, a Hero section with a prominent Google Form VOTE CTA button, and interactive Framer Motion participant cards linking to YouTube performances.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + Custom Design System Tokens (Gold, Neon Cyan, Glassmorphic panels, Shimmer animations)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (Repository: `meppani/19_Idol_Anteng`)

## 3. Current State
- **Status:** 🎉 Complete & Production Build Verified (`✓ Compiled successfully`).
- **Completed Milestones:**
  - [x] Initialized Next.js project structure with TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
  - [x] Defined global design system (`globals.css`) with metallic text gradients, dark glassmorphism, ambient spotlight glows, and hover shimmer sweeps.
  - [x] Configured luxury theme tokens in `tailwind.config.ts` (gold gradients, neon cyan accents, custom box shadows, keyframe animations).
  - [x] Created contestant data model (`src/types/participant.ts`) and realistic contestant dataset with YouTube URLs (`src/data/participants.ts`).
  - [x] Built sticky `Navbar.tsx` with Indonesian Idol emblem branding, quick navigation links, and header VOTE CTA.
  - [x] Built `Hero.tsx` with animated spotlight halo emblem, headline, subtitle, counter stats, and glowing "KIRIM VOTE SEKARANG" button linking to Google Form in a new tab.
  - [x] Built `ParticipantCard.tsx` powered by **Framer Motion**:
    - Smooth hover scale effect (`scale: 1.04`, `y: -6`)
    - Gold and neon cyan box-shadow glow expansion
    - Sweeping light shimmer overlay line
    - YouTube video preview overlay button redirecting to YouTube in a new tab (`target="_blank"`)
    - Direct vote CTA button
  - [x] Built `ParticipantGrid.tsx` with live search (by name/song/origin) and category filter tabs (Semua, Finalist, Top 6, Spekta).
  - [x] Built `Footer.tsx` with a step-by-step voting guide and official event links.
  - [x] Verified zero-error production build (`npx next build`).

## 4. Task Todo List
- [x] Initialize Next.js project with Tailwind CSS and Framer Motion
- [x] Configure custom luxury design system tokens & glassmorphism
- [x] Build Header / Navbar with Indonesian Idol glowing branding
- [x] Build Hero Section with animated emblem halo and Google Form Vote CTA button
- [x] Build Participant Grid Section with Framer Motion cards (hover scale, glowing box-shadow, shimmer line, YouTube redirect in new tab)
- [x] Create realistic participant dataset with official performance YouTube links
- [x] Build Footer with 3-step voting guide and event credits
- [x] Verify complete production build (`npm run build`)

## 5. Project File Structure
```
19_Idol_Anteng/
├── claude.md                   # Single Source of Truth (Kiblat)
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── public/
└── src/
    ├── app/
    │   ├── globals.css         # Global design tokens, ambient glows & shimmer keyframes
    │   ├── layout.tsx          # Root layout with Outfit & Plus Jakarta fonts
    │   └── page.tsx            # Main landing page composition
    ├── components/
    │   ├── Navbar.tsx          # Sticky glass header with branding & VOTE button
    │   ├── Hero.tsx            # Hero spotlight section with main Google Form CTA
    │   ├── VoteButton.tsx      # Reusable multi-layered glowing CTA button
    │   ├── ParticipantCard.tsx # Framer Motion hover scale & glow cards with YouTube links
    │   ├── ParticipantGrid.tsx # Category filterable & searchable contestant grid
    │   └── Footer.tsx          # Step-by-step voting guide & footer links
    ├── data/
    │   └── participants.ts     # Idol contestants dataset with YouTube performance links
    └── types/
        └── participant.ts      # TypeScript interfaces
```
