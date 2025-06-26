
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere args={[0.5, 32, 32]} />;
      case 'box':
        return <Box args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <Torus args={[0.6, 0.2, 16, 100]} />;
      default:
        return <Sphere args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.6}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333ea" />
        
        <FloatingGeometry position={[-4, 2, -5]} geometry="sphere" />
        <FloatingGeometry position={[4, -2, -3]} geometry="box" />
        <FloatingGeometry position={[0, 3, -7]} geometry="torus" />
        <FloatingGeometry position={[-6, -1, -4]} geometry="sphere" />
        <FloatingGeometry position={[6, 1, -6]} geometry="box" />
        <FloatingGeometry position={[2, -3, -2]} geometry="torus" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
