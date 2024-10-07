import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Color } from 'three';
import { useSnapshot } from 'valtio';
import store from '../store/index.js'

export function StandCollor(props) {
  const { nodes, materials } = useGLTF('/uploads_files_3704025_High+Neck+T-shirt.glb');
 const snap =  useSnapshot(store);

  // Update the material color dynamically
  materials['FABRIC 1_FRONT_2458'].color = new Color(snap.color);
 
  return (
    <>
      {/* Color input to change the material color */}
   
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_1.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_2.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_3.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_4.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_5.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_6.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_7.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_8.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_9.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_10.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_11.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_12.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_13.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_14.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_15.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_16.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_17.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_18.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_19.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_20.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_21.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_22.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_23.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_24.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_25.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_26.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_27.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_28.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_29.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_30.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_31.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_32.geometry}
          material={materials['FABRIC 1_FRONT_2458']}
        />
        <group
          position={[0.003, 1.539, 0.062]}
          rotation={[1.141, -0.012, -0.009]}
          scale={[0.5, 1, 0.5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh.geometry}
            material={materials.Material2283}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh_1.geometry}
            material={materials.Material2283}
          />
        </group>
        <group
          position={[0.004, 1.562, 0.05]}
          rotation={[1.055, -0.406, -0.012]}
          scale={[0.5, 1, 0.5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh_2.geometry}
            material={materials.Material2283}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh_3.geometry}
            material={materials.Material2283}
          />
        </group>
        <group
          position={[0.004, 1.599, 0.048]}
          rotation={[1.813, -0.026, -0.05]}
          scale={[0.5, 1, 0.5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh_4.geometry}
            material={materials.Material2283}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes._mesh_5.geometry}
            material={materials.Material2283}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_5639_mesh.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_5639_mesh_1.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6002_mesh.geometry}
          material={materials.Material2838}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6002_mesh_1.geometry}
          material={materials.Material2838}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6152_mesh.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6152_mesh_1.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6297_mesh.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6297_mesh_1.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6363_mesh.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6363_mesh_1.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6415_mesh.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6415_mesh_1.geometry}
          material={materials.Material2713}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6778_mesh.geometry}
          material={materials.Material2838}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BindedTrim_6778_mesh_1.geometry}
          material={materials.Material2838}
        />
      </group>
    </>
  );
}

useGLTF.preload('/uploads_files_3704025_High+Neck+T-shirt.glb');

export default StandCollor;
