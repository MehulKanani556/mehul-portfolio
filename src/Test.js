import './App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import circleImg from './assets/circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';
extend({OrbitControls})

function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate={false}
      autoRotateSpeed={0.1}
      enableRotate={false} // Already set to disable rotation
      enableZoom={false} // Disable zooming
      enablePan={false} // Disable panning
    />
  );
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 100;
  let f = 0.0003; // Increased frequency for more waves
  let a = 5; // Increased amplitude for more pronounced waves
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 - z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 100
  const sep = 2
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 20 //speed
    
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.4}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      // Adjust the camera's initial position here
        camera={{ position: [50, 10, 0], fov: 75 }} // Example: Change to [0, 100, 0] for top-down view
        // camera={{ position: [-50, 10, 0], fov: 75 }} // Changed from [50, 10, 0] to [-50, 10, 0]
      //  camera={{ position: [0, 50, 100], fov: 75 }} // Example: Change to [0, 100, 0] for top-down view
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls/>
    </Canvas>
  );
}


function App() {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
