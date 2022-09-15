import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import styles from '../../styles/Intro.module.css';

export default function Model() {
  return (
    <div className={styles.model}>
      <Canvas camera={{ position: [2, 0, 3] }}>
        <ambientLight />
        <Scene />
      </Canvas>
    </div>
  );
}

function Scene() {
  const gltf = useLoader(GLTFLoader, '/model/Astronaut.gltf');
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.005;
  });

  return (
    <Suspense fallback={null}>
      <primitive
        object={gltf.scene}
        scale={2.5}
        position={[0, -1.8, 0]}
        ref={boxRef}
      />
      <OrbitControls />
    </Suspense>
  );
}
