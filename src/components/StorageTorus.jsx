import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function StorageTorus() {
  const meshRef = useRef();

  // Animate rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0015;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      // Rotate to be flat on XZ plane initially
      rotation={[Math.PI / 2, 0, 0]}
    >
      {/* Geometry: radius 15, tube 0.8, detailed */}
      <torusGeometry args={[15, 0.8, 18, 120]} />
      {/* Material: Blue, metallic, slightly rough */}
      <meshStandardMaterial color={0x4444ff} metalness={0.8} roughness={0.3} />
    </mesh>
  );
}

export default StorageTorus;
