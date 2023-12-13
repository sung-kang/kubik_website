import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particleOptions from '../utils/particleOptions';

const ParticlesComponent = () => {
  const particleInit = useCallback(async (engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particleInit} options={particleOptions} />;
};

export default ParticlesComponent;
