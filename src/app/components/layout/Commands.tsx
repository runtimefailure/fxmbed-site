"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
  name: string;
  id: string;
  description: string;
  cog: string;
  type: string;
}

const Commands = () => {
  const [search, setSearch] = useState("");
  const [commandsData, setCommandsData] = useState<Command[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bot/commands")
      .then((res) => res.json())
      .then((data) => {
        setCommandsData(data.commands || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch commands:", err);
        setLoading(false);
      });
  }, []);

  const filteredCommands = commandsData.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.cog.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="commands" className="w-full max-w-6xl px-4 py-20 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/5 pb-8 gap-4"
      >
        <h2 className="text-4xl font-black uppercase tracking-tighter">commands</h2>
        <input
          type="text"
          placeholder="SEARCH"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-white text-[10px] font-black uppercase tracking-widest outline-none md:text-right border-b border-transparent focus:border-white/10 transition-all py-2"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {!loading && filteredCommands.map((cmd) => (
            <motion.div
              layout
              key={cmd.id + cmd.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-white/5 bg-zinc-950/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all group "
            >
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block mb-2">
                /{cmd.name}
              </span>
              <span className="text-sm font-bold text-white uppercase block mb-4 group-hover:text-white transition-colors">
                {cmd.cog}
              </span>
              <p className="text-zinc-500 text-[10px] leading-relaxed">
                {cmd.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Commands;