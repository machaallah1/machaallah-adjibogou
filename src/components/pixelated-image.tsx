"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface PixelatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "16/10" or "4/5"
  pixelSize?: number; // base pixel block size during entry (default: 20)
  maxScatter?: number; // max displacement distance when scrolling in (default: 28)
  interactive?: boolean;
  showBadge?: boolean;
  priority?: boolean;
}

export function PixelatedImage({
  src,
  alt,
  className = "",
  aspectRatio = "16/10",
  pixelSize = 20,
  maxScatter = 24,
  interactive = true,
  showBadge = false,
}: PixelatedImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = just entering, 1 = fully assembled
  const [isHovered, setIsHovered] = useState(false);
  const [manualPixelMode, setManualPixelMode] = useState<boolean | null>(null);

  // Render pixels with scroll-driven displacement & convergence
  const renderFrame = useCallback(
    (progress: number, forcePixel = false) => {
      const canvas = canvasRef.current;
      const img = imageRef.current;
      const offscreen = offscreenCanvasRef.current;
      if (!canvas || !img || !img.complete || !offscreen) return;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!ctx || !offCtx) return;

      const width = canvas.width;
      const height = canvas.height;

      // When fully assembled (progress >= 0.96) and not forced into pixel mode:
      if (progress >= 0.96 && !forcePixel) {
        ctx.imageSmoothingEnabled = true;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        return;
      }

      // Compute dynamic pixel block size and displacement scatter based on scroll progress
      // Progress 0 -> block size = pixelSize, scatter = maxScatter
      // Progress 1 -> block size = 1, scatter = 0
      const effectiveProgress = Math.max(0, Math.min(1, progress));
      const convergenceEase = Math.pow(effectiveProgress, 1.8); // Snaps sharply as it enters view
      const scatter = (1 - convergenceEase) * maxScatter;

      // Dynamic block size from base down to 1px
      const currentBlockSize = forcePixel
        ? pixelSize
        : Math.max(1, Math.round(1 + (pixelSize - 1) * Math.pow(1 - effectiveProgress, 1.3)));

      if (currentBlockSize <= 1 && scatter <= 0.5) {
        ctx.imageSmoothingEnabled = true;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Downscaled offscreen grid
      const cols = Math.ceil(width / currentBlockSize);
      const rows = Math.ceil(height / currentBlockSize);

      offscreen.width = cols;
      offscreen.height = rows;
      offCtx.imageSmoothingEnabled = false;
      offCtx.drawImage(img, 0, 0, cols, rows);

      let imgData: ImageData;
      try {
        imgData = offCtx.getImageData(0, 0, cols, rows);
      } catch {
        ctx.drawImage(img, 0, 0, width, height);
        return;
      }

      const data = imgData.data;

      // Draw assembling pixel grid with displacement
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = (r * cols + c) * 4;
          const red = data[idx];
          const green = data[idx + 1];
          const blue = data[idx + 2];
          const alpha = data[idx + 3] / 255;

          if (alpha <= 0) continue;

          // Target grid position
          const targetX = c * currentBlockSize;
          const targetY = r * currentBlockSize;

          // Scroll displacement vector: pixels fly into place
          if (scatter > 0.5) {
            const seed = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
            const randX = seed - Math.floor(seed) - 0.5;
            const randY = seed * 1.618 - Math.floor(seed * 1.618) - 0.5;

            const posX = targetX + randX * scatter * 2.2;
            const posY = targetY + randY * scatter * 2.2;

            ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            ctx.fillRect(posX, posY, currentBlockSize, currentBlockSize);
          } else {
            ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            ctx.fillRect(targetX, targetY, currentBlockSize, currentBlockSize);
          }
        }
      }
    },
    [maxScatter, pixelSize]
  );

  // Monitor scroll to dynamically assemble pixels when scrolling into view
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight;

        // Assembly starts when top of image enters bottom of viewport (rect.top <= vh)
        // Fully assembled when image top reaches around 65% of viewport
        const enterThreshold = vh * 0.95;
        const assembledThreshold = vh * 0.45;

        let progress = 1;
        if (rect.bottom < 0) {
          // Above viewport: fully assembled
          progress = 1;
        } else if (rect.top > enterThreshold) {
          // Below viewport: fully scattered / pixelated
          progress = 0;
        } else {
          // Assembling during scroll
          progress = (enterThreshold - rect.top) / (enterThreshold - assembledThreshold);
          progress = Math.max(0, Math.min(1, progress));
        }

        setScrollProgress(progress);
        renderFrame(manualPixelMode ? 0 : progress, !!manualPixelMode);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [manualPixelMode, renderFrame]);

  // Load image & observe container resizing
  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const updateCanvasSizeAndRender = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container || !imageRef.current) return;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round((rect.width || 600) * dpr);
      const h = Math.round((rect.height || 375) * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      const vh = window.innerHeight;
      const enterThreshold = vh * 0.95;
      const assembledThreshold = vh * 0.45;
      let progress = 1;
      if (rect.top > enterThreshold) progress = 0;
      else if (rect.top <= assembledThreshold) progress = 1;
      else {
        progress = (enterThreshold - rect.top) / (enterThreshold - assembledThreshold);
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollProgress(progress);
      renderFrame(manualPixelMode ? 0 : progress, !!manualPixelMode);
    };

    img.onload = () => {
      imageRef.current = img;
      offscreenCanvasRef.current = document.createElement("canvas");
      setIsLoaded(true);
      updateCanvasSizeAndRender();

      if (containerRef.current && typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          updateCanvasSizeAndRender();
        });
        resizeObserver.observe(containerRef.current);
      }
    };

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [src, manualPixelMode, renderFrame]);

  // Hover effect: slight pixel pulse
  const handleMouseEnter = () => {
    if (!interactive || manualPixelMode) return;
    setIsHovered(true);
    // Subtle pixel shimmer on hover
    renderFrame(0.7);
  };

  const handleMouseLeave = () => {
    if (!interactive || manualPixelMode) return;
    setIsHovered(false);
    renderFrame(scrollProgress >= 0.85 ? 1 : scrollProgress);
  };

  const togglePixelMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const next = manualPixelMode === null ? true : !manualPixelMode;
    setManualPixelMode(next);
    renderFrame(next ? 0 : 1, next);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group select-none bg-[#0c0d11] ${className}`}
      style={{ aspectRatio }}
    >
      {/* Canvas rendering scroll-converging pixelated or crisp image */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block transition-opacity duration-300"
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
      />

      {/* Loading fallback */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111318]">
          <span className="font-mono text-[10px] tracking-widest text-[#f59e0b]/60 animate-pulse">
            [ CHARGEMENT ]
          </span>
        </div>
      )}

      {/* CRT Scanline retro overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Interactive Pixel / HD Toggle Badge (optional) */}
      {showBadge && (
        <button
          onClick={togglePixelMode}
          type="button"
          aria-label="Basculer le mode pixel"
          className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded bg-[#101217]/90 border border-white/10 hover:border-[#f59e0b] text-[10px] font-mono tracking-wider text-neutral-300 hover:text-[#f59e0b] backdrop-blur-md transition-colors flex items-center gap-1.5 shadow-lg"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              manualPixelMode ? "bg-[#f59e0b] animate-pulse" : "bg-white/40"
            }`}
          />
          <span>{manualPixelMode ? "PIXEL ART" : "HD"}</span>
        </button>
      )}
    </div>
  );
}
