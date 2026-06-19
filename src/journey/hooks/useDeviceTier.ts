"use client";

import { useEffect, useState } from "react";
import { getGPUTier } from "detect-gpu";

type DeviceTierState = {
  isMobile: boolean;
  suggestLite: boolean;
  isReady: boolean;
};

export const useDeviceTier = (): DeviceTierState => {
  const [state, setState] = useState<DeviceTierState>({
    isMobile: false,
    suggestLite: false,
    isReady: false,
  });

  useEffect(() => {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(max-width: 768px)").matches;

    const lowCores =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency < 4;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const evaluateGpu = async () => {
      try {
        const tier = await getGPUTier();
        const weakGpu = tier.tier < 2;

        setState({
          isMobile,
          suggestLite: (isMobile && lowCores) || weakGpu || prefersReducedMotion,
          isReady: true,
        });
      } catch {
        setState({
          isMobile,
          suggestLite: isMobile && lowCores,
          isReady: true,
        });
      }
    };

    void evaluateGpu();
  }, []);

  return state;
};
