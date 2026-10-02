import "./App.css";

function App() {
  return (
    <div className="page">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">DigitalArc</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#project">Project</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <button className="theme">BB</button>
        </nav>
      </header>

      {/* Main */}
      <main className="container">
        {/* Hero */}
        <section className="hero-top">
          <h1>
            A CREATIVE DESIGNN
            <br />
            PRODUCTION STUDIO
          </h1>
          <div className="buttons">
            <button className="get-started">
              GET STARTED
            </button>
            <button className="arrow">
              →
            </button>
          </div>
        </section>

      {/* Video */}
      <section className="digital-banner">
      <video
      src="/digital_arc_15s.mp4"
      autoPlay
      loop
      playsInline
      controls
      >
    Your browser does not support video.
       </video>
       </section>

      </main>
    </div>
  );
}

export default App;