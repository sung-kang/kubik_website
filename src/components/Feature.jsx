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
      <img
        src={kubikLogo}
        alt="Kubik Team Logo"
        style={{ width: '300px', height: 'auto' }}
      />
      <h1>Kubik v1.0.0 </h1>
      <p>FEATURE SECTION</p>
    </Element>
  );
};

export default Feature;
