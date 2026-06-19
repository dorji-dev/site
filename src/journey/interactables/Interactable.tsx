"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";
import { useJourneyStore } from "@/journey/state/journey-store";

type InteractableProps = {
  id: string;
  position: [number, number, number];
  color: string;
};

const Interactable = ({ id, position, color }: InteractableProps) => {
  const [hovered, setHovered] = useState(false);
  const phase = useJourneyStore((state) => state.phase);
  const setActiveInteractable = useJourneyStore(
    (state) => state.setActiveInteractable
  );

  const handleClick = () => {
    if (phase !== "playing") {
      return;
    }
    setActiveInteractable(id);
  };

  return (
    <group position={position}>
      <mesh
        castShadow
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.5, 0.08, 0.7]} />
        <meshStandardMaterial
          color={color}
          emissive={hovered ? "#ffdd88" : "#000000"}
          emissiveIntensity={hovered ? 0.35 : 0}
        />
      </mesh>
      {hovered && phase === "playing" && (
        <Html distanceFactor={10} position={[0, 0.5, 0]} center>
          <span className="rounded bg-black/70 px-2 py-1 text-xs text-white">
            Inspect
          </span>
        </Html>
      )}
    </group>
  );
};

export default Interactable;
