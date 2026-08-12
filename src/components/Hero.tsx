"use client";

import React from "react";
import { motion } from "framer-motion";
import { VoteButton } from "./VoteButton";
import { Crown, Flame, PlayCircle, ShieldCheck, Sparkles, Award } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-hero-gradient">
      
      {/* Background Ambient Spotlights */}
      <div className="spotlight-gold top-10 left-1/2 -translate-x-1/2 opacity-40 animate-pulse-glow" />
      <div className="spotlight-neon -top-20 right-10 opacity-30" />
      <div className="spotlight-neon bottom-0 -left-20 opacity-20" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
        >
          <Crown className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>INDONESIAN IDOL SPEKTAKULER SHOW</span>
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </motion.div>

        {/* Indonesian Idol Main Emblem Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block mb-8"
        >
          {/* Outer Glowing Emblem Ring */}
          <div className="w-32 h-32 sm:w-44 sm:h-44 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-amber-200 to-cyan-400 p-1 shadow-[0_0_60px_rgba(212,175,55,0.6)] animate-float">
            <div className="w-full h-full rounded-full bg-[#070b1e] p-3 flex flex-col items-center justify-center border border-amber-400/30">
              <Award className="w-10 h-10 sm:w-14 sm:h-14 text-amber-400 drop-shadow-[0_0_12px_rgba(255,223,0,0.8)]" />
              <span className="text-[10px] sm:text-xs font-black tracking-widest text-gold-gradient uppercase mt-1">
                SPEKTA 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
        >
          Dukung Idola Favoritmu Menuju{" "}
          <span className="block mt-2 text-gold-gradient drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]">
            Panggung Spektakuler
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Suaramu menentukan masa depan calon bintang musik Indonesia. Tonton penampilan terbaik peserta di YouTube dan berikan dukungannmu melalui formulir voting resmi.
        </motion.p>

        {/* Primary CTA Vote Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <VoteButton label="KIRIM VOTE SEKARANG" size="lg" />

          <a
            href="#participants"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-900/80 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] backdrop-blur-md"
          >
            <PlayCircle className="w-5 h-5 text-cyan-400" />
            <span>Lihat Penampilan Peserta</span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center">
            <Flame className="w-6 h-6 text-amber-400 mb-1" />
            <span className="text-xl sm:text-2xl font-black text-white">650.000+</span>
            <span className="text-xs text-slate-400">Total Suara Masuk</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center">
            <Crown className="w-6 h-6 text-yellow-300 mb-1" />
            <span className="text-xl sm:text-2xl font-black text-white">Top 6</span>
            <span className="text-xs text-slate-400">Finalis Terbaik</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center">
            <PlayCircle className="w-6 h-6 text-cyan-400 mb-1" />
            <span className="text-xl sm:text-2xl font-black text-white">100% HD</span>
            <span className="text-xs text-slate-400">Performances YouTube</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-1" />
            <span className="text-xl sm:text-2xl font-black text-white">Resmi</span>
            <span className="text-xs text-slate-400">Google Form Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
