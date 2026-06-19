"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { useJourneyStore } from "@/journey/state/journey-store";

type JeepProps = {
  jeepRef: React.RefObject<Group | null>;
};

const Jeep = ({ jeepRef }: JeepProps) => {
  const phase = useJourneyStore((state) => state.phase);
  const keys = useRef({ forward: false, back: false, left: false, right: false });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          keys.current.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          keys.current.back = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          keys.current.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          keys.current.right = true;
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          keys.current.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          keys.current.back = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          keys.current.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          keys.current.right = false;
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    if (!jeepRef.current || phase !== "playing") {
      return;
    }

    const speed = 8 * delta;
    const turnSpeed = 2.2 * delta;

    if (keys.current.forward) {
      jeepRef.current.position.z -= speed;
    }
    if (keys.current.back) {
      jeepRef.current.position.z += speed;
    }
    if (keys.current.left) {
      jeepRef.current.rotation.y += turnSpeed;
    }
    if (keys.current.right) {
      jeepRef.current.rotation.y -= turnSpeed;
    }

    jeepRef.current.position.z = Math.max(
      -45,
      Math.min(45, jeepRef.current.position.z)
    );
  });

  return (
    <group ref={jeepRef} position={[0, 0.6, 12]} castShadow>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.4, 0.6, 2.2]} />
        <meshStandardMaterial color="#3d5a3e" />
      </mesh>
      <mesh position={[0, 0.75, -0.1]}>
        <boxGeometry args={[1.2, 0.5, 1.2]} />
        <meshStandardMaterial color="#5a7a5c" />
      </mesh>
      <mesh position={[0.55, 0.45, 0.7]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 12]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.55, 0.45, 0.7]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 12]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.55, 0.45, -0.7]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 12]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.55, 0.45, -0.7]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.15, 12]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

export default Jeep;
