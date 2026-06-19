const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 12, 6]} intensity={1.1} castShadow />
      <hemisphereLight args={["#9ec5ff", "#1a1f16", 0.45]} />
    </>
  );
};

export default Lighting;
