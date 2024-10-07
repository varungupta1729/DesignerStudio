import { Canvas } from "@react-three/fiber";
import CameraRig from "../canvas/CameraRig";
import HomeTshirt from "../clothes/HomeTshirt";
import { Center, Environment } from "@react-three/drei";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import state from "../store";

const Home = () => {

    // Generate a random light color
    const randomColor = () => {
      // Light colors have higher RGB values (closer to white)
      const r = Math.floor(Math.random() * 128) + 128; // Red between 128-255
      const g = Math.floor(Math.random() * 128) + 128; // Green between 128-255
      const b = Math.floor(Math.random() * 128) + 128; // Blue between 128-255
      state.color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
  
   

  console.log(state.color)
  useEffect(()=>{
    state.type = "Home Tshirt"
    randomColor();
    
  },[])
  return (
    <>
    <div className="absolute top-0 left-0 w-full  flex flex-col justify-start items-center bg-grey z-10 gap-6 overflow-y-hidden ">
     <h1  className="text-5xl sm:text-8xl home-header font-semibold mt-14">Designer <span className="italic font-thin">Studio</span></h1>
     <p className="italic text-xl sm:text-2xl">Create. Wear. Inspire.</p>
     <Link to='/customizer'>  <button className="bg-black text-white py-2 px-5 rounded">Start Creating</button></Link>
   
    </div>
     <Canvas
      shadows
      className="border w-full max-w-full transition-all ease-in h-screen "
      camera={{ position: [0, 0, 0], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/* <OrbitControls/> */}
      <CameraRig>
        <Center>
          <HomeTshirt />
        </Center>
      </CameraRig>
    </Canvas>
    </>
   
  );
};

export default Home;
