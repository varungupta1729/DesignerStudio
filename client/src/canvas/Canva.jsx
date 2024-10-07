import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls} from "@react-three/drei";
import Shirt from "../clothes/Shirt";
import Hoodie from "../clothes/Hoodie";
import CameraRig from "./CameraRig";
import PoloTshirt from "../clothes/PoloTshirt";
import LongSleeve from "../clothes/LongSleeve";
import { useSnapshot } from "valtio";
import state from "../store";
import Backdrop from "./Backdrop";
import FullShirt from "../clothes/FullShirt";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Vest from "../clothes/Vest";
import ModernaJacket from "../clothes/ModernJacket";
import Coat from "../clothes/Coat";
import OversizedHoodie from "../clothes/OversizedHoodie";
import StandCollor from "../clothes/StandColor";
import DecalComponent from "../components/DecalComponent";

const Canva = () => {
  const clothType = useSnapshot(state);
  useEffect(()=>{
    state.type = "T-Shirt"
  },[])
  return (
    <>
    <Link to='/'><button className="absolute z-20 top-5 right-5 bg-black text-white px-4 py-2 rounded ">Go Back</button></Link>
    
    <Canvas
      shadows
      className="border w-full max-w-full transition-all ease-in h-screen "
      camera={{ position: [0, 0, 0], fov: 30}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <OrbitControls/> */}
      <CameraRig>
        <Backdrop />
        <Center>
          {clothType.type === "Hoodie" ? <Hoodie /> : ""}
          {clothType.type === "T-Shirt" ? <Shirt /> : ""}
          {clothType.type === "Polo" ? <PoloTshirt /> : ""}
          {clothType.type === "Full Sleeve" ? <LongSleeve /> : ""}
          {clothType.type === "Full Shirt" ? <FullShirt /> : ""}
          {clothType.type === "Coat" ? <Coat/>  : ""}
          {clothType.type === "Vest" ? <Vest/>  : ""}
          {clothType.type === "Modern Jacket" ? <ModernaJacket/>  : ""}
          {clothType.type === "Oversized Hoodie" ? <OversizedHoodie/>  : ""}
          {clothType.type === "Stand Collor" ? <StandCollor/>  : ""}
       
          {/* <StandCollor/> */}
              
        </Center>
      </CameraRig>
    </Canvas>
    </>
    
  );
};

export default Canva;
