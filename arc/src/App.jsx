import "./App.css";

// 4 projects ki list
const projects = [
  { img: "/futu.png", title: "Designing the Future" },
  { img: "/digi.png", title: "Digital Vision & Structure" },
  { img: "/less.png", title: "Building Smarter Digital Products" },
  { img: "/project.png", title: "Lessons from Real-World Projects" },
];

// Experience stats
const stats = [
  { value: "98%", label: "Client satisfaction rate" },
  { value: "87+", label: "Successful projects launched" },
  { value: "50K+", label: "Monthly visitors" },
];

// Brand logos
const logos = (
  <>
    <div className="brand">
      <span className="notion-icon">N</span>
      <b>Notion</b>
    </div>
    <div className="brand gumroad">
      <b>GUMROAD</b>
    </div>
    <div className="brand afterpay">
      <b>afterpay</b>
      <span className="afterpay-icon">✣</span>
    </div>
    <div className="brand">
      <span className="framer-icon">F</span>
      <b>Framer</b>
    </div>
    <div className="brand">
      <span className="plaid-icon">✣</span>
      <b>PLAID</b>
    </div>
    <div className="brand">
      <span className="medium-icon">●●</span>
      <b>Medium</b>
    </div>
  </>
);

function App() {
  return (
    <div className="page">

      {/* NAVBAR */}
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

      <main className="container" id="home">

        {/* HERO */}
        <section className="hero-top">
          <h1>
            A CREATIVE DESIGN
            <br />
            PRODUCTION STUDIO
          </h1>
          <div className="buttons">
            <button className="get-started">GET STARTED</button>
            <button className="arrow">→</button>
          </div>
        </section>

        {/* VIDEO */}
        <section className="digital-banner">
          <video src="/digital_arc_15s_web.mp4" autoPlay muted loop playsInline />
        </section>

        {/* BRAND LOGOS */}
        <section className="brand-section">
          <div className="brand-track">
            {logos}
            {logos}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="project">
          <div className="projects-label">
            <span className="projects-dot"></span>
            <span>PROJECTS</span>
          </div>
          <h2>OUR PROJECTS.</h2>
        </section>

        <section className="image-four">
          {projects.map((p) => (
            <div className="image-one" key={p.title}>
              <img className="img" src={p.img} alt={p.title} />
              <div className="project-info">
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* EXPERIENCES */}
      <section className="experience-section" id="about">
        <div className="experience-header">
          <div className="experience-label">
            <span className="experience-dot"></span>
            <span>WHO WE ARE</span>
          </div>
          <h2>EXPERIENCES.</h2>
        </div>

        <div className="experience-body">
          {/* left: stats */}
          <div className="experience-stats">
            {stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <h3>{s.value}</h3>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* right: dark grain card */}
          <div className="experience-card">
            <div className="card-logo">
              <span className="card-logo-icon"></span>
              <b>DigitalArc</b>
            </div>
            <p>
              A creative video production studio crafting cinematic visuals,
              powerful storytelling, and high-impact content that brings
              brands, products, and ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div className="services-label">
            <span className="services-dot"></span>
            <span>WHAT WE OFFER</span>
          </div>
          <h2>SERVICES.</h2>
        </div>

        {/* 01 - black row */}
        <div className="service-row dark">
          <div className="service-left">
            <span className="service-no">(01)</span>
            <h3>App Design</h3>
          </div>
          <div className="service-img-box">
            <img src="/less.png" alt="App Design" />
          </div>
          <div className="service-right">
            <p>
              Intuitive mobile app design focused on usability, performance,
              and seamless user journeys across iOS and Android platforms.
            </p>
            <button className="service-btn">↗</button>
          </div>
        </div>

        {/* 02 */}
        <div className="service-row">
          <div className="service-left">
            <span className="service-no">(02)</span>
            <h3>Web Design</h3>
          </div>
          <div className="service-img-box">
            <img src="/futu.png" alt="Web Design" />
          </div>
          <div className="service-right">
            <p>
              Modern dark-mode web design delivering sleek visuals,
              responsive layouts, and conversion-focused interfaces.
            </p>
            <button className="service-btn">→</button>
          </div>
        </div>

        {/* 03 */}
        <div className="service-row">
          <div className="service-left">
            <span className="service-no">(03)</span>
            <h3>Product Design</h3>
          </div>
          <div className="service-img-box">
            <img src="/project.png" alt="Product Design" />
          </div>
          <div className="service-right">
            <p>
              End-to-end product design combining UX research, wireframing,
              prototyping, and scalable design systems.
            </p>
            <button className="service-btn">→</button>
          </div>
        </div>

        {/* 04 */}
        <div className="service-row">
          <div className="service-left">
            <span className="service-no">(04)</span>
            <h3>BRAND DESIGN</h3>
          </div>
          <div className="service-img-box">
            <img src="/project.png" alt="Brand Design" />
          </div>
          <div className="service-right">
            <p>
              Strategic brand identity design including logo systems,
              typography, color palettes, and visual storytelling.
            </p>
            <button className="service-btn">→</button>
          </div>
        </div>

      </section>
    </div>
  );
}
export default App;