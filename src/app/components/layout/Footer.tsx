import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl py-20 mt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 px-4 mx-auto">
      <div className="flex items-center gap-4">
        <span style={{ fontFamily: 'Horizon', fontVariant: 'small-caps' }} className="text-white text-xl tracking-widest uppercase">FXMBED</span>
        <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">© 2026</span>
      </div>
      <div className="flex items-center gap-10">
        <Link href="/privacy" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors">privacy</Link>
        <Link href="/terms" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors">terms</Link>
        <Link href="https://dc.queenmc.pl" target="_blank" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors">discord</Link>
      </div>
    </footer>
  );
};

export default Footer;
