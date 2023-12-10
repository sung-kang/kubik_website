import { Element } from 'react-scroll';
import kubikLogo from '../assets/teamPicture/sung.png';

const Media = () => {
  return (
    <Element
      name="mediaSection"
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
      <p>MEDIA SECTION</p>
    </Element>
  );
};

export default Media;
