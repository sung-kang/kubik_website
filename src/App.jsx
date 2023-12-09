import { useState } from 'react';
import './App.css';
import { Element } from 'react-scroll';
import About from './components/About';
import Navbar from './components/NavBar';
import Team from './components/Team';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar />
      <Element name="aboutSection">
        <About />
      </Element>
      <Element name="teamSection">
        <Team />
      </Element>
    </div>
  );
}

export default App;
