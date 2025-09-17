import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        {/* Logo + Title */}
        <div className="logo-container">
          <img width="200px" height="200px" src="/logo3.png" alt="ENIAC logo" />
          
          <h1>ENIAC</h1>
        </div>
        <nav>
            <ul className='navlist'>
                <li className="active">Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            
        </nav>
        <button className='joinus-btn'>
          <img src="/logos/join_us.png" alt="Join Us" className="join-icon" />
          Join Us
        </button>
    </div>
  )
}

export default Header
