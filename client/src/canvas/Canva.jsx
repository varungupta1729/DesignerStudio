import { Canvas } from "@react-three/fiber";
import { Environment, Center, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { Link } from "react-router-dom";
import React from "react";

// Models (Eager-loaded)
import Shirt from "../clothes/Shirt";
import Hoodie from "../clothes/Hoodie";
import PoloTshirt from "../clothes/PoloTshirt";
import LongSleeve from "../clothes/LongSleeve";
import FullShirt from "../clothes/FullShirt";
import Coat from "../clothes/Coat";
import Vest from "../clothes/Vest";
import ModernaJacket from "../clothes/ModernJacket";
import OversizedHoodie from "../clothes/OversizedHoodie";
import StandCollor from "../clothes/StandColor";

import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import state from "../store";

// Circular Loader Component
const CircularLoader = () => {
  const { progress } = useProgress(); // Get the loading progress percentage
  return (
    <div className="loader">
      <div className="loader-circle"></div>
      <div className="loader-text">3D Model Loading...</div>
    </div>
  );
};

const Canva = () => {
  const clothType = useSnapshot(state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    state.type = "T-Shirt"; // default model type
  }, []);

  return (
    <>
      <Link to="/">
        <button className="absolute z-20 top-5 right-5 bg-black text-white px-4 py-2 rounded">
          Go Back
        </button>
      </Link>

      {/* Display circular loader until 3D models are fully loaded */}
      {isLoading && <CircularLoader />}

      <Canvas
        shadows
        className="border w-full max-w-full transition-all ease-in h-screen"
        camera={{ position: [0, 0, 0], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={() => {
          setIsLoading(false); // Callback to stop the loader after canvas creation
        }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            {clothType.type === "Hoodie" && <Hoodie />}
            {clothType.type === "T-Shirt" && <Shirt />}
            {clothType.type === "Polo" && <PoloTshirt />}
            {clothType.type === "Full Sleeve" && <LongSleeve />}
            {clothType.type === "Full Shirt" && <FullShirt />}
            {clothType.type === "Coat" && <Coat />}
            {clothType.type === "Vest" && <Vest />}
            {clothType.type === "Modern Jacket" && <ModernaJacket />}
            {clothType.type === "Oversized Hoodie" && <OversizedHoodie />}
            {clothType.type === "Stand Collor" && <StandCollor />}
          </Center>
        </CameraRig>
      </Canvas>
    </>
  );
};

export default Canva;
