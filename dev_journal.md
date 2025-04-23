# Development Journal - Hapa-Verse 3D Prototype

1.  **Prompt:** User requested to replicate the `HapaVerse_fullstack.html` concept within the `hapa-rebuild` project structure (`reference-123D-proto/`) using React/R3F and following project rules.
    *   **Execution:** Created standard project files (`README.md`, `dev_journal.md`, `Product_Requirements_Document.md`, `To_Be_Better_Next_Time.md`, `/APPLES/BANANAS.md`, `/APPLES/ROSES.md`, `LICENSE`). Set up basic Vite + React + R3F project structure (`package.json`, `vite.config.js`, `index.html`, `src/`).
    *   **Tags:** #setup, #scaffolding, #react, #r3f
    *   **Est. Avg. Human Dev Time:** 15 minutes

2.  **Prompt:** Add relationship lines, labels, camera view switcher, prettier controls, GitHub badge, and deploy to GitHub Pages.
    *   **Execution:** Implemented `Relationships.jsx`, added labels to major components, created view switcher with multiple cameras and styled buttons, inserted GitHub repo badge. Configured Vite base path, added `gh-pages` scripts, resolved Windows build issues by adopting a GitHub Actions workflow (`.github/workflows/deploy.yml`). Updated `.gitignore` to ignore large folders. Pushed workflow; deployment handled via Actions.
    *   **Tags:** #feature, #ui, #deployment, #ci
    *   **Est. Avg. Human Dev Time:** 2 hours
