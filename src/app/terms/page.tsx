import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-32 pb-24 animate-reveal">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Terms of Service</h1>
        
        <div className="space-y-12 text-gray-400 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">1. Acceptance of Terms</h2>
            <p>
              By adding FXMBED ("the Application") to your Discord account or server, you agree to be bound by these Terms of Service. If you do not agree to these terms, please remove the Application.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">2. Proper Usage</h2>
            <p>
              Users are expected to use the Application in accordance with Discord's Terms of Service and Community Guidelines. Any misuse of the Application for malicious purposes (e.g., raiding, harassment, spamming) may result in a permanent ban from using the Application.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">3. No Warranty</h2>
            <p>
              The Application is provided "as is" without any warranties. While we strive for 24/7 uptime and accuracy in our tools (crypto tracking, translations, etc.), we cannot guarantee performance and are not liable for any issues arising from service disruptions or inaccuracies.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">4. Third-Party Content</h2>
            <p>
              The Application fetches content from various third-party sources (e.g., Reddit, Steam, Roblox). We are not responsible for the content provided by these sources.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4">5. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the Application after such modifications constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
