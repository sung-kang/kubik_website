import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import particleOptions from '../utils/particleOptions';

const ParticlesComponent = () => {
  // const options = useMemo(() => {
  //   return {};
  // }, []);

  const particleInit = useCallback(async (engine) => {
    loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // });

  return <Particles init={particleInit} options={particleOptions} />;
};

export default ParticlesComponent;
