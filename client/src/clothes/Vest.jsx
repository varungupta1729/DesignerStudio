import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import store from '../store/index.js'

function Vest(props) {
  const { nodes, materials } = useGLTF('/vest.glb')
  const snap = useSnapshot(store);

  // Set color changes directly in the materials
  materials.vest.color.set(snap.color)    // Change vest color to green
//   materials.buttons.color.set('#ff0000') // Change buttons color to red

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_5.geometry}
          material={materials.vest}
          skeleton={nodes.Object_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_6.geometry}
          material={materials.buttons}
          skeleton={nodes.Object_6.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/vest.glb')

export default Vest;
