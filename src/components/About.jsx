import React from 'react';
import { Element } from 'react-scroll';
import kubikLogo from '../assets/sung.png';

const About = () => {
  return (
    <Element
      name="aboutSection"
      style={{
        display: 'flex',
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
      <p>Kubik is something that does something.</p>
    </Element>
  );
};

export default About;
