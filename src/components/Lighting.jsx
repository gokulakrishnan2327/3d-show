import React from "react";

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, 5]} intensity={0.5} />
    </>
  );
};

export default Lighting;
