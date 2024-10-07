import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import DecalComponent from '../components/DecalComponent.jsx';
import { useSnapshot } from 'valtio';
import store from '../store/index.js'
function PoloTshirt(props) {
  const { nodes, materials } = useGLTF('/short_sleeve_polo.glb');
  console.log(nodes)
 const snap = useSnapshot(store);
 
  // Set custom colors
  materials.Cotton_Heavy_Canvas_FRONT_232020.color.set(snap.color); // Example color for Cotton material
  materials.Material2279.color.set('#000'); // Example color for another material
  materials.PT_FABRIC_FRONT_232057.color.set(snap.color); // Example color for the fabric material

  return (
    <group {...props} dispose={null}>
      <group scale={0.001}>
        <group scale={10}>
          <mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Short_Sleeve_Polo_Cotton_Heavy_Canvas_FRONT_232020_0.geometry}
            material={materials.Cotton_Heavy_Canvas_FRONT_232020}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Short_Sleeve_Polo_Cotton_Heavy_Canvas_FRONT_232020_0_1.geometry}
            material={materials.Cotton_Heavy_Canvas_FRONT_232020}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Short_Sleeve_Polo_Material2279_0.geometry}
            material={materials.Material2279}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Short_Sleeve_Polo_PT_FABRIC_FRONT_232057_0.geometry}
            material={materials.PT_FABRIC_FRONT_232057}
          />
              
          </mesh>
          {/* <DecalComponent/> */}
        </group>
        
      </group>
 
    </group>
  );
}

useGLTF.preload('/short_sleeve_polo.glb');
export default PoloTshirt;
