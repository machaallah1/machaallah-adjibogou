"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface InteractivePixelPortraitProps {
  src?: string;
  name?: string;
  role?: string;
  className?: string;
}

export function InteractivePixelPortrait({
  src = "/images/machaallah.jpg",
  name = "Machaallah",
  className = "",
}: InteractivePixelPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Smooth lens tracking interpolation
  const [lensState, setLensState] = useState({ x: 200, y: 160, radius: 0 });
  const targetRef = useRef({ x: 200, y: 160, radius: 0, active: false });

  // ═══ 1. CANVAS CARTOON PIXELATION & IDLE ANIMATION (FRAMELESS) ═══
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    // Offscreen sampling canvas
    const sampleCanvas = document.createElement("canvas");
    const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });

    let isImageLoaded = false;

    img.onload = () => {
      isImageLoaded = true;
      resize();
    };

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);

      if (w <= 0 || h <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      // Low-res sampling grid for retro pixel art calculation
      const sampleStep = 5;
      sampleCanvas.width = Math.ceil(w / sampleStep);
      sampleCanvas.height = Math.ceil(h / sampleStep);

      if (sampleCtx && isImageLoaded) {
        const imgAspect = img.width / img.height;
        const targetAspect = w / h;
        let sWidth = img.width;
        let sHeight = img.height;
        let sx = 0;
        let sy = 0;

        if (imgAspect > targetAspect) {
          sWidth = img.height * targetAspect;
          sx = (img.width - sWidth) / 2;
        } else {
          sHeight = img.width / targetAspect;
          sy = (img.height - sHeight) / 2;
        }

        sampleCtx.clearRect(0, 0, sampleCanvas.width, sampleCanvas.height);
        sampleCtx.drawImage(
          img,
          sx,
          sy,
          sWidth,
          sHeight,
          0,
          0,
          sampleCanvas.width,
          sampleCanvas.height
        );
      }
    };

    window.addEventListener("resize", resize);

    // Warm retro amber & terracotta color palette matching inspiration
    const getColor = (luma: number, pulse: number): string | null => {
      const modulated = Math.max(0, Math.min(1, luma + pulse));

      // Leave background void transparent so portrait blends into hero
      if (modulated < 0.16) {
        return null;
      } else if (modulated < 0.32) {
        return "#3b160a"; // Warm shadow
      } else if (modulated < 0.5) {
        return "#9a3412"; // Terracotta rust
      } else if (modulated < 0.68) {
        return "#ea580c"; // Warm orange
      } else if (modulated < 0.85) {
        return "#f59e0b"; // Signature glowing amber
      } else {
        return "#fef08a"; // High-key vintage highlight
      }
    };

    // Render loop: animated cartoon pixel portrait
    const render = () => {
      time += 0.04;

      // Smooth lens tracking interpolation
      const target = targetRef.current;
      setLensState((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        const dr = target.radius - prev.radius;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
          radius: prev.radius + dr * 0.2,
        };
      });

      if (canvas && canvas.parentElement && isImageLoaded && sampleCtx) {
        const rect = canvas.parentElement.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        const sampleStep = 5;

        // Frameless: clean transparent canvas
        ctx.clearRect(0, 0, w, h);

        const imgData = sampleCtx.getImageData(
          0,
          0,
          sampleCanvas.width,
          sampleCanvas.height
        );
        const data = imgData.data;

        const scanlineY = ((time * 40) % (h + 100)) - 50;

        for (let py = 0; py < sampleCanvas.height; py++) {
          for (let px = 0; px < sampleCanvas.width; px++) {
            const idx = (py * sampleCanvas.width + px) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = data[idx + 3];

            if (a < 25) continue;

            const luma = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

            // Subtle animated breathing wave & scanline sweep across the portrait
            const wave = Math.sin(time * 1.6 + py * 0.07 + px * 0.05) * 0.07;
            const scanDist = Math.abs(py * sampleStep - scanlineY);
            const scanBeam = scanDist < 25 ? (1 - scanDist / 25) * 0.12 : 0;

            const color = getColor(luma, wave + scanBeam);
            if (!color) continue; // Transparent background

            const drawX = px * sampleStep;
            const drawY = py * sampleStep;
            const blockSize = sampleStep - 0.7;

            ctx.fillStyle = color;
            ctx.fillRect(drawX, drawY, blockSize, blockSize);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [src]);

  // ═══ 2. CURSOR REAL PHOTO REVEAL HANDLERS ═══
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetRef.current = {
      x,
      y,
      radius: 95, // Reveal lens aperture radius in px
      active: true,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    targetRef.current = {
      x,
      y,
      radius: 80,
      active: true,
    };
  };

  const handleTouchEnd = () => {
    targetRef.current.radius = 0;
    targetRef.current.active = false;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    // Softly collapse lens when mouse leaves
    targetRef.current.radius = 0;
    targetRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[400px] md:max-w-[460px] mx-auto select-none cursor-crosshair group ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
      }}
    >
      {/* ═══ LAYER A: Stylized Cartoon Pixel Canvas (Frameless & Transparent) ═══ */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0 pointer-events-none"
      />

      {/* ═══ LAYER B: Real Photo Revealed via Dynamic Circular Mask ═══ */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${lensState.radius}px at ${lensState.x}px ${lensState.y}px, black 0%, black 85%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${lensState.radius}px at ${lensState.x}px ${lensState.y}px, black 0%, black 85%, transparent 100%)`,
          opacity: lensState.radius > 5 ? 1 : 0,
        }}
      >
        <Image
          src={src}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 460px"
          className="object-cover object-center"
        />
      </div>

      {/* ═══ LAYER C: Glowing Inspection Lens Crosshair / Aperture ═══ */}
      {lensState.radius > 15 && (
        <div
          className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f59e0b] shadow-[0_0_25px_rgba(245,158,11,0.6)] flex items-center justify-center transition-transform duration-75"
          style={{
            left: `${lensState.x}px`,
            top: `${lensState.y}px`,
            width: `${lensState.radius * 2}px`,
            height: `${lensState.radius * 2}px`,
          }}
        >
          {/* Micro HUD detail */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold tracking-widest text-[#f59e0b] bg-[#0c0a08]/90 px-1.5 py-0.5 rounded border border-[#f59e0b]/40">
            LENS // 1:1
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
        </div>
      )}

      {/* ═══ LAYER D: Name in Retro Blindy (Jacquard 12) Typography Across Bottom ═══ */}
      <div className="absolute bottom-6 left-0 right-0 z-25 text-center pointer-events-none px-4">
        <h2 className="font-bold text-5xl sm:text-6xl md:text-7xl text-[#ffe2b0] tracking-wide leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] [text-shadow:_3px_3px_0_#08090b,_0_0_25px_rgba(245,158,11,0.6)]">
          {name}
        </h2>
        
      </div>
    </div>
  );
}
