"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useJourneyStore } from "@/journey/state/journey-store";

const OpeningSequence = () => {
  const phase = useJourneyStore((state) => state.phase);
  const setPhase = useJourneyStore((state) => state.setPhase);

  const handleContinue = () => {
    setPhase("playing");
  };

  return (
    <AnimatePresence>
      {phase === "opening" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 px-6 text-center text-white backdrop-blur-sm"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-md text-lg text-white/80 md:text-xl"
          >
            What if nothing mattered?
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Dorji Tshering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-3 max-w-lg text-sm text-white/70 md:text-base"
          >
            Anyone can learn anything — I learned between wild animals and slow
            Wi‑Fi.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            type="button"
            onClick={handleContinue}
            className="mt-10 rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
          >
            Enter the journey
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mt-4 text-xs text-white/45"
          >
            WASD / arrow keys to drive once inside
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSequence;
