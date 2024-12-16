import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three"; 

const Skybox = () => {
  const { scene } = useThree();
  scene.background = new THREE.Color("#1e1e2f"); 
  return null;
};

export default Skybox;
