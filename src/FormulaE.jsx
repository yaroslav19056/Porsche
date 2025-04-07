import React from "react";

export default function FormulaE() {
  return (
    <div className="relative w-full h-screen bg-[#D64C4D]">
      <img
        src="src/assets/red-ragged-strip.png"
        alt=" red ragged strip image"
        className="w-full max-[560px]:w-[150vw] object-cover absolute left-0 z-40 -top-30 max-[1110px]:-top-20 max-md:-top-14 max-[535px]:mt-6 max-[290px]:mt-10"
      />
      <div className="flex flex-col h-full justify-start items-start absolute z-50 ml-24 ">
        <h1 className="font-tuskerGrot text-[260px] max-[1700px]:text-[230px] max-[970px]:text-[200px] max-[880px]:text-[100px] ]: leading-[270px] max-[970px]:leading-[200px] text-[#FFB300] ">
          FORMULA E
        </h1>
        <img
          src="src/assets/AndreLotterer.png"
          alt="Andre Lotterer image"
          className="w-[500px] max-[1700px]:w-[450px] max-[970px]:w-[380px] max-[880px]:w-[260px] max-[400px]:w-[200px]"
        />
      </div>
      <div className="flex flex-col h-full max-[1450px]:h-[90vh] max-[1450px]:mt-10 max-[690px]:mt-[600px] max-[480px]:mt-[530px] max-[400px]:mt-[460px] justify-between items-end absolute z-50 mr-24 max-[1076px]:mr-10 max-[690px]:ml-10">
        <h5 className="font-roboto font-bold text-[80px] max-[1700px]:text-[50px] max-[1076px]:text-[40px] max-md:text-[30px] max-sm:text-[25px] text-[#393939] leading-[80px] max-[1700px]:leading-[50px] max-[1076px]:leading-[40px] max-md:leading-[30px] max-sm:leading-[25px] w-[65%] max-[1700px]:w-[40%] max-[690px]:w-full text-right max-[690px]:text-center">
          In 2019, Porsche has created a team in Formula E. The leader of the
          team is three-time winner of the 24 Hours of Le Mans marathon Andre
          Lotterer. He finished his debut race in Saudi Arabia in second
          position.
        </h5>
        <h2 className="font-teko text-[250px] max-[1700px]:text-[200px] max-[1450px]:text-[160px] leading-[250px] max-[1700px]:leading-[200px] max-[1450px]:leading-[160px] text-[#E85A5A] max-xl:hidden">
          2ND PLACE
        </h2>
      </div>
    </div>
  );
}
