import React from "react";

export default function Porsche911yr() {
  return (
    <div className="bg-[#D54C4C] w-full h-screen ">
      <div className="flex flex-row justify-between">
        <div className=" ml-32 flex flex-col-reverse items-stretch justify-between bg-[#FFB300] h-[120px]">
          <img
            src="/assets/porsche-logo-word.svg"
            alt="porsche logo word image"
            className="w-[300px] max-xl:hidden"
          />
        </div>
        <div className="flex flex-row items-center justify-center -mt-30 mr-24">
          <p className="font-roboto font-bold text-[30px] text-[#FFB300] w-34 text-right leading-8 -mt-16 max-[1600px]:hidden">
            that's the year of creation the Porsche 911.
          </p>
          <h1 className="font-teko text-[500px] max-[1600px]:text-[400px] text-[#FFB300] max-xl:hidden">
            1963
          </h1>
        </div>
        <div className="w-[820px] h-[100px] right-20 mt-79 bg-[#D54C4C] absolute max-[1600px]:hidden"></div>
      </div>
      <div className="flex flex-row justify-between items-start -mt-52">
        <p className="font-roboto font-medium text-[30px] max-sm:text-[22px] text-[#FFB300] w-[19%] max-[1700px]:w-[30%] max-xl:w-[60%] max-lg:w-[80%] ml-32 max-md:ml-10 leading-8 -mt-10 max-xl:mt-30">
          the Porsche 911 is the most successful model in the Porsche range. It
          is an iconic sports car that has been in production for over 50 years
          and is still one of the most popular cars in the world. It is powered
          by a range of engines, from a 3.6L flat-6 to a 4.0L flat-6, and
          features a rear-wheel drive layout. Prices for the 911 range from
          around $90,000 to over $200,000.
        </p>
        <img
          src="/assets/911model.png"
          alt=" 911 model image"
          className="w-[45%] right-28 max-xl:left-28 max-md:left-10 -mt-10 max-xl:mt-[450px] max-md:mt-[590px] max-xl:w-[60%] max-lg:w-[80%] absolute"
        />
      </div>
      <img
        src="/assets/Finish-Line.png"
        alt=" finish line image"
        className="w-full absolute -mt-20 max-[1700px]:-mt-10 max-[1600px]:mt-30 max-[1470px]:mt-34 max-[1454px]:mt-26 max-[1376px]:mt-20 max-[1280px]:mt-[520px] max-[1220px]:hidden z-0"
      />
    </div>
  );
}
