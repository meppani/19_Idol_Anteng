"use client";

import React from "react";
import Image from "next/image";
import { VoteButton } from "./VoteButton";
import { CheckCircle2, ExternalLink, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020512] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-slate-400">

      {/* How To Vote Steps Banner */}
      <div id="how-to-vote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden">

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-black text-xl">
                1
              </div>
              <h4 className="text-white font-extrabold text-lg">Pilih Idola & Video</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tonton video penampilan peserta di YouTube untuk menentukan siapa yang pantas menjadi pemenang Spektakuler Show.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-300 font-black text-xl">
                2
              </div>
              <h4 className="text-white font-extrabold text-lg">Klik Tombol VOTE</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tekan tombol VOTE di landing page ini untuk membuka formulir resmi Google Form di tab baru secara aman.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 font-black text-xl">
                3
              </div>
              <h4 className="text-white font-extrabold text-lg">Kirim Formulir Voting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pilih nama peserta favoritmu pada formulir dan tekan kirim. Votingmu langsung terhitung secara real-time!
              </p>
            </div>
          </div>

          {/* Bottom CTA Inside Banner */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Voting gratis dan terbuka untuk seluruh warga RW 19 Antapani Tengah.</span>
            </div>
            <VoteButton size="md" label="VOTE SEKARANG" />
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">

          {/* Col 1: Brand & Credit */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-36 h-10 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                <Image
                  src="/logo.png"
                  alt="Sembilan Belas Idol Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Portal Voting Resmi Sembilan Belas Idol — Presented by Karang Taruna RW 19. Hadir untuk memberikan ruang apresiasi bagi talenta-talenta terbaik menuju panggung spektakuler.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="text-white text-sm font-extrabold tracking-wider uppercase mb-4">
              Navigasi Cepat
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#participants" className="hover:text-cyan-400 transition-colors">
                  Daftar Peserta Idol
                </a>
              </li>
              <li>
                <a href="#how-to-vote" className="hover:text-cyan-400 transition-colors">
                  Panduan Voting Google Form
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: External Links */}
          <div>
            <h5 className="text-white text-sm font-extrabold tracking-wider uppercase mb-4">
              Tautan Resmi
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a
                  href="https://forms.gle/LXouTfTbTQ1g6saq5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>Google Form Voting</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@IndonesianIdolOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <span>Official YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Sembilan Belas Idol — Karang Taruna RW 19. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Sembilan Belas Idol Fans
          </p>
        </div>
      </div>
    </footer>
  );
};
