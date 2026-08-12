"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { VoteButton } from "./VoteButton";
import { PlayCircle, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden curtain-bg min-h-[90vh] flex items-center justify-center">
      
      {/* Dark Vignette Curtain Overlay */}
      <div className="curtain-vignette" />

      {/* Decorative Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center">
        
        {/* Sembilan Belas Idol Logo & Electric Neon Blue Glow Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-flex items-center justify-center mb-6 sm:mb-8 group"
        >
          {/* Electric Neon Blue Glowing Aura Background */}
          <div className="neon-blue-glow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 animate-pulse-glow" />

          {/* Sembilan Belas Idol Main Emblem Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-[300px] sm:w-[460px] md:w-[540px] h-[170px] sm:h-[260px] md:h-[300px] filter drop-shadow-[0_0_35px_rgba(0,240,255,0.75)]"
          >
            <Image
              src="/logo.png"
              alt="Sembilan Belas Idol Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Headline Text Matching Screenshot 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          Dukung Idola Favoritmu Menuju Panggung Spektakuler
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium"
        >
          Suaramu menentukan masa depan calon bintang musik Indonesia. Tonton penampilan terbaik di YouTube dan berikan dukungannmu melalui formulir voting resmi.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none"
        >
          <VoteButton label="KIRIM VOTE SEKARANG" size="lg" />

          <a
            href="#participants"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] backdrop-blur-md"
          >
            <PlayCircle className="w-5 h-5 text-cyan-400" />
            <span>Lihat Penampilan Peserta</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
