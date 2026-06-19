"use client";

import { useRef } from "react";
import type { Group } from "three";
import { Stars } from "@react-three/drei";
import Interactable from "@/journey/interactables/Interactable";
import Jeep from "@/journey/locomotion/Jeep";
import CameraRig from "@/journey/locomotion/CameraRig";
import PathSpline from "@/journey/locomotion/PathSpline";
import Lighting from "@/journey/canvas/Lighting";

const ActOneScene = () => {
  const jeepRef = useRef<Group>(null);

  return (
    <>
      <Lighting />
      <Stars radius={80} depth={40} count={1200} factor={3} fade speed={0.4} />
      <PathSpline />

      <mesh position={[5, 1.5, -8]} castShadow>
        <boxGeometry args={[4, 3, 3]} />
        <meshStandardMaterial color="#2a3348" />
      </mesh>

      <Interactable
        id="physics-notebook"
        position={[5.8, 0.5, -6.5]}
        color="#c9a227"
      />

      <Jeep jeepRef={jeepRef} />
      <CameraRig target={jeepRef} />
    </>
  );
};

export default ActOneScene;
