import { Element } from 'react-scroll';
import TeamMember from './TeamMember';
import TeamMembers from '../utils/TeamMembers';

const Team = () => {
  return (
    <Element
      name="teamSection"
      style={{
        display: 'flex',
        flexDirection: 'column',
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
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
          marginTop: '10vh',
          marginBottom: '10vh',
        }}
      >
        {TeamMembers.map((member, idx) => (
          <TeamMember key={idx} member={member} />
        ))}
      </div>
    </Element>
  );
};

export default Team;
