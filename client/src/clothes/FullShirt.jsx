import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import * as THREE from 'three'; // Import THREE to handle color changes

import store from '../store/index.js';

function FullShirt(props) {
  const { nodes, materials } = useGLTF('/mens_shirt.glb');
  const snap = useSnapshot(store);
  // Modify material colors
  

    if (materials) {
      materials.Cotton_50s_Poplin_FRONT_39668.color.set(snap.color); // Set to red
      materials.Material665021.color.set('#000'); // Set to green
      materials.Material647667.color.set('#000'); // Set to blue
      materials.Material643570.color.set('#000'); // Set to yellow
      materials.Material655120.color.set('#000')// Set to magenta
    }
  

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Cotton_50s_Poplin_FRONT_39668_0'].geometry}
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Cotton_50s_Poplin_FRONT_39668_0_1'].geometry}
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Cotton_50s_Poplin_FRONT_39668_0_2'].geometry}
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Cotton_50s_Poplin_FRONT_39668_0_3'].geometry}
          material={materials.Cotton_50s_Poplin_FRONT_39668}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Material665021_0'].geometry}
          material={materials.Material665021}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Material647667_0'].geometry}
          material={materials.Material647667}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Material643570_0'].geometry}
          material={materials.Material643570}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['men-shirt_Material655120_0'].geometry}
          material={materials.Material655120}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/mens_shirt.glb');
export default FullShirt;
