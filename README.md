:root {
  font-family: 'Inter', sans-serif;
  color: #f5f5f5;
  background: #050816;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(52, 211, 153, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.16), transparent 30%),
    #050816;
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1500px;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  padding: 24px;
  gap: 24px;
}

.sidebar,
.main-panel,
.player-bar {
  background: rgba(15, 23, 42, 0.86);
  border: 1px solid rgba(148, 163, 184, 0.12);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.22);
}

.sidebar {
  border-radius: 26px;
  padding: 26px 18px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 18px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #22c55e, #3b82f6);
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
}

.brand-name {
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand span {
  color: #22c55e;
  font-size: 0.8rem;
  margin-left: 2px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-link {
  appearance: none;
  background: transparent;
  border: 0;
  color: #dfe7f1;
  padding: 12px 14px;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  transition: 0.2s ease;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(148, 163, 184, 0.08);
  color: white;
}

.mini-card {
  margin-top: auto;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.18));
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  padding: 18px 16px;
}

.eyebrow {
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: #8ec5ff;
  margin: 0 0 10px;
}

.mini-card h3,
.section-header h2,
.hero-copy h1,
.playlist-info h3 {
  margin: 0;
}

.mini-card span,
.playlist-info p,
.playlist-info span,
.hero-copy p,
.track-row span,
.track-row strong,
.player-track span,
.player-track strong {
  color: #dfe7f1;
}

.main-panel {
  border-radius: 28px;
  padding: 22px 22px 30px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
}

.topbar-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbar-icons button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(148, 163, 184, 0.05);
  color: white;
}

.search-box {
  flex: 1;
  max-width: 620px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  padding: 10px 14px;
}

.search-box input {
  width: 100%;
  background: transparent;
  border: 0;
  outline: none;
  color: white;
}

.search-box input::placeholder {
  color: #8fa4c9;
}

.account-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.login-btn,
.signup-btn,
.primary-btn,
.ghost-btn,
.chip {
  border-radius: 999px;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.login-btn,
.ghost-btn {
  background: transparent;
  border-color: rgba(148, 163, 184, 0.18);
  color: white;
  padding: 10px 16px;
}

.signup-btn,
.primary-btn {
  background: linear-gradient(135deg, #22c55e, #10b981);
  color: #03120c;
  font-weight: 700;
  padding: 10px 16px;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.13), rgba(59, 130, 246, 0.14));
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 24px;
  padding: 28px;
  min-height: 250px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-copy h1 {
  font-size: clamp(2.25rem, 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}

.hero-copy p {
  max-width: 520px;
  color: #dfe7f1;
  margin: 0 0 20px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.primary-btn,
.ghost-btn {
  padding: 12px 18px;
  font-weight: 600;
}

.hero-visual {
  display: grid;
  place-items: center;
}

.album-art {
  position: relative;
  width: min(280px, 100%);
  aspect-ratio: 1;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.35), rgba(59, 130, 246, 0.38));
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.album-art::before {
  content: '';
  position: absolute;
  inset: 16% 18%;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(15,23,42,0.6) 38%, #050816 47%, #050816 100%);
  box-shadow: inset 0 0 18px rgba(255,255,255,0.1);
}

.vinyl-ring {
  position: absolute;
  inset: 30%;
  border-radius: 50%;
  border: 18px solid rgba(255,255,255,0.08);
  box-shadow: inset 0 0 0 10px rgba(255,255,255,0.03);
}

.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0 28px;
}

.chip {
  background: rgba(148, 163, 184, 0.06);
  color: #dfe7f1;
  padding: 9px 14px;
  border-color: rgba(148, 163, 184, 0.08);
}

.chip.active {
  background: white;
  color: #0f172a;
}

.content-grid,
.library-section {
  margin-top: 12px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header a {
  color: #a8d9ff;
  text-decoration: none;
  font-size: 0.9rem;
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 16px;
}

.playlist-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 18px;
  padding: 14px;
}

.playlist-cover {
  height: 150px;
  border-radius: 14px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05)),
    var(--card-color);
  position: relative;
  overflow: hidden;
}

.playlist-cover::after {
  content: '';
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(2, 6, 23, 0.25);
  border: 16px solid rgba(255,255,255,0.13);
}

.playlist-info {
  padding-top: 12px;
}

.playlist-info h3 {
  margin-bottom: 6px;
  font-size: 1.1rem;
}

.playlist-info p {
  margin: 0 0 8px;
  color: #dfe7f1;
  font-size: 0.92rem;
}

.playlist-info span {
  font-size: 0.8rem;
  color: #a5b4cf;
}

.track-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
}

.track-row {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(200px, 1.4fr) 0.8fr 0.3fr;
  gap: 14px;
  align-items: center;
  text-align: left;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.08);
  color: white;
  padding: 12px 14px;
  border-radius: 14px;
}

.track-row.selected {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.28);
}

.track-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.track-cover,
.mini-cover {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, #22c55e, #3b82f6);
  flex-shrink: 0;
}

.track-left strong,
.player-track strong {
  display: block;
  font-size: 0.96rem;
  margin-bottom: 2px;
}

.track-left span,
.player-track span {
  color: #a9b8d6;
  font-size: 0.8rem;
}

.track-genre,
.track-duration {
  color: #dfe7f1;
  font-size: 0.82rem;
}

.empty-state {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 14px;
  padding: 18px;
  color: #dfe7f1;
}

.player-bar {
  position: sticky;
  bottom: 0;
  margin-top: 22px;
  border-radius: 18px 18px 0 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.8fr;
  align-items: center;
  gap: 16px;
  padding: 12px 18px 14px;
}

.player-track {
  display: flex;
  align-items: center;
  gap: 12px;
}

.player-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.controls-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.controls-buttons button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: rgba(148, 163, 184, 0.08);
  color: white;
}

.play-toggle {
  width: 40px !important;
  height: 40px !important;
  background: white !important;
  color: #0f172a !important;
  font-weight: 900;
}

.progress-wrap {
  width: min(520px, 100%);
  display: grid;
  grid-template-columns: 42px 1fr 42px;
  align-items: center;
  gap: 12px;
  color: #dfe7f1;
  font-size: 0.8rem;
}

.progress-bar,
.volume-bar {
  position: relative;
  height: 6px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.2);
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 42%;
  background: linear-gradient(90deg, #22c55e, #3b82f6);
  border-radius: inherit;
}

.volume-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.volume-bar {
  width: 110px;
}

.volume-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 68%;
  background: linear-gradient(90deg, #dfe7f1, #a8d9ff);
  border-radius: inherit;
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
    padding: 16px;
  }

  .sidebar {
    padding: 18px 14px;
  }

  .hero-card {
    grid-template-columns: 1fr;
  }

  .playlist-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  .player-bar {
    grid-template-columns: 1fr;
    padding-bottom: 18px;
  }

  .volume-box {
    justify-content: center;
  }
}

@media (max-width: 620px) {
  .topbar {
    flex-wrap: wrap;
  }

  .account-box {
    width: 100%;
    justify-content: flex-end;
  }

  .playlist-grid {
    grid-template-columns: 1fr;
  }

  .track-row {
    grid-template-columns: 1fr;
  }

  .track-genre,
  .track-duration {
    display: none;
  }
}
