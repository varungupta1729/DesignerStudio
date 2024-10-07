import React from 'react'

const AiPicker = () => {
  return (
    <div>
       <h1 className="text-lg font-bold my-5 ">AI Generator</h1>
       <textarea
       className='bg-[#7775756a] w-full h-[150px] rounded p-2 border-none'
       placeholder='Type Prompt to generate...'/>
        <div className="w-full flex flex-col gap-4  justify-between  mt-4 ">
          <button
            className="px-4 border-[1px] border-solid border-white  rounded py-1 bg-white text-black"
            // onClick={() => readFile("full")}
          >
            AI Logo
          </button>
          
          <button
            className="px-4 border-[1px] border-solid border-white  rounded py-1 bg-white text-black"
            // onClick={() => readFile("full")}
          >
            AI Texture
          </button>
       </div>
    </div>
  )
}

export default AiPicker
