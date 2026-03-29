"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Commands", href: "/#commands" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1486053884739850452";

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 transition-all duration-500 ease-in-out">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-2 bg-black/80 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl relative">
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center group">
            <Image
              className=""
              src="/assets/img/logo.png"
              alt="fxmbed logo"
              width={40}
              height={40}
              priority
            />
            <span style={{ fontFamily: 'Horizon' }} className="ml-3 text-white text-xs tracking-widest hidden sm:block uppercase">fxmbed</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative z-10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                hoveredLink === link.name ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
              <div 
                className={`absolute inset-0 -z-10 bg-white/10 rounded-full transition-all duration-300 ease-out ${
                  hoveredLink === link.name ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            </Link>
          ))}
          <Link 
            href={inviteLink} 
            target="_blank"
            className="ml-4 px-6 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2 whitespace-nowrap group"
          >
            Add App
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <button 
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/90 border border-white/10 rounded-3xl backdrop-blur-2xl md:hidden flex flex-col gap-4 items-center animate-reveal">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href={inviteLink} 
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all text-center flex items-center justify-center gap-2"
            >
              Add App
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
