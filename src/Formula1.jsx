import React from "react";

export default function Formula1() {
  return (
    <div className="flex flex-row justify-center items-center bg-[#232426] relative">
      <div className="w-[95vw] h-[99vh] bg-[#FFB300] rounded-4xl flex justify-between items-center flex-col mb-10">
        <div className="flex flex-row max-md:flex-col justify-between items-center max-xl:items-start absolute z-10 w-[88%] pt-5">
          <h1 className="font-tuskerGrot text-[230px] max-[1460px]:text-[200px] max-xl:text-[160px] max-[900px]:text-[120px] leading-[250px] max-xl:leading-[200px] max-[900px]:leading-[120px] text-[#FFFFFF] ">
            FORMULA 1
          </h1>
          <p className="font-roboto font-light text-[40px] max-2xl:text-[30px] max-2xl:leading-[30px] text-[#FFFFFF] w-[65%] max-xl:w-[60%] max-[900px]:w-[40%] max-md:w-[95%] mb-5">
            Porsche in motorsport participated in Formula One racing from 1957
            to 1964. Porsche cars participated in 35 races, of which they
            started 31 times, and scored one victory, in the 1962 French Grand
            Prix, which was won by Dan Gurney driving a Porsche 804.
          </p>
        </div>
        <img
          src="/assets/imgWith804.png"
          alt="design info image"
          className="w-[94vw] absolute bottom-10 max-md:hidden"
        />
      </div>
    </div>
  );
}
