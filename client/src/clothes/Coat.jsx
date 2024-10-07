import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import store from '../store/index.js'
function Coat(props) {
  const { nodes, materials } = useGLTF('/jacket.glb')
 const snap = useSnapshot(store);
  // Set color changes directly in the materials
  materials.jacket.color.set(snap.color)  // Change jacket color to red
//   materials.collar.color.set('#000')  // Change collar color to blue
//   materials.wallet.color.set('#00ff00')  // Change wallet color to green
//   materials.buttons.color.set('#ffff00') // Change buttons color to yellow

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_5.geometry}
          material={materials.jacket}
          skeleton={nodes.Object_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_6.geometry}
          material={materials.collar}
          skeleton={nodes.Object_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.wallet}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.buttons}
          skeleton={nodes.Object_8.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/jacket.glb')

export default Coat;
