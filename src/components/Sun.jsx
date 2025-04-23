import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

function Sun() {
  const meshRef = useRef();

  // Animate color shift slightly
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.color.offsetHSL(0.0003, 0, 0);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Geometry: radius 5, high detail */}
      <sphereGeometry args={[5, 32, 32]} />
      {/* Material: Basic yellow, unaffected by scene light */}
      <meshBasicMaterial color={0xffdd55} />
      {/* Label */}
      <Text
        position={[0, 6.5, 0]} // Position above the sun
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Skill Ledger
      </Text>
    </mesh>
  );
}

export default Sun;
