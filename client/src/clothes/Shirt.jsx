import {easing} from 'maath';
import {useSnapshot} from 'valtio';
import {useFrame} from '@react-three/fiber';
import { Decal , useGLTF , useTexture } from '@react-three/drei';
import DecalComponent from '../components/DecalComponent.jsx';
import store from '../store/index.js'

const Shirt = () => {

    const {nodes , materials } = useGLTF('/shirt_baked.glb');
    const snap = useSnapshot(store);

    useFrame((state , delta ) => easing.dampC(materials.lambert1.color , snap.color , 0.25 , delta)  )
    
  return (
   
        <group>
            <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness = {1}
            dispose={null}
            >
           <DecalComponent/>
            </mesh>
        </group>
    
  )
}

export default Shirt
