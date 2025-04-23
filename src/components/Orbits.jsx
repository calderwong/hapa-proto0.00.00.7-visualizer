import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Helper function to create one orbit ring
function OrbitRing({ radius, count, color, size, rotationSpeed }) {
  const groupRef = useRef();

  // Calculate positions only once
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      pos.push(new THREE.Vector3(x, 0, z)); // Position on XZ plane
    }
    return pos;
  }, [radius, count]);

  // Animate group rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[size, 10, 10]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

// Main Orbits component containing both rings
function Orbits() {
  return (
    <group>
      {/* Mentor Orbit */}
      <OrbitRing
        key="mentor-orbit"
        radius={10}
        count={8}
        color={0xff6699} // Pink
        size={0.6}
        rotationSpeed={0.001}
      />
      {/* Apprentice Orbit */}
      <OrbitRing
        key="apprentice-orbit"
        radius={18}
        count={12}
        color={0x99ccff} // Light Blue
        size={0.5}
        rotationSpeed={-0.0012} // Opposite direction
      />
      {/* Labels for the orbits */}
      <Text
        position={[10, 1, 0]} // Positioned near the mentor orbit radius, slightly above
        fontSize={1}
        color="#ffaabb" // Lighter pink
        anchorX="center"
        anchorY="middle"
      >
        Mentor Orbit
      </Text>
      <Text
        position={[-18, 1, 0]} // Positioned near the apprentice orbit, on the opposite side
        fontSize={1}
        color="#cceeff" // Lighter blue
        anchorX="center"
        anchorY="middle"
      >
        Apprentice Orbit
      </Text>
    </group>
  );
}

export default Orbits;
