import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color } from 'three'
import { useSnapshot } from 'valtio'
import store from '../store/index.js'
function ModernaJacket(props) {
  const { nodes, materials } = useGLTF('/tommy_hilfiger_jacket.glb')
 const snap = useSnapshot(store);
  // Change the color of the jacket
  if (materials.Jacket) {
    materials.Jacket.color = new Color(snap.color) // Set the color to red (replace with your desired color)
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Jacket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Jacket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Jacket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Jacket}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tommy_hilfiger_jacket.glb')

export default ModernaJacket
