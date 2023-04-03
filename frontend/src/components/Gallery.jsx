import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ProductBox from "./ProductBox";

import CanvasLoader from "./Loader";

function Gallery() {
  const camera = useGLTF("./fujifilmcamera.gltf");

  return (
    <>
      <ul>
        <li>
          <div className="outline">
            <Canvas
              frameloop="demand"
              shadows
              camera={{ position: [20, 3, 5], fov: 25 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <mesh>
                  <hemisphereLight intensity={0.15} groundColor="black" />
                  <pointLight intensity={1} />
                  <primitive object={camera.scene} scale={1.5} />
                </mesh>
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
        </li>
        <li>
          <img src="./favicon.ico" alt="None" />
        </li>
        <li>
          <img src="./favicon.ico" alt="None" />
        </li>
      </ul>
    </>
  );
}

export default Gallery;
