import { useState } from "react";
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

// Testimonials
const testimonials = [
  {
    quote:
      "Their attention to detail and creative vision truly exceeded our expectations. The team delivered a refined, modern website that not only looks premium but also performs better than ever.",
    name: "@Steve Harrington",
    img: "/futu.png",
  },
  {
    quote:
      "From the first call to launch day, the process was smooth and transparent. Our new brand identity finally feels like us, and our customers have noticed.",
    name: "@Maya Collins",
    img: "/less.png",
  },
  {
    quote:
      "They turned a complex product into a clean, easy interface. Engagement went up within weeks of the redesign going live.",
    name: "@Daniel Brooks",
    img: "/less.png",
  },
];

// Blog posts
const blogs = [
  {
    img: "/futu.png",
    title: "Digital Strategy & Layouts",
    text: "We build scalable design systems that keep your website consistent, fast, and optimized for growth across every page and device.",
  },
  {
    img: "/digi.png",
    title: "Digital Vision & Structure",
    text: "We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.",
  },
  {
    img: "/less.png",
    title: "Building Smarter Digital Products",
    text: "From research to launch, we shape digital products that are simple to use, easy to scale, and built around real user needs.",
  },
  {
    img: "/project.png",
    title: "Lessons from Real-World Projects",
    text: "What we learned from shipping dozens of websites and apps, and the design decisions that made the biggest difference.",
  },
];
// Team members
const team = [
  { img: "/less.png", name: "Courtney Henry", role: "Business Growth" },
  { img: "/futu.png", name: "Guy Hawkins", role: "Product Designer" },
  { img: "/less.png", name: "Ronald Richards", role: "Graphic Designer" },
  { img: "/futu.png", name: "Jane Cooper", role: "Sales & Marketing" },
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
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const last = testimonials.length - 1;
  const prev = () => setActive(active - 1);
  const next = () => setActive(active + 1);

  // blogs slider
  const [bActive, setBActive] = useState(0);
  const bLast = blogs.length - 2;
  const bPrev = () => setBActive(bActive - 1);
  const bNext = () => setBActive(bActive + 1);

  return (
    <div className="page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">✸DigitalArc</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#project">Project</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
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
              <b>✸DigitalArc</b>
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

        {/* 01 */}
        <div className="service-row">
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
            <button className="service-btn">→</button>
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

      <div className="dark-wrap">

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="features-header">
          <div className="features-label">
            <span className="features-dot"></span>
            <span>WE PROVIDE MORE</span>
          </div>
          <h2>FEATURES.</h2>
        </div>

        <div className="features-grid">
          {/* 01 */}
          <div className="feature-card">
            <span className="feature-no">(01)</span>
            <h3>Brand Identity Systems</h3>
            <p>
              We craft complete visual identities including logos, typography,
              and color systems that give your brand a consistent and
              recognizable presence.
            </p>
            <div className="feature-img">
              <img src="/futu.png" alt="future" />
            </div>
          </div>

          {/* 02 */}
          <div className="feature-card">
            <span className="feature-no">(02)</span>
            <h3>UI/UX Design</h3>
            <br></br>
            <p>
              We design intuitive, user-focused interfaces that look beautiful
              and guide users effortlessly through your digital experience.
            </p>
            <div className="feature-img">
              <img src="/less.png" alt="digital" />
            </div>
          </div>

          {/* 03 */}
          <div className="feature-card">
            <span className="feature-no">(03)</span>
            <h3>Digital Strategy & Layouts</h3>
            <p>
              We create conversion-driven layouts and visual structures that
              turn visitors into customers while keeping your brand visually
              powerful.
            </p>
            <div className="feature-img">
              <img src="/project.png" alt="digital project" />
            </div>
          </div>
        </div>
      </section>
      
      {/* IMAGE SECTION */}
      <section className="image-section" id="section">
        {/* left: dark card */}
        <div className="image-card">
          <b>✸DigitalArc</b>
          <p>
            A creative video production studio crafting cinematic visuals,
            powerful storytelling, and high-impact content that brings
            brands, products, and ideas to life.
          </p>
        </div>

        {/* right: image */}
        <div className="image-fu">
          <img src="/futu.png" alt="image show" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="t-header">
          <div className="t-label">
            <span className="t-dot"></span>
            <span>WHAT PEOPLE SAYING</span>
          </div>
          <h2>TESTIMONIALS.</h2>
        </div>

        <div className="t-logos">
          <div className="t-logo">afterpay</div>
          <div className="t-logo">Basecamp</div>
          <div className="t-logo">splunk</div>
          <div className="t-logo">ghost</div>
        </div>

        <div className="t-body">
          <div className="t-left">
            <p className="t-quote">“{t.quote}”</p>
            <div className="t-bottom">
              <b className="t-name">{t.name}</b>
              <div className="t-arrows">
                <button className="t-arrow" onClick={prev} disabled={active === 0}>←</button>
                <button className="t-arrow" onClick={next} disabled={active === last}>→</button>
              </div>
            </div>
          </div>

          <div className="t-right">
            <img src={t.img} alt={t.name} />
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="blogs-section" id="blog">
        <div className="b-header">
          <div className="b-label">
            <span className="b-dot"></span>
            <span>OUR BLOGS</span>
          </div>
          <h2>BLOGS.</h2>
        </div>
        <div className="b-slider">
          <div
            className="b-track"
            style={{ transform: `translateX(-${bActive * 50}%)` }}
          >
            {blogs.map((b) => (
              <article className="b-card" key={b.title}>
                <div className="b-text">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
                <div className="b-img">
                  <img src={b.img} alt={b.title} />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="b-arrows">
          <button className="b-arrow" onClick={bPrev} disabled={bActive === 0}>←</button>
          <button className="b-arrow" onClick={bNext} disabled={bActive === bLast}>→</button>
        </div>
      </section>
      </div>
      <section className="team-section" id="team">
        <div className="team-header">
          <div className="team-label">
            <span className="team-dot"></span>
            <span>WHO WE ARE</span>
          </div>
          <h2>TEAM.</h2>
        </div>

        <div className="team-grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-img">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-info">
                <span className="team-star">✸</span>
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;