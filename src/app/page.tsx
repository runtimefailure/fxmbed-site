"use client";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import FeatureCards from "./components/layout/FeatureCards";
import Hero from "./components/layout/Hero";
import Commands from "./components/layout/Commands";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        
        <section className="w-full max-w-6xl px-4 py-32 mx-auto border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter">features</h2>
          </motion.div>
          <FeatureCards />
        </section>

        <Commands />
        
        <section className="w-full py-48 px-4 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto flex flex-col items-center text-center border border-white/5 rounded-[3rem] py-32 px-8 relative bg-zinc-950/20 backdrop-blur-3xl overflow-hidden group"
          >
            <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter mb-8 leading-none relative z-10">fxmbed</h2>
            
            <motion.p 
              className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em] mb-16 relative z-10"
            >
              discord user application
            </motion.p>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.com/oauth2/authorize?client_id=1486053884739850452" 
              target="_blank"
              className="px-16 py-6 bg-white text-black text-[12px] font-black uppercase tracking-[0.3em] transition-all relative z-10"
            >
              add application
            </motion.a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
