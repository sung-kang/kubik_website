import { Element } from 'react-scroll';
import featureList from '../utils/featureList';

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
                width: '20vh',
                height: 'auto',
                borderRadius: '50%',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: '75%',
              }}
            >
              <h2>{feature.name}</h2>
              <p>{feature.description}</p>
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
                textAlign: 'center',
                width: '75%',
              }}
            >
              <h2>{feature.name}</h2>
              <p>{feature.description}</p>
            </div>

            <img
              src={feature.picture}
              alt={feature.name}
              style={{
                width: '20vh',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        );
      })}
    </Element>
  );
};

export default Feature;
