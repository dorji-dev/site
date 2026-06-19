"use client";

import { useEffect } from "react";
import { useDeviceTier } from "@/journey/hooks/useDeviceTier";
import { useJourneyStore } from "@/journey/state/journey-store";

const PerformanceGate = () => {
  const { suggestLite, isReady } = useDeviceTier();
  const showLitePrompt = useJourneyStore((state) => state.showLitePrompt);
  const setShowLitePrompt = useJourneyStore((state) => state.setShowLitePrompt);
  const toggleLiteMode = useJourneyStore((state) => state.toggleLiteMode);

  useEffect(() => {
    if (isReady && suggestLite) {
      setShowLitePrompt(true);
    }
  }, [isReady, suggestLite, setShowLitePrompt]);

  if (!showLitePrompt) {
    return null;
  }

  return (
    <div className="pointer-events-auto absolute top-20 right-4 z-30 max-w-xs rounded-lg border border-white/15 bg-black/75 p-4 text-sm text-white backdrop-blur-md">
      <p className="font-medium">Performance tip</p>
      <p className="mt-1 text-white/70">
        This device may run smoother in lite mode.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => {
            toggleLiteMode();
            setShowLitePrompt(false);
          }}
          className="rounded-md bg-white/15 px-3 py-1.5 text-xs font-medium hover:bg-white/25"
        >
          Use lite mode
        </button>
        <button
          type="button"
          onClick={() => setShowLitePrompt(false)}
          className="rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:border-white/35"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default PerformanceGate;
