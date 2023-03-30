import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import ProductBox from "./ProductBox";

import CanvasLoader from "./Loader";

function Gallery() {
  const camera = useGLTF("./fujifilmcamera.gltf");

  return (
    <>
      <div className="flex items-center justify-center">
        <ProductBox />
      </div>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls />
          <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <primitive object={camera.nodes} scale={1.5} />
          </mesh>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
}

export default Gallery;
