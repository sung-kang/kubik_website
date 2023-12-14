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
        height: '80vh',
        color: '#F8D49B',
        fontSize: '2rem',
        textAlign: 'center',
      }}
    >
      <img
        src={kubikLogo}
        alt="kubik Team Logo"
        style={{
          width: window.innerWidth < 768 ? '100%' : '50%',
          height: 'auto',
        }}
      />
      <h1>kubik v1.0.0 </h1>
      <p style={{ color: '#fff' }}>
        Monitor and Visualize Your Kubernetes Clusters
      </p>
    </Element>
  );
};

export default About;
