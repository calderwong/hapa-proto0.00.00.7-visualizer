import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fireflyCount = 140;
const minRadius = 25;
const maxRadius = 30;

function Fireflies() {
  const groupRef = useRef();

  // Calculate positions only once
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < fireflyCount; i++) {
      const r = minRadius + Math.random() * (maxRadius - minRadius);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1); // Uniform spherical distribution

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos.push(new THREE.Vector3(x, y, z));
    }
    return pos;
  }, []);

  // Animate group rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          {/* Small sphere geometry */}
          <sphereGeometry args={[0.3, 8, 8]} />
          {/* Bright cyan material */}
          <meshBasicMaterial color={0x00ffcc} />
        </mesh>
      ))}
    </group>
  );
}

export default Fireflies;
