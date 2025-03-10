import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three';

export function RaspberrypiModel(props) {
  const { nodes, materials } = useGLTF('../public/raspberrypi.glb')
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const unhoverTimeoutRef = useRef(null)

  // Define the original scale vector (as given by your model's initial scale)
  const initialScale = new THREE.Vector3(1, 0.433, 1);

  // In the animation loop, smoothly interpolate to the target scale.
  useFrame(() => {
    if (groupRef.current) {
      // When hovered, scale up by 20% (factor 1.2), otherwise use original (factor 1).
      const factor = hovered ? 0.4 : 0.3;
      const targetScale = initialScale.clone().multiplyScalar(factor);
      groupRef.current.scale.lerp(targetScale, 0.1);
    }
  });

  // Show tooltip and scale immediately on hover, and delay unhover by 1.5 seconds.
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
  };

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <group
        ref={groupRef}
        scale={[1, 0.433, 1]} 
        position={[2.405, 0.231, 3.295]}
        rotation={[0, 0, 3.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.metal_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_1.geometry}
          material={materials.main_circuit_board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_2.geometry}
          material={materials.Metallic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_3.geometry}
          material={materials.Plastic_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_4.geometry}
          material={materials.ethernet_side_panel_decal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_5.geometry}
          material={materials.led_yellow_off}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_6.geometry}
          material={materials.led_lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_7.geometry}
          material={materials['led_green_off.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_8.geometry}
          material={materials['copper_metal_not_so_shiny.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_9.geometry}
          material={materials.capacitor_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_10.geometry}
          material={materials.capacitor_center}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_11.geometry}
          material={materials.top_nonbroadcom_chip}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_12.geometry}
          material={materials.broadcom_chip}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_13.geometry}
          material={materials.white_plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_14.geometry}
          material={materials.bottom_chip}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_15.geometry}
          material={materials.Solder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_16.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_17.geometry}
          material={materials.metal_shiny_enhanced}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_18.geometry}
          material={materials.Grey_text_on_chips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_19.geometry}
          material={materials.plastic_gloss_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_20.geometry}
          material={materials.black_chip_procedural}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_21.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_22.geometry}
          material={materials.component_FB_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_23.geometry}
          material={materials.component_FB_center}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_24.geometry}
          material={materials.resistor_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_25.geometry}
          material={materials['resistor_center.']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_26.geometry}
          material={materials.super_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_27.geometry}
          material={materials.gold_effect}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8_28.geometry}
          material={materials.led_component}
        />
      </group>
      {hovered && (
        <Html
          position={[3, 2, 0]} // Adjust the position for the tooltip as needed
          transform
          distanceFactor={10}
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '5px 10px',
            borderRadius: '5px',
            color: 'white',
            fontSize: '10px',
            whiteSpace: 'nowrap'
          }}
        >
          Raspberry Pi:<br />  Detects motion and triggers automated feeding.
        </Html>
      )}
    </group>
  );
}

useGLTF.preload('../public/raspberrypi.glb');
