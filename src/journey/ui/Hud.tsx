"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  initAmbientAudio,
  setAmbientMuted,
  hasAmbientAudio,
} from "@/journey/audio/AudioManager";
import { useJourneyStore } from "@/journey/state/journey-store";

const Hud = () => {
  const muted = useJourneyStore((state) => state.muted);
  const liteMode = useJourneyStore((state) => state.liteMode);
  const toggleMute = useJourneyStore((state) => state.toggleMute);
  const toggleLiteMode = useJourneyStore((state) => state.toggleLiteMode);
  const phase = useJourneyStore((state) => state.phase);

  useEffect(() => {
    if (hasAmbientAudio()) {
      initAmbientAudio();
    }
  }, []);

  useEffect(() => {
    if (!hasAmbientAudio()) {
      return;
    }
    setAmbientMuted(muted);
  }, [muted]);

  if (phase === "opening") {
    return null;
  }

  return (
    <div className="pointer-events-auto absolute top-4 right-4 z-30 flex items-center gap-2">
      <Link
        href="/blog"
        className="rounded-md border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm transition hover:border-white/30"
      >
        Blog
      </Link>
      <button
        type="button"
        onClick={toggleMute}
        disabled={!hasAmbientAudio()}
        title={
          hasAmbientAudio()
            ? undefined
            : "Ambient audio coming in a later sprint"
        }
        className="rounded-md border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {muted ? "Unmute" : "Mute"}
      </button>
      <button
        type="button"
        onClick={toggleLiteMode}
        className="rounded-md border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm transition hover:border-white/30"
      >
        {liteMode ? "Full 3D" : "Lite"}
      </button>
    </div>
  );
};

export default Hud;
