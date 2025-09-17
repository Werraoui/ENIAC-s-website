import './Home.css';
import { useEffect, useRef, useState } from 'react';

const WORDS = ["Code.", "Future.", "Innovation."]; 

// Keep this component outside of Home so it doesn't remount on Home's frequent re-renders
const ProjectsGallery = () => {
  const filters = ['All', 'Web', 'AI', 'Mobile'];
  const [active, setActive] = useState('All');
  const projects = [
    { title: 'Campus Navigator', tag: 'Web' },
    { title: 'ML Notes Classifier', tag: 'AI' },
    { title: 'Study Buddy', tag: 'Mobile' },
  ];
  const shown = active === 'All' ? projects : projects.filter(p => p.tag === active);

  return (
    <div className="projects-body">
      <div className="chips">
        {filters.map(f => (
          <button
            key={f}
            className={`chip ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-cards">
        {shown.map((p) => (
          <div key={p.title} className="project-card">
            <span className="pill">{p.tag}</span>
            <div className="project-title">{p.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const typingSpeedMs = 100; 
  const deletingSpeedMs = 60; 
  const pauseAtEndMs = 900; 

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const eventsTrackRef = useRef(null);

  const events = [
    {
      date: 'Sept 25, 2024',
      title: 'Intro to Machine Learning',
      desc: 'Hands-on supervised learning with live demos.',
      tags: ['Python', 'Scikit-learn'],
    },
    {
      date: 'Oct 12, 2024',
      title: 'Web Dev Bootcamp',
      desc: 'From HTML to React in a single-day sprint.',
      tags: ['HTML', 'CSS', 'JS'],
    },
    {
      date: 'Nov 2, 2024',
      title: 'Data Science Hack Night',
      desc: 'Prototype data-driven apps with mentors.',
      tags: ['Python', 'Pandas'],
    },
  ];

  // Horizontal scrolling is available via mouse/touch; nav buttons removed per design


  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (!isDeleting && charIndex === currentWord.length) {
      const timeoutId = setTimeout(() => setIsDeleting(true), pauseAtEndMs);
      return () => clearTimeout(timeoutId);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
      return; 
    }

    const nextText = currentWord.slice(0, isDeleting ? charIndex - 1 : charIndex + 1);
    const delay = isDeleting ? deletingSpeedMs : typingSpeedMs;

    const timeoutId = setTimeout(() => {
      setDisplayText(nextText);
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setWordIndex(0);
    setCharIndex(0);
  }, []);

  return (
    <>
    <section className="home">
      <div className="hero">
        <div className="hero-left">
          <div className="badge">ENSA Safi • Cadi Ayyad University</div>

          <h1 className="title">ENIAC</h1>

          <div className="typewriter">
            <span className="muted"> </span>
            <span className="type-text">{displayText}</span>
            <span className="caret" />
          </div>

          <p className="subtitle">
            We are the nexus of computer science at ENSA Safi—builders, innovators,
            and problem-solvers shaping the future together.
          </p>

          <div className="cta-row">
            <a className="btn primary" href="#join">Join the Collective</a>
            <a className="btn ghost" href="#work">View Our Work</a>
          </div>

          <div className="scroll-hint">
            <span className="chev">▾</span> Scroll
          </div>
        </div>

        <aside className="hero-right">
          <div className="feature-card">
            <div className="card-header">
              <span className="glyph">⚙️</span>
              <div>
                <div className="card-title">Innovation • Community • Impact</div>
                <div className="card-sub">Learn • Build • Share</div>
              </div>
            </div>

            <ul className="checklist">
              <li>Hands-on workshops in AI, Web, DevOps</li>
              <li>Hackathons and real-world projects</li>
              <li>Friendly, supportive community</li>
            </ul>

            <blockquote className="quote">
              “ENIAC turned my curiosity into shipped projects with an amazing team.”
            </blockquote>

            <a className="btn secondary full" href="#events">
              Explore Events →
            </a>
          </div>
        </aside>
      </div>
    </section>

    {/* About Section */}
    <section className="about">
      <div className="about-wrap">
        <h2 className="about-title">About ENIAC</h2>
        <p className="about-sub">
          We are the nexus of computer science at ENSA Safi, uniting curious minds to learn by
          building. We push the frontier through collaboration, creativity, and code.
        </p>

        <div className="feature-grid">
          <div className="feature">
            <img src="/logos/workshop.png" alt="Workshops" className="feature-logo" />
            <div className="feature-title">Workshops</div>
            <div className="feature-text">Weekly deep-dives into AI, Web, and DevOps with live demos.</div>
          </div>
          <div className="feature">
            <img src="/logos/hackatons.png" alt="Hackathons" className="feature-logo" />
            <div className="feature-title">Hackathons</div>
            <div className="feature-text">Sprint, prototype, and ship projects in a friendly competition.</div>
          </div>
          <div className="feature">
            <img src="/logos/networking.png" alt="Networking" className="feature-logo" />
            <div className="feature-title">Networking</div>
            <div className="feature-text">Connect with peers, alumni, and industry mentors.</div>
          </div>
          <div className="feature">
            <img src="/logos/partnership.png" alt="Partnership" className="feature-logo" />
            <div className="feature-title">Community</div>
            <div className="feature-text">A supportive space to learn, share, and grow together.</div>
          </div>
        </div>
        
        <div className="about-cta">
          <a className="btn discover-more" href="#about">Discover More</a>
        </div>
      </div>
    </section>

    {/* Events Section */}
    <section className="events">
      <div className="events-wrap">
        <div className="events-head">
          <div>
            <h2 className="events-title">Events</h2>
            <p className="events-sub">Slide through what's next.</p>
          </div>
          <a className="btn see-more" href="#events">See more events</a>
        </div>

        <div className="events-track" ref={eventsTrackRef}>
          {events.map((ev, idx) => (
            <article key={idx} className="event-card">
              <div className="event-date">{ev.date}</div>
              <h3 className="event-title">{ev.title}</h3>
              <p className="event-desc">{ev.desc}</p>
              <div className="event-tags">
                {ev.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="projects">
      <div className="projects-wrap">
        <div className="projects-head">
          <div>
            <h2 className="projects-title">Projects</h2>
            <p className="projects-sub">Filter and explore our builds.</p>
          </div>
          <a className="btn see-more" href="#projects">Explore more projects</a>
        </div>

        <ProjectsGallery />
      </div>
    </section>

    {/* Logos Section */}
    <section className="logos-section">
      <div className="logos-wrap">
        <img src="/logo1.png" alt="Logo 1" className="logo-item" />
        <img src="/logo2.png" alt="Logo 2" className="logo-item" />
        <img src="/logo3.png" alt="Logo 3" className="logo-item" />
      </div>
    </section>
    </>
  )
}

export default Home