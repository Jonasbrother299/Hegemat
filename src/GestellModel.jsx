import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three';

export function GestellModel(props) {
  const { nodes, materials } = useGLTF('../public/Gestell.glb')
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const dragging = useRef(false)
  const lastClientX = useRef(0)
  const unhoverTimeoutRef = useRef(null)

  // Smoothly interpolate the scale each frame.
  useFrame(() => {
    if (groupRef.current) {
      // Target scale: 5.2 when hovered, otherwise 5.
      const targetScale = hovered ? 5.2 : 5;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });


  // Handle hover with delayed unhover.
  const handlePointerOver = (e) => {
    e.stopPropagation();
    if (unhoverTimeoutRef.current) {
      clearTimeout(unhoverTimeoutRef.current);
      unhoverTimeoutRef.current = null;
    }
    setHovered(true);
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    unhoverTimeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 500);
    dragging.current = false;
  };

  return (
    <group {...props} dispose={null}>
      <group
        ref={groupRef}
        position={[2.437, -0.321, 2.266]}
        rotation={[0, 2.753, 0]}
        scale={0.2}  // initial scale
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {/* Actual Model Meshes */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials[' metall']}
          position={[0.537, -0.021, -0.266]}
          rotation={[0, -0.753, 0]}
          scale={[1.143, 1.164, 1.006]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials[' metall.001']}
          position={[0.537, 0.097, -0.266]}
          rotation={[0, -0.753, 0]}
          scale={[1.149, 1.164, 1.011]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Hinge_Left001.geometry}
          material={materials.Door_Hinge_Aluminum}
          position={[0.385, 0.395, -0.271]}
          rotation={[Math.PI / 2, 0, 0.753]}
          scale={0.046}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Hinge_Left002.geometry}
          material={materials.Door_Hinge_Aluminum}
          position={[0.385, 0.289, -0.271]}
          rotation={[Math.PI / 2, 0, 0.753]}
          scale={0.046}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.Material}
          position={[0.557, 0.367, -0.125]}
          rotation={[0, 0.818, 0]}
        />

        {/* Visual Box: a wireframe box to enclose the model.
             Adjust dimensions as needed so it covers the model. */}
        <mesh position={[0.8, 0.2, 0.3]}>
          <boxGeometry args={[0.6, 1, 0.5]} />
          <meshBasicMaterial
            color="white"
            transparent
            opacity={0}
          />
        </mesh>
      </group>
      {hovered && (
        <Html
          position={[0, -1.6, 0]}  // Adjust to position tooltip relative to the model
          transform
          distanceFactor={10}
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
            color: 'white',
            fontSize: '12px',
            whiteSpace: 'nowrap'
          }}
        >
    Structural Frame: <br /> Securely contains the feeding system.
        </Html>
      )}
    </group>
  );
}

useGLTF.preload('../public/Gestell.glb');
