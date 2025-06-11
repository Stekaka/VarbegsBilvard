"use client";
import { useEffect, useRef, useState } from "react";

const BUBBLE_COUNT = 18;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateBubbles() {
  return Array.from({ length: BUBBLE_COUNT }).map(() => {
    const size = random(40, 120);
    const left = random(0, 100);
    const duration = random(12, 32);
    const delay = random(0, 20);
    const opacity = random(0.12, 0.28);
    return { size, left, duration, delay, opacity };
  });
}

export default function BubblesBackground() {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles(generateBubbles());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (containerRef.current) {
        // Parallax effect: move bubbles slower than scroll
        containerRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (bubbles.length === 0) return null; // Prevents SSR mismatch

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
      style={{ overflow: "hidden" }}
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            position: "absolute",
            left: `${b.left}%`,
            bottom: `-${b.size}px`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            opacity: b.opacity,
            animation: `bubbleUp ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
            background:
              "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0.15) 100%)",
            borderRadius: "50%",
            boxShadow: "0 0 16px 2px rgba(255,255,255,0.12)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes bubbleUp {
          0% {
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.08);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}