import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

function Model({ modelUrl }) {
  const pathModels = "../models/";
  const camera = useGLTF(pathModels + modelUrl);

  return (
    <div className="h-screen outline">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 3, 4], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: "#f3f3f3" }}
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
  );
}

function Gallery({ imageUrls, modelUrl }) {
  const pathImages = "../images/";

  return (
    <>
      <div className="w-full grow">
        <ul>
          {modelUrl && (
            <li>
              <Model modelUrl={modelUrl} />
            </li>
          )}
          {imageUrls.map((imageUrl, index) => (
            <li key={index}>
              <img
                src={pathImages + imageUrl}
                alt="None"
                className="my-5 w-full outline"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Gallery;
