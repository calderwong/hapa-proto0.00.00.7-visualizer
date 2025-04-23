# Product Requirements Document - Hapa-Verse 3D Prototype

## 1. Overview

This document outlines the requirements for the `reference-123D-proto` project, which aims to recreate the visual concepts of the Hapa-Verse system (originally mocked in `HapaVerse_fullstack.html`) using a React and React Three Fiber (R3F) implementation.

## 2. Goals

*   Provide an interactive 3D visualization of key Hapa-Verse components.
*   Integrate this visualization into the main `hapa-rebuild` project structure and workflow.
*   Establish a foundation for potential future interactive features within this 3D space.

## 3. Functional Requirements

*   **FR1: Scene Rendering:** The application shall render a 3D scene using R3F.
*   **FR2: Core Components Visualization:** The scene must visually represent:
    *   Ledger Sun (central sphere)
    *   Storage Torus (ring around the sun)
    *   Compute Fireflies (particle-like elements in a spherical distribution)
    *   Mentor Orbits (ring of objects)
    *   Apprentice Orbits (another ring of objects)
    *   Outer Ring Objects (distinct objects with labels: 🍌, 💠, 🏪, 🔒, 👑)
    *   Inclusion Sphere (large, transparent outer sphere)
*   **FR3: Interactivity:**
    *   Users must be able to rotate the scene view by dragging the mouse.
    *   Users must be able to zoom in/out using the mouse scroll wheel.
*   **FR4: Animation:** The scene should include basic animations:
    *   Sun color shifting slightly.
    *   Torus rotating.
    *   Firefly group rotating.
    *   Mentor/Apprentice orbits rotating.
    *   Inclusion sphere rotating slowly.
*   **FR5: Technology Stack:** The implementation must use React, R3F, Drei, and Vite.

## 4. Non-Functional Requirements

*   **NFR1: Performance:** The visualization should run smoothly in modern web browsers.
*   **NFR2: Code Quality:** Code should adhere to project standards (readability, maintainability).
*   **NFR3: Project Structure:** The code must reside within the `c:/hapa-rebuild/reference-123D-proto/` directory and follow its file structure conventions.
