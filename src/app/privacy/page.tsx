import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-32 pb-24 animate-reveal">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Privacy Policy</h1>
        
        <div className="space-y-12 text-gray-400 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">1. Information We Collect</h2>
            <p>
              FXMBED ("the Application") collects minimal data necessary for functionality. This includes Discord User IDs, Server IDs, and interaction data (commands used). We do not store message content unless explicitly required by a command (e.g., OCR processing, which is handled in-memory and not persisted).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">2. How We Use Information</h2>
            <p>
              Collected data is used solely to provide and improve the Application's services. User IDs are used to manage user-specific settings (like Last.fm linking). Interaction data is used for internal analytics to understand command popularity and performance.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">3. Data Retention</h2>
            <p>
              We retain user-specific settings until the user explicitly requests deletion or unlinks their account (e.g., using `/lastfm logout`). Temporary files generated during media processing are deleted immediately after the command execution completes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">4. Third-Party Services</h2>
            <p>
              The Application interacts with third-party APIs (e.g., Roblox, CoinGecko, Last.fm, Google Translate). These services may collect data according to their own privacy policies. We do not share your private Discord information with these services beyond what is necessary to fulfill your requests.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">5. Your Rights</h2>
            <p>
              Users can request the deletion of their stored data at any time by contacting us through our official Discord server.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
