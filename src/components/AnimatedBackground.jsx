import React from "react";
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-12 -left-8 h-72 w-72 bg-primary/25 blur-3xl rounded-full animate-blob" />
      <div className="absolute top-10 right-0 h-64 w-64 bg-secondary/25 blur-3xl rounded-full animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-accent/20 blur-3xl rounded-full animate-blob [animation-delay:6s]" />
    </div>
  );
}
