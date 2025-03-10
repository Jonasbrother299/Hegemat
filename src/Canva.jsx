import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import { Preload, useGLTF} from '@react-three/drei';
import { RaspberrypiModel } from './raspberrypiModel';
import { VerteilerModel } from './VerteilerModel';
import { GestellModel } from './GestellModel';

// Preload your models
useGLTF.preload('/VERTEILER.glb');
useGLTF.preload('/Gestell.glb');
useGLTF.preload('/raspberrypi.glb');
export default function Canva() {

        return (
          <Canvas shadows camera={{
            position: [0, 2, 10],
            fov: 45,           
            near: 0.1,        
            far: 1000,          
          }}
          style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} />
            <directionalLight
              castShadow
                intensity={1}
                position={[10, 10, 5]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
          <Environment preset="sunset"  />
          <Suspense fallback={null /* or a loading component */}>
            <VerteilerModel></VerteilerModel>
            <GestellModel></GestellModel>
            <RaspberrypiModel></RaspberrypiModel>
            </Suspense>
            <Preload all />
          </Canvas>
        );

}