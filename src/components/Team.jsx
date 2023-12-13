import { useState } from 'react';
import { Element } from 'react-scroll';
import TeamMembers from '../utils/TeamMembers';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Team = () => {
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  const linkedInImageStyle = {
    transform: isLinkedInHovered ? 'scale(1.3)' : 'scale(1)',
    transition: 'transform 0.5s ease-in-out',
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
    <Element
      name="teamSection"
      style={{
        // height: '75vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
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
        Meet Our Team!
      </h2>

      <div
        style={{
          // height: '75vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
          marginTop: '10vh',
          marginBottom: '10vh',
        }}
      >
        {TeamMembers.map((member, idx) => {
          return (
            <div key={idx}>
              <h2
                style={{
                  color: '#fff',
                  fontSize: '2.5rem',
                  letterSpacing: '0.15rem',
                }}
              >
                {member.name}
              </h2>
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
                  justifyContent: ' space-around',
                  marginTop: '1rem',
                }}
              >
                <a href={member.linkedin} rel="noreferrer" target="_blank">
                  <img
                    className="linkedin-image"
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
        })}
      </div>
    </Element>
  );
};

export default Team;
