"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] pt-40 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full text-center"
      >
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] mb-12"
        >
          fxmbed
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto mb-16 tracking-tight"
        >
          Your own discord user app featuring over 30+ commands.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link 
            href="https://discord.com/oauth2/authorize?client_id=1486053884739850452" 
            target="_blank"
            className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all"
          >
            add application
          </Link>
          <Link 
            href="#commands" 
            className="px-10 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            commands
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
