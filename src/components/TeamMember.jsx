import { useState } from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const TeamMember = ({ member }) => {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  const linkedInImageStyle = {
    transform: isLinkedInHovered ? 'scale(1.3)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    width: '50px',
    height: 'auto',
  };

  const gitHubImageStyle = {
    transform: isGitHubHovered ? 'scale(1.3)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    width: '50px',
    height: 'auto',
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3
        style={{ color: '#fff', fontSize: '2.5rem', letterSpacing: '0.15rem' }}
      >
        {member.name}
      </h3>
      <img
        src={member.picture}
        alt={member.name}
        style={{
          width: '20vh',
          height: 'auto',
          borderRadius: '50%',
          marginTop: '1rem',
          transition: 'width 0.3s',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '1rem',
        }}
      >
        <a href={member.linkedin} rel="noreferrer" target="_blank">
          <img
            src={linkedin}
            alt="LinkedIn"
            style={linkedInImageStyle}
            onMouseEnter={() => setIsLinkedInHovered(true)}
            onMouseLeave={() => setIsLinkedInHovered(false)}
          />
        </a>
        <a href={member.github} rel="noreferrer" target="_blank">
          <img
            src={github}
            alt="GitHub"
            style={gitHubImageStyle}
            onMouseEnter={() => setIsGitHubHovered(true)}
            onMouseLeave={() => setIsGitHubHovered(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
