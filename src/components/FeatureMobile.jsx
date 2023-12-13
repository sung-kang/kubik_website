import featureList from '../utils/featureList';

const FeatureMobile = () => {
  return (
    <>
      {featureList.map((feature, idx) => (
        <div
          key={idx}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80vw',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'block',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignContent: 'center',
              textAlign: 'center',
              width: '100%',
              height: '50%',
              color: '#fff',
            }}
          >
            <h2
              style={{
                fontSize: '3rem',
                letterSpacing: '0.2rem',
                marginTop: '4rem',
                marginBottom: '2rem',
              }}
            >
              {feature.name}
            </h2>
            <img
              src={feature.picture}
              alt={feature.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '5%',
                marginBottom: '4rem',
              }}
            />
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureMobile;
