import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import store from '../store/index.js'
import { useSnapshot } from 'valtio';
function LongSleeve(props) {
  const { nodes, materials } = useGLTF('/long_sleeve_t-_shirt.glb');
  const snap = useSnapshot(store);
  // Set custom colors
  materials.Bahan_Dasar_FRONT_2657.color.set(snap.color); // Red color
  materials.Material2868.color.set(snap.color); // Green color

  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Bahan_Dasar_FRONT_2657_0'].geometry}
            material={materials.Bahan_Dasar_FRONT_2657}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Bahan_Dasar_FRONT_2657_0_1'].geometry}
            material={materials.Bahan_Dasar_FRONT_2657}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_1'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_2'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_3'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_4'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_5'].geometry}
            material={materials.Material2868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Long_Sleeve_T-Shirt_Material2868_0_6'].geometry}
            material={materials.Material2868}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/long_sleeve_t-_shirt.glb');
export default LongSleeve;
