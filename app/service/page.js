"use client";
import Link from "next/link";
import Image from "next/image";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";
import { useState, useEffect } from "react";

export default function ServicePage() {
  const [showBubbles, setShowBubbles] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("showBubbles");
      return stored !== null ? stored === "true" : true;
    }
    return true;
  });

  // On mount, read from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("showBubbles");
    if (stored !== null) setShowBubbles(stored === "true");
  }, []);

  // When showBubbles changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("showBubbles", showBubbles);
  }, [showBubbles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex flex-col overflow-x-hidden">
      <MenuBar showBubbles={showBubbles} setShowBubbles={setShowBubbles} />
      {showBubbles && <BubblesBackground />}
      <main className="flex-1 w-full flex flex-col">
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1200&q=80"
            alt="Service"
            fill
            priority
            className="object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
              Service & Underhåll
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 font-medium max-w-2xl mb-8 drop-shadow">
              Vi erbjuder professionell service och underhåll för din bil – alltid med kvalitet och omtanke.
            </p>
            <Link
              href="/carwash"
              className="px-7 py-3 rounded-full font-semibold text-lg shadow-xl bg-gradient-to-r from-red-500 to-red-700 text-white backdrop-blur-md bg-opacity-80 border border-white/30 hover:scale-105 hover:from-red-600 hover:to-red-800 transition-all duration-200"
              style={{
                boxShadow: "0 4px 32px 0 rgba(239,68,68,0.18), 0 1.5px 0 0 rgba(0,0,0,0.04)",
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              Boka service
            </Link>
          </div>
        </section>
        <section className="max-w-3xl mx-auto mb-12 px-4 pt-20 pb-20">
          <h2 className="text-3xl font-bold text-red-900 mb-4 text-center drop-shadow-lg">
            Vad ingår i vår service?
          </h2>
          <ul className="text-gray-800 text-lg drop-shadow-lg space-y-4">
            <li>✔️ Olje- och filterbyte</li>
            <li>✔️ Kontroll av bromsar och däck</li>
            <li>✔️ Påfyllning av vätskor</li>
            <li>✔️ Säkerhetskontroll</li>
            <li>✔️ Genomgång av bilens elektronik</li>
            <li>✔️ Personlig rådgivning och serviceprotokoll</li>
          </ul>
        </section>
        <section className="w-full flex justify-center mb-12">
          <Link
            href="/carwash"
            className="inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-xl bg-gradient-to-r from-red-500 to-red-700 text-white backdrop-blur-md bg-opacity-80 border border-white/30 hover:scale-105 hover:from-red-600 hover:to-red-800 transition-all duration-200"
            style={{
              boxShadow: "0 4px 32px 0 rgba(239,68,68,0.18), 0 1.5px 0 0 rgba(0,0,0,0.04)",
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            Se alla tjänster
          </Link>
        </section>
      </main>
      <footer
        className="w-full bg-gray-900/80 backdrop-blur-xl border-t border-white/20 text-gray-100 text-center py-6 mt-12 rounded-t-3xl shadow-inner"
        style={{
          boxShadow: "0 -8px 32px 0 rgba(0,0,0,0.10)",
          background: "linear-gradient(90deg, rgba(30,41,59,0.92) 0%, rgba(30,41,59,0.85) 100%)",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        <p className="text-base font-medium tracking-wide drop-shadow">
          &copy; {new Date().getFullYear()} Varbegs Bilvård. All rights reserved.
        </p>
      </footer>
    </div>
  );
}