import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Color } from 'three'
import { useSnapshot } from 'valtio'
import store from '../store/index.js'
 function OversizedHoodie() {
  const { nodes, materials } = useGLTF('/oversized_sweater.glb')
 const snap = useSnapshot(store)
  // Optionally change color of specific materials
  if (materials['FABRIC_1_FRONT_3915.003']) {
    materials['FABRIC_1_FRONT_3915.003'].color = new Color(snap.color) // Set to red (can be customized)
    materials['FABRIC_1_FRONT_3915.001'].color = new Color(snap.color) // Set to red (can be customized)
    materials['FABRIC_1_FRONT_3915.010'].color = new Color(snap.color) // Set to red (can be customized)
  }

  return (
    <group  dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['FABRIC_1_FRONT_3915.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['FABRIC_1_FRONT_3915.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['FABRIC_1_FRONT_3915.010']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/oversized_sweater.glb')

export default OversizedHoodie;
