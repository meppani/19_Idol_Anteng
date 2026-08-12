"use client";

import React from "react";
import { motion } from "framer-motion";
import { Vote, ExternalLink, Sparkles } from "lucide-react";

interface VoteButtonProps {
  formUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export const VoteButton: React.FC<VoteButtonProps> = ({
  formUrl = "https://forms.google.com",
  size = "lg",
  className = "",
  label = "VOTE NOW",
}) => {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm font-semibold gap-2",
    md: "px-7 py-3.5 text-base font-bold gap-2.5",
    lg: "px-9 py-4 text-lg font-extrabold gap-3 tracking-wider",
  };

  return (
    <motion.a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`relative group inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {/* Outer Pulse Glow Background (Ice Cyan & Electric Blue Halo) */}
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:blur-lg animate-pulse-glow" />

      {/* Button Body with Ice Light Blue, Cyan & Silver Gradient */}
      <span className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-300 via-white to-sky-400 text-slate-950 rounded-full shadow-[0_0_25px_rgba(0,240,255,0.6)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.9)] border border-cyan-100/60">
        
        {/* Shimmer overlay beam */}
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        <Vote className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 text-slate-950" />

        <span className="relative z-10 drop-shadow-sm uppercase font-black tracking-wider text-slate-950">
          {label}
        </span>

        <Sparkles className="w-4 h-4 text-slate-900 animate-spin-slow opacity-80" />

        <ExternalLink className="w-4 h-4 ml-1 text-slate-950 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
      </span>
    </motion.a>
  );
};
