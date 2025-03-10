import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

import { RaspberrypiModel } from './raspberrypiModel';
import { VerteilerModel } from './VerteilerModel';
import { GestellModel } from './GestellModel';

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
            <VerteilerModel></VerteilerModel>
            <GestellModel></GestellModel>
            <RaspberrypiModel></RaspberrypiModel>
          </Canvas>
        );

}