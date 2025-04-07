import React from "react";

export default function OurTime() {
  return (
    <div className="relative w-full h-screen bg-[#232426] flex flex-col items-center overflow-clip">
      <img
        src="src/assets/red-ragged-strip.png"
        alt="gray ragged strip image"
        className="w-full absolute left-0 right-0 z-40 -top-10 max-[1000px]:top-0 rotate-180"
      />

      <div className="absolute mt-24 max-[780px]:hidden">
        <h1 className="font-teko text-[450px] max-[1800px]:text-[400px] max-[1550px]:text-[350px] max-[1360px]:text-[300px] max-[1160px]:text-[250px] max-[980px]:text-[200px] text-[#363636] text-center leading-[450px] max-[1800px]:leading-[400px] max-[1550px]:leading-[350px] max-[1360px]:leading-[300px] max-[1160px]:leading-[250px] max-[980px]:leading-[200px]">
          2023-2024
        </h1>
        <div className="w-full h-[150px] max-[1550px]:h-[120px] max-[1360px]:h-[90px] max-[1160px]:h-[80px] max-[980px]:h-[60px] bg-[#232426] bottom-6 absolute z-40"></div>
      </div>

      <div className="flex flex-col w-full gap-5 absolute z-50 bottom-0">
        <div className="flex flex-row max-[930px]:flex-col justify-around items-center">
          <img
            src="/assets/WEC-logo.png"
            alt=" wec logo"
            className="w-[450px] max-[1385px]:w-[300px]"
          />
          <img
            src="/assets/963model.png"
            alt="963 model image"
            className="w-[435px] max-[1385px]:w-[285px]"
          />
          <img
            src="/assets/IMSA-logo.png"
            alt=" imsa logo"
            className="w-[450px] max-[1385px]:w-[300px]"
          />
        </div>
        <p className="font-teko text-[80px] max-[600px]:text-[50px] text-[#D64C4D] text-center leading-[80px] max-[600px]:leading-[50px] mb-5">
          Porsche has been racing the{" "}
          <span className="text-[#FFB300]">963</span> from 2023 to 2024. The car
          is to compete in the Hypercar and GTP classes in the FIA World
          Endurance Championship and the IMSA SportsCar Championship
          respectively.
        </p>
      </div>
    </div>
  );
}
