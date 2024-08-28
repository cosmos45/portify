"use client"

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import React, { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    let width = canvas.width;
    let height = canvas.height;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

function generateNoise() {
  const imageData = ctx.createImageData(width, height);
  const buffer = imageData.data;

  for (let i = 0; i < buffer.length; i += 4) {
    const noiseValue = Math.random() * 150; // Reduce the range from 255 to 50 for less intense noise

    buffer[i] = noiseValue;       // Red component
    buffer[i + 1] = noiseValue;   // Green component
    buffer[i + 2] = noiseValue;   // Blue component
    buffer[i + 3] = 30;           // Alpha component, set to 30 for more transparency
  }

  ctx.putImageData(imageData, 0, 0);
}

    function animate() {
  setTimeout(() => {
    ctx.clearRect(0, 0, width, height);
    generateNoise();
    requestAnimationFrame(animate);
  }, 50); // Update every 100ms instead of every frame
}

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

      document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animate); // Stop when not active
      } else {
        requestAnimationFrame(animate); // Restart when active
      }
    });



    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray-50 relative min-h-screen`}
      >
        {/* Noise Canvas */}
     <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none"></canvas>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
