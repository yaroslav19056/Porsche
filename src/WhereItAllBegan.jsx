import React from "react";

export default function WhereItAllBegan() {
  return (
    <div className="bg-[#626262] w-full h-[290vh] overflow-clip">
      <img
        src="/assets/Gray-ragged-strip.png"
        alt="gray ragged strip image"
        className="w-full absolute left-0 right-0 z-40 2xl:-mt-10 xl:-mt-16 lg:-mt-14 md:-mt-17 min-[850px]:-mt-8 sm:-mt-16 max-[640px]:-mt-14"
      />

      <h2 className="font-sturkopf text-[200px] max-2xl:text-[150px] max-md:text-[80px] text-[#FFB300] leading-[230px] max-2xl:leading-[150px] max-md:leading-[80px] absolute ml-23 mt-50  max-2xl:mt-10 w-[60%] z-40">
        PORSCHE: WHEN IT ALL BEGAN.
      </h2>

      <img
        src="/assets/FerdinandPorsche.png"
        alt="Ferdinand Porsche image"
        className="w-[530px] max-2xl:w-[400px] max-lg:w-[300px] absolute right-[40%] max-xl:right-[10%] max-lg:right-[50%] mt-[30%] max-xl:mt-[20%] max-lg:mt-[40%] -rotate-5 border-[2px] border-[#FFFFFF]"
      />
      <img
        src="/assets/arrow.png"
        alt="arrow image"
        className="w-[275px] max-2xl:mt-[35%] absolute right-[27%] mt-[40%] max-xl:hidden"
      />
      <h3 className="font-handwriting text-[70px] max-lg:text-[50px] text-[#D34B4C] absolute z-50 right-[20%] max-lg:right-[35%] mt-[33%] max-2xl:mt-[26%] max-xl:mt-[10%] max-lg:mt-[40%] text-center leading-[0.9] -rotate-3">
        Ferdinand <br /> Porsche
      </h3>

      <p className="font-roboto font-light text-[50px] indent-18 max-xl:text-[30px] max-sm:text-[20px] text-[#FFFFFF] absolute right-[40%] max-lg:right-[10%] mt-[55%] max-lg:mt-[80%] max-md:mt-[70%] max-sm:mt-[90%] w-[55%] max-lg:w-[75%] leading-[0.99]">
        {" "}
        Ferdinand Porsche was an Austrian engineer who first founded the company
        in 1931 in Austria, and then shifted it to Stuttgart.{" "}
      </p>

      <div className="flex flex-col items-center absolute left-[40%] max-lg:left-[30%] max-md:left-[10%] right-[5%] mt-[75%] max-md:mt-[100%] max-sm:mt-[150%] max-lg:mt-[100%]">
        <div className="flex flex-row items-start gap-20 max-sm:gap-5 leading-[1.1]">
          <p className="font-roboto font-light text-[35px] max-2xl:text-[20px] max-sm:text-[15px] text-[#FFFFFF] text-justify">
            At First, The Company Offered Consulting And Development Work For
            Motor Vehicles, Without Manufacturing Any. Volkswagen Beetle And
            Porsche 64 Were Two Of The Very Early Assignments That Porsche Had
            Created Under Its Name.
          </p>
          <p className="font-roboto font-light text-[35px] max-2xl:text-[20px] max-sm:text-[15px] text-[#FFFFFF] text-justify">
            While Ferdinand was imprisoned for war crimes in 1945, his son,
            Ferry, created his own car, as he could not afford to buy one. In
            1947, Ferry, along with Louise, founded Porsche Konstruktionen
            GesmbH, from which Porsche 356 and 360 were the earliest models to
            come up.
          </p>
        </div>
        <h1 className="font-ttnorms text-[560px] leading-[600px] text-[#000000] opacity-[17%] mt-[-5%] max-2xl:hidden">
          356
        </h1>
        <div className="bg-[#626262] w-[160%] h-[200px] absolute mt-[64%] right-0 max-2xl:hidden"></div>
        <p className="font-roboto font-medium text-[35px] max-2xl:text-[20px] max-sm:text-[15px] text-[#FFFFFF] w-full self-start mt-[67%] max-md:mt-[40%] max-sm:mt-[100%] leading-[1.1] absolute text-justify">
          Porsche 356 — the first production car built by Porsche, introduced in
          1948 under Ferry Porsche’s leadership. Known for its sleek, rounded
          design and rear-engine layout, it established Porsche’s hallmark
          sportiness and engineering excellence, a legacy that continues in
          modern models today.
        </p>
      </div>
      <img
        src="/assets/FerryPorsche.png"
        alt="Ferry Porsche image"
        className="h-[530px] max-lg:h-[300px] top-[318.6vh] left-[-5%] absolute drop-shadow-[5px_-5px_0_#FFFFFF] object-cover"
      />
      <img
        src="/assets/arrow.png"
        alt="arrow image"
        className="w-[500px] h-[200px] absolute right-[40%] mt-[128%] scale-y-[-1] max-2xl:hidden"
      />
      <h2 className="font-ttnorms text-[100px] max-2xl:text-[65px] text-transparent words-stroke-2 absolute right-[6%] mt-[142%] max-2xl:mt-[150%] max-xl:mt-[170%] max-lg:mt-[200%] max-md:mt-[300%] max-sm:mt-[350%] leading-[0.9]">
        FERRY PORSCHE
      </h2>
    </div>
  );
}
