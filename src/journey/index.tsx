"use client";

import dynamic from "next/dynamic";
import LorePanel from "@/journey/interactables/LorePanel";
import PerformanceGate from "@/journey/canvas/PerformanceGate";
import Hud from "@/journey/ui/Hud";
import LiteJourney from "@/journey/ui/LiteJourney";
import OpeningSequence from "@/journey/ui/OpeningSequence";
import { useJourneyStore } from "@/journey/state/journey-store";

const JourneyCanvas = dynamic(
  () => import("@/journey/canvas/JourneyCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#070b14] text-sm text-white/60">
        Loading journey...
      </div>
    ),
  }
);

const JourneyScene = () => {
  const liteMode = useJourneyStore((state) => state.liteMode);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070b14]">
      {liteMode ? <LiteJourney /> : <JourneyCanvas />}
      <OpeningSequence />
      <Hud />
      <LorePanel />
      <PerformanceGate />
    </div>
  );
};

export default JourneyScene;
