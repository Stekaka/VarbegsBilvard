import { useEffect, useState } from "react";

const NUM_BUBBLES = 20;

function randomBubble() {
  const size = 50 + Math.random() * 70;
  return {
    left: Math.random() * 90,
    size,
    id: Math.random().toString(36).slice(2),
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
    opacity: 0.18 + Math.random() * 0.14,
    start: Date.now(),
  };
}

function generateBubbles() {
  return Array.from({ length: NUM_BUBBLES }).map(randomBubble);
}

export default function BubblesBackground() {
  const [bubbles, setBubbles] = useState([]);
  const [popping, setPopping] = useState([]);
  const [popTransforms, setPopTransforms] = useState([]);
  const [popStage, setPopStage] = useState([]);

  // Only generate bubbles on the client
  useEffect(() => {
    const initialBubbles = generateBubbles();
    setBubbles(initialBubbles);
    setPopping(Array(NUM_BUBBLES).fill(false));
    setPopTransforms(Array(NUM_BUBBLES).fill(null));
    setPopStage(Array(NUM_BUBBLES).fill(false));
  }, []);

  const handlePop = idx => {
    if (popping[idx]) return; // Prevent double-pop

    const b = bubbles[idx];
    const elapsed = (Date.now() - b.start) / 1000 - b.delay;
    const progress = Math.max(0, Math.min(1, elapsed / b.duration));
    const translateY = -progress * 110; // vh

    setPopTransforms(t => {
      const next = [...t];
      next[idx] = `translateY(${translateY}vh) scale(1)`;
      return next;
    });
    setPopping(p => {
      const next = [...p];
      next[idx] = true;
      return next;
    });
    setPopStage(s => {
      const next = [...s];
      next[idx] = false;
      return next;
    });

    setTimeout(() => {
      setPopStage(s => {
        const next = [...s];
        next[idx] = true;
        return next;
      });
    }, 10);

    setTimeout(() => {
      setBubbles(bubs => {
        const next = [...bubs];
        next[idx] = randomBubble();
        return next;
      });
      setPopping(p => {
        const next = [...p];
        next[idx] = false;
        return next;
      });
      setPopTransforms(t => {
        const next = [...t];
        next[idx] = null;
        return next;
      });
      setPopStage(s => {
        const next = [...s];
        next[idx] = false;
        return next;
      });
    }, 220);
  };

  // Don't render until bubbles are generated on client
  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-auto z-10" aria-hidden="true" style={{ overflow: "hidden" }}>
      {bubbles.map((b, i) => {
        const isPopping = popping[i];
        const isAnimating = popStage[i];
        let style = {
          position: "absolute",
          left: `${b.left}%`,
          bottom: `-${b.size}px`,
          width: `${b.size}px`,
          height: `${b.size}px`,
          pointerEvents: "auto",
          cursor: "pointer",
          zIndex: 0,
        };

        if (isPopping) {
          style.transform = popTransforms[i];
          style.opacity = 1;
          style.transition = "transform 0.2s, opacity 0.2s";
          style.animation = "none"; // <--- Add this line
          if (isAnimating) {
            style.transform = popTransforms[i]?.replace("scale(1)", "scale(1.5)");
            style.opacity = 0;
          }
        } else {
          style.opacity = b.opacity;
          style.animation = `floatUp${b.id} ${b.duration}s linear infinite`;
          style.animationDelay = `${b.delay}s`;
        }

        return (
          <span
            key={b.id}
            className="bubble"
            style={style}
            onClick={() => !isPopping && handlePop(i)}
          >
            <span className="bubble-inner" />
            <span className="bubble-shimmer" />
          </span>
        );
      })}
      <style jsx global>{`
        ${bubbles
          .map(
            b => `
          @keyframes floatUp${b.id} {
            0% { transform: translateY(0) scale(1); opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(-110vh) scale(1.08); opacity: 0; }
          }
        `
          )
          .join("")}
        .bubble {
          display: block;
          border-radius: 50%;
          border: 0.5px solid rgba(255,255,255,0.18);
          box-shadow:
            0 0 24px 8px rgba(173,216,230,0.10),
            0 0 0 2px rgba(255,255,255,0.12) inset,
            0 0 40px 8px rgba(186,85,211,0.08);
          background: transparent;
          position: absolute;
        }
        .bubble-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.04) 100%),
            radial-gradient(circle at 30% 70%, rgba(173,216,230,0.18) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 100%),
            radial-gradient(circle at 80% 80%, rgba(186,85,211,0.10) 0%, rgba(255,255,255,0) 80%);
          filter: blur(0.7px);
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
            rgba(255,255,255,0.85) 0%,
            rgba(186,85,211,0.13) 40%,
            rgba(135,206,250,0.10) 70%,
            rgba(255,255,255,0) 100%
          );
          filter: blur(2px);
          animation: shimmer 2.2s linear infinite;
          pointer-events: none;
        }
        @keyframes shimmer {
          0% { transform: rotate(0deg) scale(1); opacity: 0.7; }
          50% { transform: rotate(20deg) scale(1.1); opacity: 1; }
          100% { transform: rotate(0deg) scale(1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}