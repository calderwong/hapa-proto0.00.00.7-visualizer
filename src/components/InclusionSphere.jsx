import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function InclusionSphere() {
  const meshRef = useRef();

  // Animate slow rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Geometry: radius 26, detailed */}
      <sphereGeometry args={[26, 64, 64]} />
      {/* Material: Cyan, transparent, wireframe overlay */}
      <meshBasicMaterial
        color={0x00ffff}
        transparent
        opacity={0.05}
        wireframe
      />
    </mesh>
  );
}

export default InclusionSphere;
