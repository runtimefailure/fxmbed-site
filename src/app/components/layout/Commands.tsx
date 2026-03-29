"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commandsData = [
  { name: "base64 encode", category: "base64", desc: "Encode a string to Base64" },
  { name: "base64 decode", category: "base64", desc: "Decode a Base64 string" },
  { name: "convert discord2user", category: "convert", desc: "Get Discord User info from an ID" },
  { name: "convert discord2id", category: "convert", desc: "Get Discord User ID from a username" },
  { name: "convert roblox2user", category: "convert", desc: "Get Roblox User info from an ID" },
  { name: "convert roblox2id", category: "convert", desc: "Get Roblox User ID from a username" },
  { name: "crypto price", category: "crypto", desc: "Get the current price and 24h stats of a crypto" },
  { name: "crypto graph", category: "crypto", desc: "View the price graph of a crypto" },
  { name: "crypto address", category: "crypto", desc: "Check balance and transactions of a crypto address" },
  { name: "crypto track", category: "crypto", desc: "Track a crypto transaction hash" },
  { name: "dev npm", category: "dev", desc: "Search for packages on the npm registry" },
  { name: "dev pypi", category: "dev", desc: "Search for Python packages on PyPI" },
  { name: "dev httpstatus", category: "dev", desc: "Explain what a specific HTTP status code means" },
  { name: "dev color", category: "dev", desc: "Preview a Hex color and get its variants" },
  { name: "discord user", category: "discord", desc: "View a Discord user's profile" },
  { name: "discord avatar", category: "discord", desc: "View a Discord user's avatar" },
  { name: "discord banner", category: "discord", desc: "View a Discord user's banner" },
  { name: "discord dsa", category: "discord", desc: "View Discord DSA violations for a user" },
  { name: "discord server", category: "discord", desc: "View Discord Server information" },
  { name: "embed", category: "media", desc: "Download and embed a video or audio track" },
  { name: "fun ship", category: "fun", desc: "Calculate compatibility between two users" },
  { name: "fun 8ball", category: "fun", desc: "Get an answer from the magic 8-ball" },
  { name: "fun meme", category: "fun", desc: "Fetch a random meme from Reddit" },
  { name: "fun cat", category: "fun", desc: "Fetch a random cat image" },
  { name: "fun poll", category: "fun", desc: "Create a quick reaction-based poll" },
  { name: "info bot", category: "info", desc: "View bot statistics and uptime" },
  { name: "info ping", category: "info", desc: "Check bot latency" },
  { name: "info uptime", category: "info", desc: "Show how long the bot has been online" },
  { name: "lastfm login", category: "lastfm", desc: "Link your Last.fm account" },
  { name: "lastfm nowplaying", category: "lastfm", desc: "Currently playing track" },
  { name: "lastfm latest", category: "lastfm", desc: "View latest scrobbles" },
  { name: "lastfm spotify", category: "lastfm", desc: "Find current playing on Spotify" },
  { name: "lastfm lyrics", category: "lastfm", desc: "View lyrics of current playing song on Spotify" },
  { name: "media imagetogif", category: "media", desc: "Convert an image to GIF" },
  { name: "media speechbubble", category: "media", desc: "Add a speech bubble cutout to an image" },
  { name: "media caption", category: "media", desc: "Add caption to an image" },
  { name: "media deepfry", category: "media", desc: "Deepfry an image" },
  { name: "media ocr", category: "util", desc: "Extract text from an image" },
  { name: "roblox user", category: "roblox", desc: "View detailed information about a Roblox user" },
  { name: "roblox render avatar", category: "roblox", desc: "Render a Roblox avatar into a 3D model" },
  { name: "social github", category: "social", desc: "View GitHub profile and statistics" },
  { name: "staff purge", category: "staff", desc: "Purge messages with advanced filters" },
  { name: "staff embed", category: "staff", desc: "Send a fully customized embed" },
  { name: "util iplookup", category: "util", desc: "Lookup an IP address" },
  { name: "util qr", category: "util", desc: "Generate a QR code" },
  { name: "util weather", category: "util", desc: "Get current weather for a city" },
  { name: "util screenshot", category: "util", desc: "Capture a website screenshot" },
  { name: "util shazam", category: "util", desc: "Find a track from an audio file" }
];

const Commands = () => {
  const [search, setSearch] = useState("");

  const filteredCommands = commandsData.filter((cmd) => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
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
          {filteredCommands.map((cmd) => (
            <motion.div 
              layout
              key={cmd.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border border-white/5 bg-zinc-950/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all group "
            >
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block mb-2">/{cmd.name.includes(' ') ? cmd.name.split(' ').slice(1).join(' ') : cmd.name}</span>
              <span className="text-sm font-bold text-white uppercase block mb-4 group-hover:text-white transition-colors">
                {cmd.category}
              </span>
              <p className="text-zinc-500 text-[10px] leading-relaxed">
                {cmd.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Commands;
