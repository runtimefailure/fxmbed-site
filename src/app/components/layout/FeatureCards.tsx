'use client';
import React from "react";
import { motion } from "framer-motion";

const FeatureCards = () => {
  const features = [
    { title: "roblox", tag: "lookup", desc: "Advanced profile lookup, 3D avatar rendering, badge tracking and more" },
    { title: "media", tag: "tools", desc: "Extract text via OCR, identify music with Shazam, apply image filters." },
    { title: "crypto", tag: "finance", desc: "Crypto finance details." },
    { title: "staff", tag: "moderation", desc: "Moderation made easy, clean your server way cleaner." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {features.map((f, i) => (
        <motion.div 
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 border border-white/5 bg-zinc-950/20 hover:bg-zinc-900/40 hover:border-white/10 overflow-hidden group transition-all duration-500 flex flex-col justify-between aspect-video transform-gpu"
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest block mb-4 transition-colors group-hover:text-zinc-400">{f.tag}</span>
              <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-4 group-hover:translate-x-1 transition-transform duration-500">{f.title}</h3>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-500">{f.desc}</p>
          </div>
          
          <motion.div 
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-1000 will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ WebkitTransform: 'translateZ(0)' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCards;