import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/NavBar';
import About from './components/About';
import Feature from './components/Feature';
import Media from './components/Media';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="aboutSection">
        <About />
      </Element>
      <Element name="featureSection">
        <Feature />
      </Element>
      <Element name="mediaSection">
        <Media />
      </Element>
      <Element name="teamSection">
        <Team />
      </Element>
    </div>
  );
}

export default App;
