import { Element } from 'react-scroll';
import featureList from '../utils/featureList';
import FeatureMobile from './FeatureMobile';

const Feature = () => {
  return window.innerWidth < 768 ? (
    <FeatureMobile />
  ) : (
    <Element
      name="featureSection"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20vh',
        marginBottom: '10vh',
      }}
    >
      <h2
        style={{
          fontSize: '5rem',
          letterSpacing: '0.2rem',
          color: '#F8D49B',
          marginBottom: '5rem',
          textShadow: '6px 6px 6px rgba(100, 100, 100, 0.8)',
          textAlign: 'center',
        }}
      >
        Features
      </h2>
      {featureList.map((feature, idx) => {
        return idx % 2 ? (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80vw',
              marginTop: '10rem',
            }}
          >
            <img
              src={feature.picture}
              alt={feature.name}
              style={{
                width: '50%',
                height: 'auto',
                borderRadius: '5%',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                textAlign: 'center',
                width: '40%',
                height: '50%',
                color: '#fff',
              }}
            >
              <h2
                style={{
                  fontSize: '3rem',
                  letterSpacing: '0.2rem',
                  marginBottom: '2rem',
                }}
              >
                {feature.name}
              </h2>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80vw',
              marginTop: '10rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                textAlign: 'center',
                width: '40%',
                height: '50%',
                color: '#fff',
              }}
            >
              <h2
                style={{
                  fontSize: '3rem',
                  letterSpacing: '0.2rem',
                  marginBottom: '2rem',
                }}
              >
                {feature.name}
              </h2>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>

            <img
              src={feature.picture}
              alt={feature.name}
              style={{
                width: '50%',
                height: 'auto',
                borderRadius: '5%',
              }}
            />
          </div>
        );
      })}
    </Element>
  );
};

export default Feature;
