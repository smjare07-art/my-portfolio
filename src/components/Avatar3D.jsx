"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/avatar.glb");
  return <primitive object={scene} scale={1.8} />;
}

export default function Avatar3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}