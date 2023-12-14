import { Link } from 'react-scroll';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        // display: 'flex',
        display: window.innerWidth < 768 ? 'none' : 'flex',
        justifyContent: 'flex-end',
        padding: '1.5rem',
        backgroundColor: '#4A5D77',
        color: '#fff',
        zIndex: 1,
      }}
    >
      <Link
        className="navLink"
        to="aboutSection"
        smooth
        duration={500}
        offset={-100}
        style={{ marginLeft: '2rem' }}
      >
        HOME
      </Link>
      <Link
        className="navLink"
        to="featureSection"
        smooth
        duration={500}
        offset={-150}
        style={{ marginLeft: '2rem' }}
      >
        FEATURES
      </Link>
      <Link
        className="navLink"
        to="mediaSection"
        smooth
        duration={500}
        offset={-350}
        style={{ marginLeft: '2rem' }}
      >
        MEDIA
      </Link>
      <Link
        className="navLink"
        to="teamSection"
        smooth
        duration={500}
        style={{ marginLeft: '2rem' }}
      >
        TEAM
      </Link>
      <a
        className="navLink"
        href="https://github.com/oslabs-beta/kubik"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginLeft: '2rem',
          marginRight: '2rem',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        GITHUB
      </a>
    </nav>
  );
};

export default Navbar;
