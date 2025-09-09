import React, { useEffect, useRef } from "react";

export default function CanvasEnergy() {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    let w = 0, h = 0, dpr = 1;
    let t = 0;
    let particles = [];
    const TAU = Math.PI * 2;

    function makeParticles() {
      const count = Math.floor((w * h) / 12000);
      particles = new Array(count).fill(0).map(() => {
        const baseR = Math.min(w, h) * (0.18 + Math.random() * 0.12);
        return {
          a: Math.random() * TAU,
          s: (Math.random() * 0.0007 + 0.00035),
          r: baseR,
          amp: baseR * (0.15 + Math.random() * 0.25),
          off: Math.random() * 1000,
          hue: 200 + Math.random() * 100,
          size: Math.random() * 1.3 + 0.7,
        };
      });
    }

    function fit() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeParticles();
    }

    function frame() {
      ctx.fillStyle = "rgba(0,0,0,0.16)";
      ctx.fillRect(0, 0, w, h);

      const g = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, Math.max(w, h) * 0.7);
      g.addColorStop(0, "rgba(20,24,40,0.6)");
      g.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        const rr = p.r + Math.sin((t + p.off) * 0.003) * p.amp;
        const x = w / 2 + Math.cos(p.a) * rr;
        const y = h / 2 + Math.sin(p.a) * rr;
        const hue = (p.hue + (t * 0.02)) % 360;
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.16)`;
        ctx.beginPath();
        ctx.arc(x, y, p.size * (1 + Math.sin((t + p.off) * 0.01)), 0, Math.PI*2);
        ctx.fill();
        p.a += p.s * (1.1 + Math.sin((t + p.off) * 0.001) * 0.5);
      }

      ctx.globalCompositeOperation = "source-over";
      t += 16.7;
      rafRef.current = requestAnimationFrame(frame);
    }

    fit();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    rafRef.current = requestAnimationFrame(frame);
    const onResize = () => fit();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full block" style={{ background: "black" }} />;
}