import { Link } from 'react-scroll';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '2rem',
        backgroundColor: '#2596be',
        color: '#fff',
      }}
    >
      {/* DELETE aboutSection or use it as "back to top button" */}
      <Link
        className="navLink"
        to="aboutSection"
        smooth
        duration={500}
        style={{ marginLeft: '20px' }}
      >
        HOME
      </Link>
      <Link
        className="navLink"
        to="featureSection"
        smooth
        duration={500}
        style={{ marginLeft: '20px' }}
      >
        FEATURES
      </Link>
      <Link
        className="navLink"
        to="mediaSection"
        smooth
        duration={500}
        style={{ marginLeft: '20px' }}
      >
        MEDIA
      </Link>
      <Link
        className="navLink"
        to="teamSection"
        smooth
        duration={500}
        style={{ marginLeft: '20px' }}
      >
        TEAM
      </Link>
      <a
        className="navLink"
        href="https://github.com/oslabs-beta/kubik"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: '20px', color: '#fff', textDecoration: 'none' }}
      >
        GITHUB
      </a>
    </nav>
  );
};

export default Navbar;
