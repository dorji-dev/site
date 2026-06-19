const PathSpline = () => {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 120]} />
        <meshStandardMaterial color="#2d4a2e" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[6, 100]} />
        <meshStandardMaterial color="#6b5b4a" />
      </mesh>
    </group>
  );
};

export default PathSpline;
