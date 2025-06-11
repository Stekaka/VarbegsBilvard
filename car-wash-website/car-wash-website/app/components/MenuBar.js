"use client";
import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3 bg-white/20 backdrop-blur-2xl border-b border-white/30 shadow-lg glass-nav">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-yellow-500 tracking-tight"
        >
          {/* Car icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-yellow-300"
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
        <div className="flex gap-4 sm:gap-8">
          {[
            { href: "/carwash", label: "Biltvätt" },
            { href: "/tires", label: "Däck" },
            { href: "/servuce", label: "Service" },
            { href: "/giftcards", label: "Presentkort" },
            { href: "#testimonials", label: "Kundomdömen" },
            { href: "#contact", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-2 py-1 text-yellow-500 font-semibold hover:text-yellow-300 transition
                after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-400
                after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}