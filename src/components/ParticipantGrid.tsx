"use client";

import React, { useState } from "react";
import { PARTICIPANTS } from "@/data/participants";
import { ParticipantCard } from "./ParticipantCard";
import { Search, Sparkles, Trophy, Music2 } from "lucide-react";

export const ParticipantGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", "Finalist", "Top 6", "Spekta"];

  const filteredParticipants = PARTICIPANTS.filter((p) => {
    const matchesCategory =
      selectedCategory === "Semua" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.songTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="participants" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GALERI PENAMPILAN PESERTA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Pilih Bintang{" "}
          <span className="text-gold-gradient">Favoritmu</span>
        </h2>
        <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Klik kartu peserta untuk menonton video penampilan lengkap di YouTube, lalu berikan dukungan voting resmi melalui Google Form.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl glass-panel border border-amber-500/20">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari nama atau lagu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
          />
        </div>
      </div>

      {/* Grid Layout */}
      {filteredParticipants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParticipants.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center glass-panel rounded-2xl border border-slate-800">
          <Music2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-slate-300">Tidak ada peserta ditemukan</h3>
          <p className="text-slate-500 text-sm mt-1">
            Coba kata kunci pencarian lain atau pilih kategori Semua.
          </p>
        </div>
      )}
    </section>
  );
};
