import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from './../components/HackerRoom';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';

const Hero = () => {

const isSmallScreen = useMediaQuery({ query: '(max-width: 440px)' });
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
const sizes = calculateSizes(isSmallScreen, isMobile, isTablet);
  return (
    <section className="min-h-screen flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Aymane <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Web Full Stack Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.ReactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringsPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
