import React from "react";
import { PiHoodieThin } from "react-icons/pi";
import { PiTShirtThin } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";
import { useSnapshot } from "valtio";
import { PiShirtFolded } from "react-icons/pi";
import state from "../store";

const ClothType = () => {
    const clothType = useSnapshot(state);
  const items = [
    {
      logo: <PiHoodieThin />,
      index: 1,
      type: "Hoodie",
    },
    {
      logo: <PiTShirtThin />,
      index: 2,
      type: "T-Shirt",
    },
    {
      logo: <LiaTshirtSolid />,
      index: 3,
      type: "Polo",
    },
    {
        logo: <LiaTshirtSolid />,
        index: 4,
        type: "Full Sleeve",
      },
      {
        logo: <PiShirtFolded />,
        index: 5,
        type: "Full Shirt",
      },
      {
        logo: <PiShirtFolded />,
        index: 6,
        type: "Coat",
      },
      {
        logo: <PiShirtFolded />,
        index: 7,
        type: "Vest",
      },
      {
        logo: <PiShirtFolded />,
        index: 8,
        type: "Modern Jacket",
      },
      {
        logo: <PiShirtFolded />,
        index: 9,
        type: "Oversized Hoodie",
      },
      {
        logo: <PiShirtFolded />,
        index: 10,
        type: "Stand Collor",
      },
   
  ];

  return (
    <>
        <h1 className='text-lg font-bold my-5 '>Choose Cloth</h1>
     <div className="flex flex-wrap gap-6 ">
      {items.map((cloth) => (
        <div
          key={cloth.index}
          onClick={()=>state.type = cloth.type}
          className="border border-white p-4 text-3xl rounded flex flex-col justify-center items-center w-[40%] hover:bg-white hover:text-black text-center"
        >
          <div>
            {cloth.logo}
          </div>
          <span className="text-sm">{cloth.type}</span>
        </div>
      ))}
    </div>
    </>
   
  );
};

export default ClothType;
