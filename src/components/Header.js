import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <img src='' alt='ENIAC-logo'></img>
        <h1>ENIAC's website</h1>
        <nav>
            <ul className='navlist'>
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Contact</li>

            </ul>
            
        </nav>
        <button className='joinus-btn'>Join Us</button>
    </div>
  )
}

export default Header
