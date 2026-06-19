"use client";

import { AnimatePresence, motion } from "framer-motion";
import { loreEntries } from "@/journey/data/lore";
import { useJourneyStore } from "@/journey/state/journey-store";

const LorePanel = () => {
  const activeInteractable = useJourneyStore(
    (state) => state.activeInteractable
  );
  const setActiveInteractable = useJourneyStore(
    (state) => state.setActiveInteractable
  );

  const entry = activeInteractable
    ? loreEntries[activeInteractable]
    : undefined;

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="pointer-events-auto absolute bottom-24 left-1/2 z-20 w-[min(92vw,28rem)] -translate-x-1/2 rounded-xl border border-white/15 bg-black/80 p-5 text-white backdrop-blur-md"
        >
          <h3 className="text-lg font-semibold">{entry.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            {entry.summary}
          </p>
          {entry.deep && (
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {entry.deep}
            </p>
          )}
          <button
            type="button"
            onClick={() => setActiveInteractable(null)}
            className="mt-4 rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:border-white/40"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LorePanel;
