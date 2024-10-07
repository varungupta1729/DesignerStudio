import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import store from "../store/index";
import { Swatches } from "react-color/lib/components/swatches/Swatches";
import './swatch.css'
const ColorPicker = () => {
  const snap = useSnapshot(store);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} className="bg-transparent overflow-y-auto w-full flex flex-col items-center overflow-x-hidden" >
      <h1 className="text-lg font-bold my-5">Choose Color</h1>
      <SketchPicker
       color={snap.color}
       style={{   backgroundColor: "transparent"}}
       onChange={(color) => (store.color = color.hex)}/>
       <h1 className="text-lg font-bold my-5">Color Palette</h1>
      <Swatches
        color={snap.color}
        onChange={(color) => (store.color = color.hex)}
        height={600}
        width={250}
        style={{
          width: "30%",
          height: "100%",
          backgroundColor: "transparent",
          display: "flex", // Optional, in case you want to use flexbox
        }}
      />
    </div>
  );
};

export default ColorPicker;
