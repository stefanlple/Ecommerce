import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

function Gallery() {
  const camera = useGLTF("./fujifilmcamera.gltf");

  return (
    <>
      <ul>
        <li>
          <div className="outline h-screen">
            <Canvas
              frameloop="demand"
              shadows
              camera={{ position: [0, 3, 4], fov: 50 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <axesHelper args={[5]} />
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <mesh>
                  <hemisphereLight intensity={0.15} groundColor="black" />
                  <pointLight intensity={1} />
                  <primitive object={camera.scene} scale={1} />
                </mesh>
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        </li>
        <li>
          <img src="./red.jpeg" alt="None" className="w-full my-5 outline" />
        </li>
        <li>
          <img src="./red.jpeg" alt="None" className="w-full my-5 outline" />
        </li>
      </ul>
    </>
  );
}

export default Gallery;
