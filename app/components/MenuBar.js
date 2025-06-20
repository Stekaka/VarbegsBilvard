"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function MenuBar({ showBubbles, setShowBubbles }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3 bg-white/20 backdrop-blur-2xl border-b border-white/30 shadow-lg glass-nav">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
          style={{ minHeight: 40 }}
        >
          <Image
            src="/VB-logo.png"
            alt="Varbegs Bilvård logo"
            width={65} // increase size (e.g. 56px)
            height={65}
            priority
            style={{ marginTop: -8, marginBottom: -8 }} // pull logo up/down to overlap navbar padding
          />
        </Link>
        <div className="hidden sm:flex gap-4 sm:gap-8 items-center">
          {/* Nav links */}
          {[
            { href: "/carwash", label: "Biltvätt" },
            { href: "/tires", label: "Däck" },
            { href: "/service", label: "Service" },
            { href: "/giftcards", label: "Presentkort" },
            { href: "#testimonials", label: "Kundomdömen" },
            { href: "/contact", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-2 py-1"
            >
              {item.label}
            </Link>
          ))}

          {/* Bubble toggle button for desktop */}
          <button
            onClick={() => setShowBubbles((b) => !b)}
            onMouseUp={(e) => e.currentTarget.blur()} // Add this line
            className="bubble-toggle hidden sm:flex items-center justify-center p-0 ml-2 bg-transparent border-none outline-none focus:outline-none"
            aria-pressed={showBubbles}
            title={showBubbles ? "Stäng bubblor" : "Visa bubblor"}
            style={{ boxShadow: "none", background: "none" }}
          >
            <span
              style={{
                fontSize: "1.5em",
                transition: "filter 0.2s",
                filter: showBubbles
                  ? "drop-shadow(0 0 8px #22c55e)"
                  : "drop-shadow(0 0 8px #ef4444)",
              }}
            >
              🫧
            </span>
            {showBubbles ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  marginLeft: 4,
                  transition: "filter 0.2s",
                  filter: "drop-shadow(0 0 6px #22c55e)",
                }}
              >
                <circle cx="10" cy="10" r="9" fill="#22c55e" />
                <path
                  d="M6 10.5l2.5 2.5L14 7.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  marginLeft: 4,
                  transition: "filter 0.2s",
                  filter: "drop-shadow(0 0 6px #ef4444)",
                }}
              >
                <circle cx="10" cy="10" r="9" fill="#ef4444" />
                <path
                  d="M7 7l6 6M13 7l-6 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Hamburger icon for mobile */}
        <button
          className="sm:hidden p-2 focus:outline-none bg-transparent border-none shadow-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Öppna meny"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="var(--accent)" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="var(--accent)" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="var(--accent)" />
          </svg>
        </button>
      </div>
      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
          {/* Slide-in menu */}
          <div
            className="fixed top-0 right-0 h-full w-1/2 max-w-xs bg-white/90 backdrop-blur-2xl border-l border-yellow-100 shadow-2xl z-50 flex flex-col items-stretch animate-slide-in"
            style={{
              borderTopLeftRadius: "1.5rem",
              borderBottomLeftRadius: "1.5rem",
              transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <button
              className="self-end m-4 text-3xl text-accent hover:text-accent-dark font-bold"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Stäng meny"
            >
              &times;
            </button>
            {[
              { href: "/carwash", label: "Biltvätt" },
              { href: "/tires", label: "Däck" },
              { href: "/service", label: "Service" },
              { href: "/giftcards", label: "Presentkort" },
              { href: "#testimonials", label: "Kundomdömen" },
              { href: "/contact", label: "Kontakt" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-4 text-accent font-semibold border-b border-white/30 hover:bg-white/40 hover:text-accent-dark transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Bubble toggle in mobile menu */}
            <button
              onClick={() => setShowBubbles((b) => !b)}
              className="flex items-center justify-center gap-2 px-6 py-4 text-accent font-semibold hover:bg-white/40 hover:text-accent-dark transition"
              aria-pressed={showBubbles}
              title={showBubbles ? "Stäng bubblor" : "Visa bubblor"}
            >
              <span style={{ fontSize: "1.5em" }}>🫧</span>
              {showBubbles ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#22c55e" />
                  <path
                    d="M6 10.5l2.5 2.5L14 7.5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="var(--accent)" />
                  <path
                    d="M7 7l6 6M13 7l-6 6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <style jsx global>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(.4,0,.2,1);
            }
          `}</style>
        </>
      )}
    </nav>
  );
}