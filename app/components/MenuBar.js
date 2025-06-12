"use client";
import Link from "next/link";
import { useState } from "react";

export default function MenuBar({ showBubbles, setShowBubbles }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3 bg-white/20 backdrop-blur-2xl border-b border-white/30 shadow-lg glass-nav">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-red-500 tracking-tight"
        >
          {/* Car icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-red-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="11"
              width="18"
              height="6"
              rx="2"
              fill="currentColor"
            />
            <rect
              x="5"
              y="7"
              width="14"
              height="6"
              rx="2"
              fill="currentColor"
              opacity="0.5"
            />
            <circle cx="7" cy="19" r="2" fill="currentColor" />
            <circle cx="17" cy="19" r="2" fill="currentColor" />
          </svg>
          <span>Varbegs Bilvård</span>
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
          className="sm:hidden p-2 rounded focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Öppna meny"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="2" rx="1" fill="#ef4444" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#ef4444" />
            <rect x="4" y="16" width="16" height="2" rx="1" fill="#ef4444" />
          </svg>
        </button>
      </div>
      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full z-50 flex flex-col items-stretch
    bg-white/30 backdrop-blur-2xl border-b border-white/30 shadow-lg glass-nav
    animate-fade-in"
          style={{
            borderTopLeftRadius: "0 0 1.5rem 1.5rem",
            borderTopRightRadius: "0 0 1.5rem 1.5rem",
            // Optional: add a little extra blur for mobile
            WebkitBackdropFilter: "blur(18px)",
            backdropFilter: "blur(18px)",
          }}
        >
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
              className="px-6 py-4 text-red-700 font-semibold border-b border-white/30 hover:bg-white/40 hover:text-red-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Bubble toggle in mobile menu */}
          <button
            onClick={() => {
              setShowBubbles((b) => !b);
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 px-6 py-4 text-red-700 font-semibold hover:bg-white/40 hover:text-red-600 transition"
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
      )}
    </nav>
  );
}