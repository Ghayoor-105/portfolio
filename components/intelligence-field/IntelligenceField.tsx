"use client";

import { useEffect, useRef } from "react";

interface Node {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  phase: number;
  speed: number;
}

const NODE_COUNT = 24;
const CONNECT_DISTANCE = 140;
const MOUSE_INFLUENCE_RADIUS = 160;
const MOUSE_PULL_STRENGTH = 18;
const CYAN = "0, 229, 255";

export function IntelligenceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrameId = 0;
    let isVisible = true;
    let isTabActive = true;
    const mouse = { x: -9999, y: -9999 };

    function createNodes() {
      const count = Math.min(NODE_COUNT, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, () => ({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        x: 0,
        y: 0,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.25,
      }));
    }

    function resize(newWidth?: number, newHeight?: number) {
      if (!canvas) return;
      width = newWidth ?? canvas.clientWidth;
      height = newHeight ?? canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    }

    function drawFrame(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        let x = node.baseX + Math.sin(time * 0.0002 * node.speed + node.phase) * 24;
        let y = node.baseY + Math.cos(time * 0.00025 * node.speed + node.phase) * 24;

        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_INFLUENCE_RADIUS && dist > 0.01) {
          const pull = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_PULL_STRENGTH;
          x += (dx / dist) * pull;
          y += (dy / dist) * pull;
        }

        node.x = x;
        node.y = y;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DISTANCE) {
            const opacity = (1 - dist / CONNECT_DISTANCE) * 0.25;
            ctx.strokeStyle = `rgba(${CYAN}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${CYAN}, 0.7)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(time: number) {
      if (isVisible && isTabActive) {
        drawFrame(time);
      }
      animationFrameId = requestAnimationFrame(loop);
    }

    resize();

    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      const startAnimation = () => {
        animationFrameId = requestAnimationFrame(loop);
      };
      if ("requestIdleCallback" in window) {
        requestIdleCallback(startAnimation, { timeout: 1000 });
      } else {
        setTimeout(startAnimation, 200);
      }
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width: newWidth, height: newHeight } = entry.contentRect;
      resize(newWidth, newHeight);
      if (prefersReducedMotion) drawFrame(0);
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    function handleVisibilityChange() {
      isTabActive = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 h-full w-full opacity-60"
    />
  );
}