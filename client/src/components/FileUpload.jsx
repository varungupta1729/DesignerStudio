import React, { useState } from "react";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { DecalTypes } from "../config/constants";
import state from "../store";
const FileUpload = () => {
  const [file, setFile] = useState("");
  const [isChecked1, setIsChecked1] = useState(state.isLogoTexture);
  const [isChecked2, setIsChecked2] = useState(state.isFullTexture);

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    // if(!activeFilterTab[decalType.filterTab]) {
    //   handleActiveFilterTab(decalType.filterTab)
    // }
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      // setActiveEditorTab("");
    });
  };
  const handleChangeLogoTexture = () => {
    setIsChecked1(!isChecked1);
    state.isLogoTexture = !isChecked1;
  };

  const handleChangeFullTexture = () => {
    setIsChecked2(!isChecked2);
    state.isFullTexture = !isChecked2;
  };

  return (
    <div>
      <h1 className="text-lg font-bold my-5 ">Choose File</h1>
      <label
        htmlFor="uploadFile1"
        className="bg-black px-10 text-center text-white font-semibold text-base rounded max-w-md h-40 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 mb-2 fill-gray-500"
          viewBox="0 0 32 32"
        >
          <path
            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
            data-original="#000000"
          />
          <path
            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
            data-original="#000000"
          />
        </svg>
        Upload file
        <input
          type="file"
          id="uploadFile1"
          accept="image/*"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <p className="text-xs font-medium text-gray-400 mt-2">
          {file === "" ? "No File Selected" : file.name}
        </p>
      </label>
      <div className="flex flex-col justify-between  py-7 gap-4">
        <div className="w-full flex  justify-between ">
          <button
            className="px-4 border-[1px] border-solid border-white  rounded py-1"
            onClick={() => readFile("logo")}
          >
           Set Logo
          </button>
          <div className="relative inline-block w-11 h-5">
            <input
              defaultChecked=""
              checked={isChecked1}
              onClick={handleChangeLogoTexture}
              id="switch-component-blue"
              type="checkbox"
              className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component-blue"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer"
            ></label>
          </div>
        </div>
        <div className="w-full flex  justify-between ">
          <button
            className="px-4 border-[1px] border-solid border-white  rounded py-1"
            onClick={() => readFile("full")}
          >
            Set Texture
          </button>
          <div className="relative inline-block w-11 h-5">
            <input
              defaultChecked=""
              checked={isChecked2}
              onClick={handleChangeFullTexture}
              id="switch-component-texture"
              type="checkbox"
              className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component-texture"
              className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
