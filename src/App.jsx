import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Import component files once created
import Sun from './components/Sun';
import StorageTorus from './components/StorageTorus';
import Fireflies from './components/Fireflies';
import Orbits from './components/Orbits';
import OuterRing from './components/OuterRing';
import InclusionSphere from './components/InclusionSphere';

function App() {
  return (
    <Canvas camera={{ position: [0, 20, 55], fov: 60 }}>
      {/* Match background color from original */}
      <color attach="background" args={['#000011']} />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} color={0xffeeaa} intensity={2} distance={120} />

      {/* Components will be added here */}
      <Sun />
      <StorageTorus />
      <Fireflies />
      <Orbits />
      <OuterRing />
      <InclusionSphere />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
