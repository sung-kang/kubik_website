import { Element } from 'react-scroll';
import kubikLogo from '../assets/sung.png';

const Feature = () => {
  return (
    <Element
      name="featureSection"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>This is like working kinda</h1>
      <p>WE HAVE GOOGLE OAUTH 2.0</p>
      <img
        src={kubikLogo}
        alt="Kubik Team Logo"
        style={{ width: '300px', height: 'auto' }}
      />
    </Element>
  );
};

export default Feature;
