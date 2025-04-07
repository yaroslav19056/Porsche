import React from "react";

export default function PorscheAutosport() {
  return (
    <div className="h-screen bg-[#232426] mt-10 relative">
      <div className="flex flex-col justify-between ml-32 max-sm:ml-10 h-[100%] pt-10">
        <h1 className="font-caledo text-[200px] max-2xl:text-[150px] max-xl:text-[100px] max-sm:text-[80px] text-[#ffb300] leading-[230px] max-2xl:leading-[150px] max-xl:leading-[100px] max-sm:leading-[80px] w-[40vw] max-[1625px]:w-[100vw] max-[850px]:w-[60vw]">
          PORSCHE & AUTOSPORT
        </h1>
        <h1 className="font-tuskerGrot text-[200px] max-2xl:text-[150px] max-xl:text-[100px] max-sm:text-[80px] leading-[230px] max-2xl:leading-[150px] max-xl:leading-[100px] max-sm:leading-[80px] text-[#FFB300]">
          LET'S SEE THE STORY<span className="text-[#D64C4D]">.</span>
        </h1>
        <div className="w-[60%] max-sm:w-full h-[22px] max-xl:h-[15px] max-sm:h-[13px] bg-[#232426] bottom-6 max-2xl:bottom-0 absolute"></div>
      </div>
      <img
        src="src/assets/911andGT3.png"
        alt=" 911 and GT3 model image"
        className="absolute right-36 max-2xl:right-[500px] max-xl:right-[400px] max-lg:right-[300px] max-[850px]:left-10 bottom-16 max-2xl:bottom-36 max-xl:bottom-40 w-[40%] max-xl:w-[60%] max-[850px]:w-[100%] max-sm:w-[80vw]"
      />
    </div>
  );
}
