import React from "react";
import { useGLTF } from "@react-three/drei";
import store from '../store/index.js'
import { useSnapshot } from "valtio";
function Hoodie(props) {
  const { nodes, materials } = useGLTF("/hoodie.glb");
  const snap = useSnapshot(store);

  // Set custom colors
  materials.Fabric374733_SIDE_76578.color.set(snap.color); // Example: Set side fabric color
  materials.Fabric374733_FRONT_76578.color.set(snap.color); // Example: Set front fabric color
  materials.Force_Fleece_FRONT_134561.color.set(snap.color); // Example: Set fleece material color
  materials["2x2_Rib_FRONT_134483"].color.set(snap.color); // Example: Set ribbed material color

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.846}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Fabric374733_SIDE_76578}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Fabric374733_SIDE_76578_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Fabric374733_FRONT_76578}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Force_Fleece_FRONT_134561}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["2x2_Rib_FRONT_134483"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Fabric374733_FRONT_76578_0}
          />
          <group
            position={[0, 1.518, 0.079]}
            rotation={[-0.146, -0.061, 0.049]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Material94283}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Material94281}
              position={[0, 0.001, 0.003]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.Material94285}
            position={[-0.018, 1.591, 0.082]}
            rotation={[0.065, -0.271, 0.256]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.Material94285}
            position={[0.016, 1.592, 0.084]}
            rotation={[0.085, 0.264, -0.229]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.Material94287}
            position={[0.008, 0.967, 0.188]}
            rotation={[0.044, -0.223, 0.026]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Material94287}
            position={[0.008, 0.967, 0.188]}
            rotation={[0.046, -0.127, -0.076]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hoodie.glb");

export default Hoodie;
