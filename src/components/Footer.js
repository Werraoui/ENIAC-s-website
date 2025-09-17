import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - ENIAC Branding */}
        <div className="footer-left">
          <div className="logo">
            <div className="logo-icon">
              <img width="100px" height="100px" src="/logo3.png" alt="logo"></img>
            </div>
            <span className="logo-text">ENIAC</span>
          </div>
          <p className="description">We code, collaborate, and create at ENSA Safi. Join us to learn by building.</p>
        </div>

        {/* Explore Section */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>About</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Contact</li>
            <li>Join</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Stay in the loop. (Demo only)</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="copyright">© 2025 ENIAC • ENSA Safi, Cadi Ayyad University</p>
        <p className="credits">Built with love by the ENIAC community.</p>
      </div>
    </footer>
  );
};

export default Footer;


