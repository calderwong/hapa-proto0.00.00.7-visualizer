import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

// --- Constants (mirrored from OuterRing.jsx for now) ---
const ringRadius = 30;
const objectsData = [
  { name: 'banana', angle: 0 },
  { name: 'cardmint', angle: Math.PI / 2 },
  { name: 'marketplace', angle: Math.PI },
  { name: 'escrow', angle: (3 * Math.PI) / 2 },
  { name: 'crown', angle: Math.PI / 4 },
];

// Sort objects by angle to draw sequential lines correctly
const sortedObjects = [...objectsData].sort((a, b) => a.angle - b.angle);

// Add the first object again at the end if we want a closed loop
// For now, connect crown back to center (representing Crypto/Ledger link)
// const loopObjects = [...sortedObjects, sortedObjects[0]];
// --- End Constants ---

function Relationships() {
  // Calculate world positions for each object
  const points = useMemo(() => {
    const calculatedPoints = sortedObjects.map((obj) => {
      const x = ringRadius * Math.cos(obj.angle);
      const z = ringRadius * Math.sin(obj.angle);
      return new THREE.Vector3(x, 0, z);
    });
    return calculatedPoints;
  }, []);

  // Find the crown's position
  const crownObject = objectsData.find(obj => obj.name === 'crown');
  const crownPosition = useMemo(() => {
      if (!crownObject) return new THREE.Vector3(0,0,0); // Default if not found
      const x = ringRadius * Math.cos(crownObject.angle);
      const z = ringRadius * Math.sin(crownObject.angle);
      return new THREE.Vector3(x, 0, z);
  }, [crownObject]);

  return (
    <group>
      {/* Line connecting the sorted outer ring objects sequentially */}
      <Line
        points={points}       // Array of Vector3
        color="#888888"       // Light grey
        lineWidth={2}
        dashed={false}
      />
      {/* Line connecting the Crown back to the center (Sun/Ledger proxy) */}
      <Line
        points={[crownPosition, new THREE.Vector3(0, 0, 0)]} // Crown to Origin
        color="#aaaa00"       // Dim yellow
        lineWidth={3}
        dashed={true}
        dashSize={1}
        gapSize={0.5}
      />
    </group>
  );
}

export default Relationships;
