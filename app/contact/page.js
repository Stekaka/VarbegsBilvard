"use client";
import { useState, useEffect } from "react";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";

export default function ContactPage() {
  const [showBubbles, setShowBubbles] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("showBubbles");
      return stored !== null ? stored === "true" : true;
    }
    return true;
  });

  useEffect(() => {
    const stored = localStorage.getItem("showBubbles");
    if (stored !== null) setShowBubbles(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("showBubbles", showBubbles);
  }, [showBubbles]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    error: "",
    loading: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setForm(f => ({ ...f, loading: true, error: "", sent: false }));
    // Simulate sending (replace with real API if needed)
    setTimeout(() => {
      setForm(f => ({ ...f, loading: false, sent: true }));
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex flex-col overflow-x-hidden">
      <MenuBar showBubbles={showBubbles} setShowBubbles={setShowBubbles} />
      {showBubbles && <BubblesBackground />}
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-24 pb-12 px-4">
        <section
          className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border border-white/30 bg-white/30 backdrop-blur-2xl p-0 overflow-hidden"
          style={{
            boxShadow: "0 8px 48px 0 rgba(239,68,68,0.10), 0 2px 8px 0 rgba(0,0,0,0.08)",
            border: "1.5px solid rgba(239,68,68,0.18)",
          }}
        >
          {/* Decorative gradient bar */}
          <div className="h-2 w-full bg-gradient-to-r from-red-500 via-red-400 to-yellow-300" />
          <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-red-900 mb-2 text-center drop-shadow-lg tracking-tight">
              Kontakta oss
            </h1>
            <p className="text-lg text-gray-800 text-center mb-8 max-w-lg">
              Har du frågor eller vill boka tid? Fyll i formuläret så återkommer vi så snart vi kan!
            </p>
            <form
              className="w-full flex flex-col gap-4 animate-fade-in"
              onSubmit={handleSubmit}
              style={{ animation: "fadeInUp 0.7s" }}
            >
              <input
                type="text"
                required
                placeholder="Namn"
                className="border border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/80 shadow transition"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                type="email"
                required
                placeholder="E-post"
                className="border border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/80 shadow transition"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              <textarea
                required
                placeholder="Meddelande"
                rows={5}
                className="border border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white/80 shadow resize-none transition"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
              <button
                type="submit"
                disabled={form.loading}
                className="inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-xl bg-gradient-to-r from-red-500 to-red-700 text-white backdrop-blur-md bg-opacity-90 border border-white/30 hover:scale-105 hover:from-red-600 hover:to-red-800 transition-all duration-200"
                style={{
                  boxShadow: "0 4px 32px 0 rgba(239,68,68,0.18), 0 1.5px 0 0 rgba(0,0,0,0.04)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                }}
              >
                {form.loading ? "Skickar..." : "Skicka meddelande"}
              </button>
              {form.sent && (
                <div className="text-green-600 text-center mt-2 font-semibold animate-fade-in">
                  Tack för ditt meddelande! Vi återkommer snart.
                </div>
              )}
              {form.error && (
                <div className="text-red-600 text-center mt-2">{form.error}</div>
              )}
            </form>
            <div className="mt-10 w-full flex flex-col gap-3 items-center text-gray-800 text-base">
              <div className="flex items-center gap-2">
                <svg className="text-red-500" width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A4.5 4.5 0 016.5 2h11A4.5 4.5 0 0122 6.5v11A4.5 4.5 0 0117.5 22h-11A4.5 4.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="2"/><path d="M6 7l6 5 6-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="font-bold text-red-700">E-post:</span> info@varbegsbilvard.se
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-red-500" width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A4.5 4.5 0 016.5 2h11A4.5 4.5 0 0122 6.5v11A4.5 4.5 0 0117.5 22h-11A4.5 4.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="2"/><path d="M6 7l6 5 6-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="font-bold text-red-700">Telefon:</span> 070-123 45 67
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-red-500" width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17.657 16.657A8 8 0 117.343 6.343a8 8 0 0110.314 10.314z" stroke="currentColor" strokeWidth="2"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/></svg>
                <span className="font-bold text-red-700">Adress:</span> Bilvägen 1, 432 00 Varberg
              </div>
            </div>
          </div>
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