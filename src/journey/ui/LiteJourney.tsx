"use client";

const LiteJourney = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#070b14] px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">
        Lite mode
      </p>
      <h2 className="mt-4 text-2xl font-semibold">Act I — Night classroom</h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
        Full snapshot navigation arrives in Sprint 3d. For now, lite mode is a
        placeholder while we build the core 3D journey.
      </p>
      <p className="mt-6 max-w-md text-sm text-white/55">
        Toggle back to Full 3D from the HUD to continue exploring the live
        scene.
      </p>
    </div>
  );
};

export default LiteJourney;
