import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

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
      {/* Label - Rotated with the torus but positioned slightly outside */}
      <Text
        position={[16, 0, 0]} // Positioned just outside the torus radius on its local X
        rotation={[0, 0, -Math.PI / 2]} // Counter-rotate to stay upright relative to world
        fontSize={1.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Data Storage
      </Text>
    </mesh>
  );
}

export default StorageTorus;
