import { useMemo, useState } from 'react';

const playlists = [
  {
    id: 1,
    title: 'Night Drive',
    description: 'Smooth synthwave and neon beats',
    color: '#f97316',
    tracks: 18,
  },
  {
    id: 2,
    title: 'Focus Flow',
    description: 'Deep work with clean electronic pulses',
    color: '#10b981',
    tracks: 24,
  },
  {
    id: 3,
    title: 'Chill Pop',
    description: 'Sunny hooks and easygoing rhythm',
    color: '#ec4899',
    tracks: 16,
  },
  {
    id: 4,
    title: 'Workout Rush',
    description: 'High-energy tracks to push through',
    color: '#3b82f6',
    tracks: 21,
  },
];

const library = [
  {
    id: 1,
    title: 'Midnight Echo',
    artist: 'Luna Harbor',
    duration: '3:41',
    album: 'Afterglow',
    genre: 'Synthwave',
    color: '#f59e0b',
  },
  {
    id: 2,
    title: 'City Lights',
    artist: 'Neon Avenue',
    duration: '4:12',
    album: 'Metro Hearts',
    genre: 'Indie Pop',
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'After the Rain',
    artist: 'Mila Shore',
    duration: '2:58',
    album: 'Warm Signals',
    genre: 'Dream Pop',
    color: '#14b8a6',
  },
  {
    id: 4,
    title: 'Open Road',
    artist: 'Carter Vale',
    duration: '3:36',
    album: 'Blue Horizon',
    genre: 'Folk Rock',
    color: '#ef4444',
  },
  {
    id: 5,
    title: 'Signal Bloom',
    artist: 'Kite Theory',
    duration: '4:04',
    album: 'Future Mood',
    genre: 'Electronic',
    color: '#60a5fa',
  },
  {
    id: 6,
    title: 'Summer Drift',
    artist: 'Harbor Days',
    duration: '3:22',
    album: 'Coastal Echo',
    genre: 'Pop',
    color: '#f472b6',
  },
  {
    id: 7,
    title: 'Glass Horizon',
    artist: 'The Dwellers',
    duration: '5:01',
    album: 'Quiet Current',
    genre: 'Ambient',
    color: '#22c55e',
  },
  {
    id: 8,
    title: 'Velvet Run',
    artist: 'Aster Bloom',
    duration: '3:49',
    album: 'Golden Static',
    genre: 'Alt R&B',
    color: '#fb7185',
  },
];

const categories = ['All', 'Trending', 'Podcasts', 'New Release', 'Live', 'Workout', 'Focus'];

function App() {
  const [search, setSearch] = useState('');
  const [activeTrackId, setActiveTrackId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredTracks = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return library;
    return library.filter(
      (track) =>
        track.title.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query) ||
        track.genre.toLowerCase().includes(query)
    );
  }, [search]);

  const activeTrack = filteredTracks.find((track) => track.id === activeTrackId) ?? library[0];

  const handlePlayTrack = (trackId) => {
    setActiveTrackId(trackId);
    setIsPlaying(true);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div>
            <p className="brand-name">SoundWave</p>
            <span>Free</span>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-link active">Home</button>
          <button className="nav-link">Search</button>
          <button className="nav-link">Library</button>
          <button className="nav-link">Liked Songs</button>
          <button className="nav-link">Create Playlist</button>
        </nav>

        <div className="mini-card">
          <p className="eyebrow">Daily mix</p>
          <h3>Ocean Drift</h3>
          <span>25 tracks</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-icons">
            <button>←</button>
            <button>→</button>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search artists, songs, or genres"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="account-box">
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
          </div>
        </header>

        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">Featured playlist</p>
            <h1>Feel the rhythm in every moment.</h1>
            <p>
              Discover handpicked tracks and mood-based playlists built for the way you listen.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Play now</button>
              <button className="ghost-btn">Follow</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="album-art major">
              <div className="vinyl-ring"></div>
            </div>
          </div>
        </section>

        <section className="chips-row">
          {categories.map((category) => (
            <button key={category} className={`chip ${category === 'All' ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </section>

        <section className="content-grid">
          <div className="section-header">
            <h2>Popular playlists</h2>
            <a href="#">View all</a>
          </div>

          <div className="playlist-grid">
            {playlists.map((playlist) => (
              <article key={playlist.id} className="playlist-card" style={{ '--card-color': playlist.color }}>
                <div className="playlist-cover" />
                <div className="playlist-info">
                  <h3>{playlist.title}</h3>
                  <p>{playlist.description}</p>
                  <span>{playlist.tracks} tracks</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="library-section">
          <div className="section-header">
            <h2>Recently played</h2>
            <a href="#">See more</a>
          </div>

          <div className="track-list">
            {filteredTracks.length ? (
              filteredTracks.map((track) => (
                <button
                  key={track.id}
                  className={`track-row ${activeTrack?.id === track.id ? 'selected' : ''}`}
                  onClick={() => handlePlayTrack(track.id)}
                >
                  <div className="track-left">
                    <div className="track-cover" style={{ background: track.color }} />
                    <div>
                      <strong>{track.title}</strong>
                      <span>{track.artist}</span>
                    </div>
                  </div>
                  <span className="track-genre">{track.genre}</span>
                  <span className="track-duration">{track.duration}</span>
                </button>
              ))
            ) : (
              <div className="empty-state">No songs matched your search.</div>
            )}
          </div>
        </section>
      </main>

      <footer className="player-bar">
        <div className="player-track">
          <div className="mini-cover" style={{ background: activeTrack.color }} />
          <div>
            <strong>{activeTrack.title}</strong>
            <span>{activeTrack.artist}</span>
          </div>
        </div>

        <div className="player-controls">
          <div className="controls-buttons">
            <button>⟲</button>
            <button>⏮</button>
            <button className="play-toggle" onClick={() => setIsPlaying((prev) => !prev)}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button>⏭</button>
            <button>⤴</button>
          </div>
          <div className="progress-wrap">
            <span>1:24</span>
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
            <span>{activeTrack.duration}</span>
          </div>
        </div>

        <div className="volume-box">
          <span>🔊</span>
          <div className="volume-bar">
            <div className="volume-fill" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
