import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef, useState, useEffect } from 'react';
extend({ OrbitControls })

function CameraControls() {
  const {
    camera,
    gl: { domElement }
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
  const tRef = useRef(0);
  const hueRef = useRef(0); // Added hueRef to track hue value

  // State to hold the current random color
  const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * 16777215).toString(16));

  // Change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Generate a random color
  const randomColorState = Math.floor(Math.random() * 16777215).toString(16);

  let f = 0.0003; // Increased frequency for more waves
  let a = 5; // Increased amplitude for more pronounced waves
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 - z ** 2 + tRef.current)) * a;
  }, [tRef, f, a])

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
    tRef.current += 20;
    hueRef.current = (hueRef.current + 0.001) % 1; // Update hue value for color change

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z); // Update y position for wave
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true; // Notify Three.js to update the buffer
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
        // color={new THREE.Color().setHSL(hueRef.current, 1, 0.5)} // Updated to use HSL color
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
      camera={{ position: [50, 15, 0], fov: 80 }} // Example: Change to [0, 100, 0] for top-down view
    // camera={{ position: [-50, 10, 0], fov: 75 }} // Changed from [50, 10, 0] to [-50, 10, 0]
    //  camera={{ position: [0, 50, 100], fov: 75 }} // Example: Change to [0, 100, 0] for top-down view
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}


function Background() {
  return (
    <div className="live-background">

      <div className="anim">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div>
    </div>
  );
}

export default Background;
