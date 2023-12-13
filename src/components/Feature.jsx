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
      {featureList.map((feature, idx) => {
        return idx % 2 ? (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80vw',
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
