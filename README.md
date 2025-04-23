# Hapa-Verse 3D Prototype (reference-123D-proto)

## Goal

Recreate the concepts from the standalone `HapaVerse_fullstack.html` file using the project's standard React + React Three Fiber + Vite technology stack. This serves as an interactive 3D visualization of core Hapa-Verse components.

## What & Why

This prototype visualizes:

*   **Ledger Sun:** Central element representing skills/credits.
*   **Storage Torus:** Ring representing data storage.
*   **Compute Fireflies:** Particles representing distributed computation.
*   **Mentor/Apprentice Orbits:** Rings representing user roles/relationships.
*   **Outer Ring Objects:** Symbolic representations of features (🍌, 💠, 🏪, 🔒, 👑).
*   **Inclusion Sphere:** Outer boundary.

This rebuild integrates the concept into our main project structure for consistency and potential future expansion.

## Setup

1.  Navigate to the `reference-123D-proto` directory:
    ```bash
    cd c:\hapa-rebuild\reference-123D-proto
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Usage

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open the provided URL (usually `http://localhost:5173`) in your browser.
3.  Interact with the scene: Drag to rotate, scroll to zoom.

## Deployment (GitHub Pages)

This site is automatically built and deployed via a GitHub Actions workflow to GitHub Pages.

**Live URL:**

```
https://calderwong.github.io/hapa-proto0.00.00.7-visualizer/
```

If the link returns a 404 or old content, double‑check the repository setting:

1. Repo → **Settings** → **Pages**.
2. Ensure **Source** is set to `gh-pages / (root)`.
3. Save. Changes may take a minute to propagate.
