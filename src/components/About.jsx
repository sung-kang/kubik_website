import { Element } from 'react-scroll';
import kubikLogo from '../assets/kubikLogo.png';

const About = () => {
  return (
    <Element
      name="aboutSection"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff',
        fontSize: '2rem',
      }}
    >
      <img
        src={kubikLogo}
        alt="Kubik Team Logo"
        style={{ width: '75vh', height: 'auto' }}
      />
      <h1>Kubik v1.0.0 </h1>
      <p>Kubik is something that does something.</p>
    </Element>
  );
};

export default About;
