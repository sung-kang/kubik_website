import { Element } from 'react-scroll';
import TeamMembers from './TeamMembers';

const Team = () => {
  return (
    <Element
      name="teamSection"
      style={{
        marginTop: '2000px',
        height: '75vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
      }}
    >
      {TeamMembers.map((member, idx) => {
        return (
          <div key={idx}>
            <h2>{member.name}</h2>
            <img
              src={member.picture}
              alt={member.name}
              style={{
                width: '20vh',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
            <p>
              <a href={member.linkedin} rel="noreferrer" target="_blank">
                LINKEDIN
              </a>
            </p>
            <p>
              <a href={member.github} rel="noreferrer" target="_blank">
                GUTHUB
              </a>
            </p>
          </div>
        );
      })}
    </Element>
  );
};

export default Team;
