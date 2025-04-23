import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

// Import component files once created
import Sun from './components/Sun';
import StorageTorus from './components/StorageTorus';
import Fireflies from './components/Fireflies';
import Orbits from './components/Orbits';
import OuterRing from './components/OuterRing';
import InclusionSphere from './components/InclusionSphere';
import Relationships from './components/Relationships';

function App() {
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit', 'top', 'focused'

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* View Switcher Buttons */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 10,
          background: 'rgba(0,0,0,0.5)',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        <button onClick={() => setViewMode('orbit')} style={{ marginRight: '5px' }}>
          Orbit View
        </button>
        <button onClick={() => setViewMode('top')} style={{ marginRight: '5px' }}>
          Top View
        </button>
        <button onClick={() => setViewMode('focused')}>Focused View</button>
      </div>

      {/* Canvas takes full space */}
      <Canvas
        style={{ background: '#111' }}
      >
        {/* Cameras */}
        <PerspectiveCamera
          makeDefault={viewMode === 'orbit' || viewMode === 'focused'}
          fov={50}
          position={viewMode === 'focused' ? [0, 5, 25] : [0, 15, 40]} // Closer for focused view
        />
        <OrthographicCamera
          makeDefault={viewMode === 'top'}
          position={[0, 50, 0]} // Position directly above
          rotation={[-Math.PI / 2, 0, 0]} // Look straight down
          zoom={10} // Adjust zoom level as needed
          near={0.1}
          far={1000}
        />

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
        <Relationships />

        {/* Controls - only enable for orbit view */}
        {viewMode === 'orbit' && <OrbitControls enableZoom={true} enablePan={true} />}
      </Canvas>
    </div>
  );
}

export default App;
