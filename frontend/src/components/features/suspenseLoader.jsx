import { Html, useProgress } from '@react-three/drei';

const SuspenseLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 30,
          color: 'orange',
          fontWeight: 800,

          
        }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};



export default SuspenseLoader