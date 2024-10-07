import React, { useEffect, useState } from 'react'

const Download = () => {
   const [url ,setUrl] = useState();
   const canvas = document.querySelector("canvas");
   const dataURL = canvas.toDataURL();
    useEffect(()=>{
        setUrl(dataURL);
    } , [dataURL])
    const downloadCanvasToImage = () => {
        const canvas = document.querySelector("canvas");
        const dataURL = canvas.toDataURL();
        const link = document.createElement("a");
    
      
        link.href = dataURL;
        link.download = "canvas.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div className='flex flex-col gap-7' >
        <h1 className='text-lg font-bold my-5'>Download Image</h1>
        <img src={url} alt='photo' className='border-2 border-white rounded' />
        <button className='bg-white w-full text-black py-2 rounded  ' onClick={downloadCanvasToImage} >Download</button>
      
    </div>
  )
}

export default Download
