import React, { useState } from "react";
import { VscListSelection } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { IoColorPaletteSharp } from "react-icons/io5";
import { SlCloudUpload } from "react-icons/sl";
import { RiRobot2Fill } from "react-icons/ri";
import { LiaTshirtSolid } from "react-icons/lia";
import FileUpload from "./FileUpload";
import ClothType from "./ClothType";
import ColorPicker from "./ColorPicker";
import AiPicker from './AiPicker'
import { useSnapshot } from "valtio";
import store from "../store/index";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Premium from "./Premium";
import Download from "./Download";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDiv, setOpenDiv] = useState(1);
  const snap = useSnapshot(store);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebarBtn = (index) => {
    setOpenDiv(index);
    setIsOpen(true);
  };
  return (
    <>
      <div className="fixed top-0 left-0 z-20 bg-black h-full flex flex-col text-3xl px-9 py-8 gap-9 text-white ">
        <div
          className=" text-white rounded-full z-50 p-2"
          onClick={toggleSidebar}
        >
          {isOpen ? <RxCross1 /> : <VscListSelection />}
        </div>
        <div
          className={
            openDiv === 1 ? "bg-white text-black p-2 rounded-full" : "p-2"
          }
          onClick={() => toggleSidebarBtn(1)}
        >
          <LiaTshirtSolid />
        </div>
        <div
          className={
            openDiv === 2 ? "bg-white text-black p-2 rounded-full" : "p-2"
          }
          onClick={() => toggleSidebarBtn(2)}
        >
          <IoColorPaletteSharp />
        </div>

        <div
          className={
            openDiv === 3 ? "bg-white text-black p-2 rounded-full" : "p-2"
          }
          onClick={() => toggleSidebarBtn(3)}
        >
          <SlCloudUpload />
        </div>
        <div
          className={
            openDiv === 4 ? "bg-white text-black p-2 rounded-full" : "p-2"
          }
          onClick={() => toggleSidebarBtn(4)}
        >
          <RiRobot2Fill />
        </div>
        <div
          className={
            openDiv === 5 ? "bg-white text-black p-2 rounded-full" : "p-2"
          }
          onClick={() => toggleSidebarBtn(5)}
        >
         <FaCloudDownloadAlt />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-28   flex-col z-10 h-screen w-72 bg-black text-white p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {openDiv === 1 &&  <ClothType /> }
        {openDiv === 2 && <ColorPicker /> }
        {openDiv === 3 && snap.type === 'T-Shirt' && <FileUpload /> }
        {openDiv === 4 && snap.type === 'T-Shirt' && <AiPicker />}
        {openDiv === 5 && <Download/>}

        {
         ( openDiv === 3 || openDiv ===4 ) && snap.type !== "T-Shirt" && <Premium/>
        }
      </div>
    </>
  );
};

export default Sidebar;
