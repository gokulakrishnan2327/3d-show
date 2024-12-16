import React from "react";
import { Canvas } from "@react-three/fiber"; 
import Lighting from "./Lighting";
import Skybox from "./Skybox";
import Product from "./Product";
import Controls from "./Controls";

const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      <Lighting />
      <Skybox />
      <Product />
      <Controls />
    </Canvas>
  );
};

export default Scene;
