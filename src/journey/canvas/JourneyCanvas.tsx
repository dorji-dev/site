"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import ActOneScene from "@/journey/acts/act-1-classroom/ActOneScene";
import { useDeviceTier } from "@/journey/hooks/useDeviceTier";
import { useJourneyStore } from "@/journey/state/journey-store";

const JourneyCanvas = () => {
  const { isMobile, isReady } = useDeviceTier();
  const setShowLitePrompt = useJourneyStore((state) => state.setShowLitePrompt);

  useEffect(() => {
    if (!isReady) {
      return;
    }
  }, [isReady]);

  return (
    <Canvas
      shadows
      className="h-full w-full"
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 5, 18], fov: 50, near: 0.1, far: 200 }}
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#070b14"]} />
      <PerformanceMonitor
        bounds={() => [30, 58]}
        flipflops={3}
        onDecline={() => setShowLitePrompt(true)}
      />
      <ActOneScene />
    </Canvas>
  );
};

export default JourneyCanvas;
