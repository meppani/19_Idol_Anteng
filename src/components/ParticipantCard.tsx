"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Participant } from "@/types/participant";
import { Play, Youtube, Vote, MapPin, Music, Sparkles } from "lucide-react";

interface ParticipantCardProps {
  participant: Participant;
  googleFormUrl?: string;
}

export const ParticipantCard: React.FC<ParticipantCardProps> = ({
  participant,
  googleFormUrl = "https://forms.google.com",
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Redirect to YouTube in a new tab when card is clicked
    window.open(participant.youtubeUrl, "_blank", "noopener,noreferrer");
  };

  const handleVoteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger parent YouTube open
    window.open(googleFormUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.04,
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onClick={handleCardClick}
      className="group relative cursor-pointer rounded-2xl overflow-hidden glass-panel border border-amber-500/20 hover:border-amber-400/80 transition-all duration-300 shadow-card-glow hover:shadow-hover-card flex flex-col"
    >
      {/* Sleek Shimmer Line Overlay Animation */}
      <div className="shimmer-line z-20" />

      {/* Card Top Image Thumbnail */}
      <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-slate-950">
        <Image
          src={participant.imageUrl}
          alt={participant.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
        />

        {/* Dark Vignette Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1129] via-slate-950/40 to-transparent" />

        {/* Badge Overlay */}
        {participant.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1.5 rounded-full bg-slate-950/80 border border-amber-400/50 text-amber-300 text-xs font-black shadow-lg backdrop-blur-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {participant.badge}
            </span>
          </div>
        )}

        {/* YouTube Performance Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-slate-950/40 backdrop-blur-[2px]">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 via-amber-400 to-yellow-300 p-0.5 shadow-[0_0_30px_rgba(255,0,0,0.8)]"
          >
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <Play className="w-7 h-7 text-amber-300 fill-amber-300 ml-1" />
            </div>
          </motion.div>
        </div>

        {/* View Count Tag */}
        {participant.views && (
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 text-red-400 text-xs font-bold border border-red-500/30">
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>{participant.views} Views</span>
          </div>
        )}
      </div>

      {/* Card Content Info */}
      <div className="p-5 flex-1 flex flex-col justify-between relative z-10 bg-[#0b1129]/90 backdrop-blur-md">
        <div>
          {/* Origin & Stage Name */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-semibold">
            <span className="flex items-center gap-1 text-cyan-400">
              <MapPin className="w-3.5 h-3.5" />
              {participant.origin}
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
              {participant.category}
            </span>
          </div>

          {/* Full Name */}
          <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors duration-200 tracking-wide">
            {participant.name}
          </h3>

          {/* Song Performance Title */}
          <div className="mt-2.5 flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-amber-500/30 transition-colors">
            <Music className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex flex-col text-xs">
              <span className="font-bold text-slate-200 line-clamp-1">
                "{participant.songTitle}"
              </span>
              <span className="text-slate-400 text-[11px]">
                Original by {participant.originalArtist}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          {/* YouTube Redirect Link Button */}
          <button
            onClick={handleCardClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-950/50 hover:bg-red-900/70 border border-red-500/40 text-red-200 text-xs font-bold transition-all duration-200 group-hover:border-red-400"
            title="Tonton Penampilan di YouTube"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>Tonton Video</span>
          </button>

          {/* Direct Vote Button */}
          <button
            onClick={handleVoteClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-200 transform hover:scale-105"
          >
            <Vote className="w-4 h-4" />
            <span>VOTE</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
