import React from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const ringRadius = 30;
const objectSize = 1.2;

// Data for the outer ring objects
const objects = [
  { name: 'banana', angle: 0, color: 0xffff00, label: '🍌' },
  { name: 'cardmint', angle: Math.PI / 2, color: 0xffffff, label: '💠' },
  { name: 'marketplace', angle: Math.PI, color: 0x00ff00, label: '🏪' },
  { name: 'escrow', angle: (3 * Math.PI) / 2, color: 0xff0000, label: '🔒' },
  { name: 'crown', angle: Math.PI / 4, color: 0xffddff, label: '👑' },
];

function OuterRingObject({ position, color, label }) {
  return (
    <group position={position}>
      {/* The object sphere */}
      <mesh>
        <sphereGeometry args={[objectSize, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* The label above the object */}
      <Text
        position={[0, objectSize + 1, 0]} // Position text above sphere
        fontSize={2} // Adjust size as needed
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function OuterRing() {
  return (
    <group>
      {objects.map((obj) => {
        // Calculate position on the XZ plane
        const x = ringRadius * Math.cos(obj.angle);
        const z = ringRadius * Math.sin(obj.angle);
        const position = new THREE.Vector3(x, 0, z);

        return (
          <OuterRingObject
            key={obj.name}
            position={position}
            color={obj.color}
            label={obj.label}
          />
        );
      })}
    </group>
  );
}

export default OuterRing;
