import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei';

export function VerteilerModel(props) {
  const { nodes, materials } = useGLTF('/Verteiler.glb')
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const dragging = useRef(false)
  const unhoverTimeoutRef = useRef(null);
  
  // Smoothly interpolate the scale each frame.
  useFrame(() => {
    if (groupRef.current) {
      // Target scale is 45 when hovered, otherwise 40.
      const targetScale = hovered ? 45 : 40;
      groupRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    }
  });

  // Handle hover with delayed unhover.
  const handlePointerOver = (e) => {
    e.stopPropagation();
    // If there's an unhover timeout pending, clear it.
    if (unhoverTimeoutRef.current) {
      clearTimeout(unhoverTimeoutRef.current);
      unhoverTimeoutRef.current = null;
    }
    setHovered(true);
  }

  const handlePointerOut = (e) => {
    e.stopPropagation();
    // Delay unhovering for 1.5 seconds.
    unhoverTimeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 250);
    dragging.current = false;
  }

  return (
    <group {...props} dispose={null}>
      <group
        ref={groupRef}
        position={[-5.105, 2.231, -0.295]}
        rotation={[0, -2.253, 0]}
        scale={40}  // initial scale
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials['green metall']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials[' metall']}
        />
      </group>
      {hovered && (
        <Html
          position={[-5.0, 2.4, -1]}  // Adjust to place the tooltip as desired
          transform
          distanceFactor={10}  // Adjust based on your scene's scale
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
            color: 'white',
            fontSize: '10px',
            whiteSpace: 'nowrap'
          }}
        >
         Feed Distributor: <br />
         Dispenses food when boars are detected.
        </Html>
      )}
    </group>
  )
}

useGLTF.preload('/Verteiler.glb')