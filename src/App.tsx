/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { useState, FC } from 'react';
import { GunslingersLogo } from './components/Logo';
import { TeamSection } from './components/TeamSection';
import { HeroSlider } from './components/HeroSlider';
import { TeamMoments } from './components/TeamMoments';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'TEAM', href: '#team-section' },
    { name: 'JOIN', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 md:h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <GunslingersLogo className="text-primary" />
            <span className="text-xl font-display italic tracking-tighter hidden md:block">
              GUNSLINGERS
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-display italic tracking-tighter text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Vertical Rail Text */}
      <div className="absolute right-6 bottom-32 hidden lg:flex flex-col items-center gap-10 z-30">
        <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.15em] text-[10px] font-bold opacity-50">
          EST. 2022
        </span>
        <div className="w-[1px] h-32 bg-border" />
        <div className="flex flex-col gap-4">
          <Instagram size={14} className="opacity-50 hover:opacity-100 cursor-pointer" />
          <Facebook size={14} className="opacity-50 hover:opacity-100 cursor-pointer" />
          <Youtube size={14} className="opacity-50 hover:opacity-100 cursor-pointer" />
        </div>
      </div>

      {/* Team Moments - New Grid Gallery Sector */}
      <TeamMoments />

      {/* Stats/News Strip */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 text-white">
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-black">22</h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Championship Wins</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-black">150+</h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Active Squad</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl font-black">04</h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Cities Represented</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact / CTA Section */}
      <section className="relative h-[60vh] flex items-center bg-muted">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/elite-gear/1200/800" 
            alt="Field" 
            className="w-full h-full object-cover opacity-100 brightness-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h2 className="text-4xl md:text-6xl mb-8 uppercase italic font-bold">READY TO MAKE HISTORY?</h2>
          <button className="bg-primary text-white border-2 border-primary px-12 py-4 font-bold tracking-[0.2em] text-xs hover:bg-white hover:text-black hover:border-white transition-all">
            SUBMIT APPLICATION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <GunslingersLogo className="text-primary w-12 h-12" />
              <span className="text-2xl font-display italic">GUNSLINGERS</span>
            </div>
            <p className="text-xs text-foreground/60 leading-loose max-w-sm">
              The new era of flag football has arrived. Professional standards, luxury aesthetic, elite competition. Founded in 2022 to redefine the game.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-[0.1em] mb-6 uppercase">Legal</h4>
            <div className="flex flex-col gap-3 text-xs opacity-60">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Membership Rules</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.1em] mb-6 uppercase">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-muted border-none p-3 text-[10px] tracking-widest w-full focus:ring-1 focus:ring-primary uppercase"
              />
              <button className="bg-primary px-4 hover:bg-white hover:text-black transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[10px] font-bold">
          <span>© 2024 GUNSLINGERS FLAG FOOTBALL. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <span>DESIGNED BY GUNSLINGERS LAB</span>
            <span>BACK TO TOP ↑</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
