"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

type CameraRigProps = {
  target: React.RefObject<Group | null>;
};

const CameraRig = ({ target }: CameraRigProps) => {
  const lookAt = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (!target.current) {
      return;
    }

    const targetPosition = target.current.position;
    const offset = new THREE.Vector3(0, 4.5, 9);
    offset.applyQuaternion(target.current.quaternion);

    const desiredPosition = targetPosition.clone().add(offset);
    state.camera.position.lerp(desiredPosition, 0.08);
    lookAt.current.lerp(targetPosition, 0.1);
    state.camera.lookAt(lookAt.current);
  });

  return null;
};

export default CameraRig;
