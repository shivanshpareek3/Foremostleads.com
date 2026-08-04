"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Sphere, Box, RoundedBox, Edges, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

// Reusable glowing node
function GlowingNode({ position, color, size = 0.1 }: { position: [number, number, number], color: string, size?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.002;
    }
  });

  return (
    <Sphere ref={ref} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2} 
        toneMapped={false} 
      />
    </Sphere>
  );
}

// Reusable glass card
function GlassCard({ position, rotation, args, children }: any) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={position} rotation={rotation}>
      <RoundedBox args={args} radius={0.1} smoothness={4}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.0}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#f8fafc"
          roughness={0.1}
        />
        {/* Subtle inner edge highlight */}
        <Edges scale={1.0} threshold={15} color="rgba(255,255,255,0.2)" />
        {children}
      </RoundedBox>
    </Float>
  );
}

function BarChart() {
  const bars = useMemo(() => Array.from({ length: 7 }).map(() => Math.random() * 0.8 + 0.2), []);
  
  return (
    <group position={[-0.8, -0.3, 0.15]}>
      {bars.map((height, i) => (
        <group key={i} position={[i * 0.3, height / 2, 0]}>
          <Box args={[0.15, height, 0.15]}>
            <meshStandardMaterial color={i === 6 ? "#22c55e" : "#175F30"} opacity={0.9} transparent />
          </Box>
        </group>
      ))}
    </group>
  );
}

function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 4;

  const scale = isMobile ? 0.7 : 1;

  return (
    <group scale={scale}>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, 0, -20]} intensity={0.5} color="#22c55e" />
      <pointLight position={[0, -10, 0]} intensity={0.5} color="#175F30" />
      
      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Main Glass Dashboard Panel */}
      <GlassCard position={[0, 0, 0]} rotation={[0.1, -0.2, 0]} args={[4, 3, 0.2]}>
        
        {/* Decorative elements inside the card */}
        <group position={[0, 0, 0]}>
          <BarChart />
          
          {/* Abstract Graph Line using points/spheres */}
          <group position={[0, 0.5, 0.15]}>
             <GlowingNode position={[-1.2, -0.5, 0]} color="#175F30" size={0.08} />
             <GlowingNode position={[-0.6, 0.2, 0]} color="#22c55e" size={0.08} />
             <GlowingNode position={[0, -0.1, 0]} color="#175F30" size={0.08} />
             <GlowingNode position={[0.6, 0.8, 0]} color="#22c55e" size={0.08} />
             <GlowingNode position={[1.2, 1.2, 0]} color="#10b981" size={0.12} />
          </group>
          
          {/* Floating UI metric elements */}
          <Float speed={3} rotationIntensity={0.5} floatIntensity={1} position={[1.2, -0.6, 0.3]}>
            <RoundedBox args={[1.2, 0.8, 0.1]} radius={0.05}>
              <meshStandardMaterial color="#ffffff" opacity={0.8} transparent />
              <Edges scale={1.0} color="#22c55e" />
            </RoundedBox>
          </Float>
        </group>
      </GlassCard>

      {/* Background Floating Elements */}
      <GlassCard position={[-2, 1.5, -1]} rotation={[-0.2, 0.3, 0.1]} args={[1.5, 1.5, 0.1]} />
      <GlassCard position={[2.5, -1, -1.5]} rotation={[0.4, -0.1, -0.2]} args={[2, 1, 0.1]} />
      
      {/* Floating Particles / AI Nodes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={1} floatIntensity={2} position={[(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 3 - 1]}>
          <Sphere args={[0.02 + Math.random() * 0.03]} >
            <meshBasicMaterial color={Math.random() > 0.5 ? "#22c55e" : "#175F30"} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3DVisual() {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        {/* Adds mouse interactivity */}
        <PresentationControls 
          global 
          rotation={[0.13, 0.1, 0]} 
          polar={[-0.4, 0.2]} 
          azimuth={[-1, 0.75]} 
          snap
        >
          <Scene />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
