import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, OrthographicCamera } from '@react-three/drei';

// Import component files
import Sun from './components/Sun';
import StorageTorus from './components/StorageTorus';
import Fireflies from './components/Fireflies';
import Orbits from './components/Orbits';
import OuterRing from './components/OuterRing';
import InclusionSphere from './components/InclusionSphere';
import Relationships from './components/Relationships';

function App() {
  const [viewMode, setViewMode] = useState('orbit'); // 'orbit', 'top', 'focused'
  const githubRepoUrl = 'https://github.com/calderwong/hapa-proto0.00.00.7-visualizer';

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* View Switcher Buttons */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          background: 'rgba(0,0,0,0.6)',
          padding: '8px',
          borderRadius: '8px',
          display: 'flex',
          gap: '10px', // Add space between buttons
        }}
      >
        <button
          onClick={() => setViewMode('orbit')}
          style={viewMode === 'orbit' ? activeButtonStyle : buttonStyle} // Apply active style
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = (viewMode === 'orbit' ? activeButtonStyle : buttonStyle).backgroundColor}
        >
          Orbit View
        </button>
        <button
          onClick={() => setViewMode('top')}
          style={viewMode === 'top' ? activeButtonStyle : buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = (viewMode === 'top' ? activeButtonStyle : buttonStyle).backgroundColor}
        >
          Top View
        </button>
        <button
          onClick={() => setViewMode('focused')}
          style={viewMode === 'focused' ? activeButtonStyle : buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = (viewMode === 'focused' ? activeButtonStyle : buttonStyle).backgroundColor}
        >
          Focused View
        </button>
      </div>

      {/* GitHub Badge */}
      <a
        href={githubRepoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 10,
        }}
      >
        <img
          src="https://img.shields.io/badge/GitHub-View%20Repo-blue?logo=github"
          alt="View on GitHub"
          style={{ height: '25px' }} // Adjust size as needed
        />
      </a>

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

/* Basic Button Styling */
const buttonStyle = {
  padding: '8px 15px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#444',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.2s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#666',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#007bff', // Highlight active button
  fontWeight: 'bold',
};

export default App;
