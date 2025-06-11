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
    const opacity = random(0.18, 0.32);
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
        containerRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (bubbles.length === 0) return null;

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
            animation: `bubbleUp${i} ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <span className="bubble-inner" />
          <span className="bubble-shimmer" />
        </span>
      ))}
      <style jsx global>{`
        ${bubbles
          .map(
            (_, i) => `
          @keyframes bubbleUp${i} {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            80% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(-110vh) scale(1.08);
              opacity: 0;
            }
          }
        `
          )
          .join("")}
        .bubble {
          display: block;
          border-radius: 50%;
          box-shadow: 0 0 24px 6px rgba(173,216,230,0.18),
            0 0 0 1.5px rgba(255,255,255,0.25) inset;
          background: transparent;
          position: absolute;
        }
        .bubble-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.05) 100%),
            radial-gradient(circle at 30% 70%, rgba(173,216,230,0.25) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%),
            radial-gradient(circle at 80% 80%, rgba(186,85,211,0.13) 0%, rgba(255,255,255,0) 80%);
          filter: blur(0.5px);
        }
        .bubble-shimmer {
          position: absolute;
          top: 12%;
          left: 14%;
          width: 55%;
          height: 55%;
          border-radius: 50%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.8) 0%,
            rgba(255,255,255,0.15) 60%,
            rgba(255,255,255,0) 100%
          );
          filter: blur(2px);
          animation: shimmer 2.2s linear infinite;
          pointer-events: none;
        }
        @keyframes shimmer {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: rotate(20deg) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}