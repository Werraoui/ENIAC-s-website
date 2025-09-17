import './Home.css';
import { useEffect, useState } from 'react';

const WORDS = ["Code.", "Future.", "Innovation."]; 

const Home = () => {
  const typingSpeedMs = 100; 
  const deletingSpeedMs = 60; 
  const pauseAtEndMs = 900; 

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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