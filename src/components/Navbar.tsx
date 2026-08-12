"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { VoteButton } from "./VoteButton";
import { Menu, X, Sparkles, Music } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-2.5 shadow-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Sembilan Belas Idol Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-36 sm:w-44 h-10 filter drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
              <Image
                src="/logo.png"
                alt="Sembilan Belas Idol Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200"
            >
              Beranda
            </a>
            <a
              href="#participants"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1.5"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              Peserta & Penampilan
            </a>
            <a
              href="#how-to-vote"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Cara Vote
            </a>
          </nav>

          {/* Right Header Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              VOTING OPEN
            </div>
            <VoteButton size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-cyan-500/20 px-4 pt-4 pb-6 mt-3"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800"
              >
                Beranda
              </a>
              <a
                href="#participants"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800"
              >
                Peserta & Penampilan YouTube
              </a>
              <a
                href="#how-to-vote"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800"
              >
                Cara Vote Google Form
              </a>

              <div className="pt-2 flex flex-col gap-3 items-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  VOTING OPEN NOW
                </div>
                <VoteButton size="md" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
