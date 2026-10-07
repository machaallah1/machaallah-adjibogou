"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  a: number;
  b: number;
}

interface Interactive3DHeroProps {
  className?: string;
}

export function Interactive3DHero({ className = "" }: Interactive3DHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Icosahedron vertex calculation for mathematical precision
    const phi = (1 + Math.sqrt(5)) / 2;
    const scale = Math.min(width, height) * 0.28;

    const baseVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((p) => {
      const len = Math.hypot(p.x, p.y, p.z);
      return {
        x: (p.x / len) * scale,
        y: (p.y / len) * scale,
        z: (p.z / len) * scale,
      };
    });

    const edges: Edge[] = [
      { a: 0, b: 11 }, { a: 0, b: 5 }, { a: 0, b: 1 }, { a: 0, b: 7 }, { a: 0, b: 10 },
      { a: 1, b: 5 }, { a: 1, b: 9 }, { a: 1, b: 8 }, { a: 1, b: 7 },
      { a: 2, b: 11 }, { a: 2, b: 10 }, { a: 2, b: 6 }, { a: 2, b: 3 }, { a: 2, b: 4 },
      { a: 3, b: 4 }, { a: 3, b: 9 }, { a: 3, b: 8 }, { a: 3, b: 6 },
      { a: 4, b: 5 }, { a: 4, b: 9 }, { a: 4, b: 11 },
      { a: 5, b: 11 }, { a: 5, b: 9 },
      { a: 6, b: 7 }, { a: 6, b: 8 }, { a: 6, b: 10 },
      { a: 7, b: 8 }, { a: 7, b: 10 },
      { a: 8, b: 9 },
      { a: 10, b: 11 },
    ];

    // Background particle constellation
    const particles = Array.from({ length: 48 }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: (Math.random() - 0.5) * 400,
      size: Math.random() * 1.5 + 0.8,
      speed: Math.random() * 0.003 + 0.001,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    // Rotation state & mouse tracking
    let rotX = 0.3;
    let rotY = 0.5;
    let targetRotX = 0.3;
    let targetRotY = 0.5;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let time = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouseX = ((clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((clientY - rect.top) / height - 0.5) * 2;

      if (isDragging) {
        const deltaX = clientX - lastMouseX;
        const deltaY = clientY - lastMouseY;
        targetRotY += deltaX * 0.01;
        targetRotX += deltaY * 0.01;
        lastMouseX = clientX;
        lastMouseY = clientY;
      } else {
        targetRotY = mouseX * 0.75 + time * 0.15;
        targetRotX = -mouseY * 0.65 + 0.2;
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      lastMouseX = clientX;
      lastMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove);
    canvas.addEventListener("mousedown", onPointerDown);
    canvas.addEventListener("touchstart", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    // 3D rotation math
    const rotatePoint = (p: Point3D, rx: number, ry: number, rz: number): Point3D => {
      // Y-axis rotation
      let cos = Math.cos(ry);
      let sin = Math.sin(ry);
      const x1 = p.x * cos + p.z * sin;
      const z1 = -p.x * sin + p.z * cos;

      // X-axis rotation
      cos = Math.cos(rx);
      sin = Math.sin(rx);
      const y2 = p.y * cos - z1 * sin;
      const z2 = p.y * sin + z1 * cos;

      // Z-axis rotation
      cos = Math.cos(rz);
      sin = Math.sin(rz);
      const x3 = x1 * cos - y2 * sin;
      const y3 = x1 * sin + y2 * cos;

      return { x: x3, y: y3, z: z2 };
    };

    const fov = 700;
    const project = (p: Point3D) => {
      const zDepth = p.z + 550;
      const factor = fov / Math.max(zDepth, 100);
      return {
        x: p.x * factor + width / 2,
        y: p.y * factor + height / 2,
        scale: factor,
        z: p.z,
      };
    };

    // Render loop
    const render = () => {
      time += 0.01;

      // Smooth inertia
      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Radial ambient glow at core
      const glowGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        scale * 1.8
      );
      glowGrad.addColorStop(0, "rgba(245, 158, 11, 0.16)");
      glowGrad.addColorStop(0.5, "rgba(245, 158, 11, 0.04)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Render floating particle dust
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        pt.z += Math.sin(time * 0.5 + i) * 0.3;
        const rotatedPt = rotatePoint(pt, rotX * 0.3, rotY * 0.3, 0);
        const projected = project(rotatedPt);

        if (projected.x >= 0 && projected.x <= width && projected.y >= 0 && projected.y <= height) {
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, pt.size * (projected.scale * 0.9), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 158, 11, ${pt.alpha * Math.max(0.2, (projected.z + 200) / 400)})`;
          ctx.fill();
        }
      }

      // Draw Orbiting Celestial Rings (Architectural coordinate circles)
      const ringSteps = 60;
      const ringRadii = [scale * 1.35, scale * 1.6];
      ringRadii.forEach((radius, ringIndex) => {
        ctx.beginPath();
        const tiltX = rotX * (ringIndex === 0 ? 0.7 : -0.5) + (ringIndex === 0 ? 0.3 : -0.2);
        const tiltY = rotY * (ringIndex === 0 ? 0.8 : 0.6) + time * 0.1;

        for (let i = 0; i <= ringSteps; i++) {
          const theta = (i / ringSteps) * Math.PI * 2;
          const px = Math.cos(theta) * radius;
          const py = Math.sin(theta) * radius;
          const pz = 0;

          const r = rotatePoint({ x: px, y: py, z: pz }, tiltX, tiltY, 0);
          const pr = project(r);

          if (i === 0) ctx.moveTo(pr.x, pr.y);
          else ctx.lineTo(pr.x, pr.y);
        }
        ctx.strokeStyle = ringIndex === 0 ? "rgba(245, 158, 11, 0.22)" : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = ringIndex === 0 ? 1.2 : 0.8;
        ctx.setLineDash(ringIndex === 0 ? [4, 6] : [2, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Transform polyhedron vertices
      const transformedVertices = baseVertices.map((v) => {
        // Dynamic breathing pulse
        const pulse = 1 + Math.sin(time * 1.8) * 0.03;
        const scaledV = { x: v.x * pulse, y: v.y * pulse, z: v.z * pulse };
        return rotatePoint(scaledV, rotX, rotY, time * 0.05);
      });

      const projectedVertices = transformedVertices.map(project);

      // Render wireframe edges with depth shading
      for (const edge of edges) {
        const p1 = projectedVertices[edge.a];
        const p2 = projectedVertices[edge.b];

        const avgZ = (p1.z + p2.z) / 2;
        const depthAlpha = Math.max(0.12, Math.min(0.85, (avgZ + scale) / (scale * 2)));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        const edgeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        edgeGrad.addColorStop(0, `rgba(245, 158, 11, ${depthAlpha * 0.75})`);
        edgeGrad.addColorStop(1, `rgba(255, 255, 255, ${depthAlpha * 0.4})`);

        ctx.strokeStyle = edgeGrad;
        ctx.lineWidth = depthAlpha * 1.6 + 0.4;
        ctx.stroke();
      }

      // Inner Core Node (Energy center)
      const coreProjected = project(rotatePoint({ x: 0, y: 0, z: 0 }, rotX, rotY, 0));
      ctx.beginPath();
      ctx.arc(coreProjected.x, coreProjected.y, 7 + Math.sin(time * 3) * 2, 0, Math.PI * 2);
      ctx.fillStyle = "#f59e0b";
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Render vertices / structural nodes with glowing heads
      projectedVertices.forEach((pv, idx) => {
        const depthAlpha = Math.max(0.25, Math.min(1, (pv.z + scale) / (scale * 2)));
        const radius = (pv.scale * 3.5 + 1) * depthAlpha;

        // Outer glow
        ctx.beginPath();
        ctx.arc(pv.x, pv.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${depthAlpha * 0.25})`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(pv.x, pv.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = depthAlpha > 0.6 ? "#f59e0b" : "rgba(255, 255, 255, 0.7)";
        ctx.fill();

        // Technical coordinate marker for top 3 vertices
        if (idx === 0 || idx === 3 || idx === 5) {
          ctx.font = "9px 'JetBrains Mono', monospace";
          ctx.fillStyle = "rgba(245, 158, 11, 0.6)";
          ctx.fillText(`NODE::0${idx}`, pv.x + 8, pv.y - 6);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      canvas.removeEventListener("mousedown", onPointerDown);
      canvas.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block relative z-0"
        title="Centre d'Architecture Logicielle & Front-End 3D interactif"
        data-cursor="3D"
      />
    </div>
  );
}
