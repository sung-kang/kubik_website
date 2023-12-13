import { useState } from 'react';
import { Element } from 'react-scroll';
import medium from '../assets/medium.png';

const Media = () => {
  const [isMediumHovered, setIsMediumHovered] = useState(false);

  const mediumImageStyle = {
    transform: isMediumHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
    width: '20vw',
    height: 'auto',
  };

  return (
    <Element
      name="mediaSection"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20vh',
        marginBottom: '10vh',
      }}
    >
      <h2
        style={{
          fontSize: '5rem',
          letterSpacing: '0.2rem',
          color: '#fff',
          marginBottom: '5rem',
          textShadow: '6px 6px 6px rgba(100, 100, 100, 0.8)',
        }}
      >
        Read Our Article!
      </h2>
      <a href={'https://www.google.com/'} rel="noreferrer" target="_blank">
        <img
          src={medium}
          alt="Kubik Team Logo"
          style={mediumImageStyle}
          onMouseEnter={() => setIsMediumHovered(true)}
          onMouseLeave={() => setIsMediumHovered(false)}
        />
      </a>
    </Element>
  );
};

export default Media;
