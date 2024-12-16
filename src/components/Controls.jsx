import React from "react";
import { OrbitControls } from "@react-three/drei";

const Controls = () => {
  return <OrbitControls enableZoom={true} enablePan={true} />;
};

export default Controls;
