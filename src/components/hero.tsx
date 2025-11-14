"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const yearsSinceCoding = Math.floor(
    (Date.now() - new Date("2020-07-01").getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section className="relative flex flex-col space-y-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/40" />

      {/* Name and Title */}
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold leading-tight text-foreground tracking-tight"
        >
          Dorji Tshering
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg font-mono text-muted-foreground"
        >
          self-taught developer
        </motion.p>
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground"
      >
        <p>
          <span className="font-bold whitespace text-foreground text-xl">
            {yearsSinceCoding}+ years
          </span>
          <span className="ml-2">of learning, building, and growing.</span>
          <br />
          Turning ideas into digital experiences.
        </p>
      </motion.div>

      {/* Current Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pt-4"
      >
        <div className="inline-flex items-center flex-wrap rounded-lg px-3 py-1.5 border border-border">
          <span className="text-muted-foreground mr-2">
            Currently working at
          </span>
          <span className="font-medium text-foreground flex items-center">
            <svg
              className="w-3.5 h-3.5 mr-1.5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Jaggle.AI
          </span>
        </div>
      </motion.div>
    </section>
  );
}
