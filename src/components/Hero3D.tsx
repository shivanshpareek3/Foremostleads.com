"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Icosahedron, Torus, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central AI Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1.5, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#175F30" 
            wireframe 
            emissive="#22c55e" 
            emissiveIntensity={0.5}
          />
        </Icosahedron>
        
        {/* Inner Solid Core */}
        <Icosahedron args={[1, 2]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#ffffff"
            roughness={0.1}
            metalness={0.8}
            emissive="#175F30"
            emissiveIntensity={0.2}
          />
        </Icosahedron>
      </Float>

      {/* Orbiting Ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Torus args={[2.5, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1} />
        </Torus>
      </Float>

      {/* Orbiting Data Nodes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3.5 + Math.random();
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 3;

        return (
          <Float key={i} speed={2 + Math.random()} rotationIntensity={2} floatIntensity={2} position={[x, y, z]}>
            <Sphere args={[0.15 + Math.random() * 0.1, 16, 16]}>
              <meshStandardMaterial 
                color={Math.random() > 0.5 ? "#22c55e" : "#ffffff"} 
                roughness={0.2}
                metalness={0.8}
                emissive={Math.random() > 0.5 ? "#22c55e" : "#000000"}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        );
      })}

      {/* Magic Sparkles around the core */}
      <Sparkles count={100} scale={8} size={4} speed={0.4} opacity={0.5} color="#22c55e" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[500px] md:h-[650px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        {/* Basic lighting that won't fail to load */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#175F30" distance={5} />
        
        <AnimatedNodes />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
