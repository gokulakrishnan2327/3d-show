import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei"; 

const Product = () => {
  const [texture, setTexture] = useState("default");

  const defaultTexturePath = "/images/nuria_portfolio.jpg";
  const metalTexturePath = "/images/OIP.jpg";
  const woodTexturePath = "/images/abstract-3d-colorful-object-background_781958-8865.avif";

  const defaultTexture = useLoader(TextureLoader, defaultTexturePath);
  const metalTexture = useLoader(TextureLoader, metalTexturePath);
  const woodTexture = useLoader(TextureLoader, woodTexturePath);

  const textures = {
    default: defaultTexture,
    metal: metalTexture,
    wood: woodTexture,
  };

  const handleTextureChange = (newTexture) => {
    setTexture(newTexture);
  };

  return (
    <>
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial map={textures[texture]} />
      </mesh>

      <Html position={[0, -2.5, 0]} center>
        <div className="controls">
          <button onClick={() => handleTextureChange("default")}>Park</button>
          <button onClick={() => handleTextureChange("metal")}>Shopping Trolloy</button>
          <button onClick={() => handleTextureChange("wood")}>AI balls</button>
        </div>
      </Html>
    </>
  );
};

export default Product;
