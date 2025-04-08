import React from "react";

export default function TextOnly() {
  return (
    <div className="bg-[#232426] w-full h-screen pl-24 max-[620px]:pl-10 pt-5 relative pr-3">
      <h5 className="font-roboto font-bold text-[100px] max-[1700px]:text-[80px] max-[1305px]:text-[60px] max-[905px]:text-[50px] max-[620px]:text-[35px] leading-[100px] max-[1700px]:leading-[80px] max-[1305px]:leading-[60px] max-[905px]:leading-[50px] max-[620px]:leading-[35px] text-[#393939] w-[90%] z-10 absolute">
        After competing in <span className="text-[#D64C4D]">Formula 1</span>,
        Porsche switched to the 24&nbsp;Hours of&nbsp;Le&nbsp;Mans. Porsche's
        lightweight and compact cars won the Targa Florio and the Nürburgring.
        The first outright victory in the 24 Hours of Le Mans was won by a{" "}
        <span className="text-[#FFB300]">Porsche&nbsp;917</span> in 1970.
      </h5>
      <img
        src="/assets/f1-logo.png"
        alt="f1 logo image"
        className="w-[500px] max-[1305px]:w-[400px] opacity-5 absolute right-[22%] max-[1420px]:right-[30%] max-[1305px]:right-[20%] max-[1080px]:right-[8%] -top-12 max-[1305px]:-top-14 z-[5] max-[400px]:hidden"
      />
      <img
        src="/assets/24hleman-logo.png"
        alt=" 24hleman logo image"
        className="w-[500px] max-[1305px]:w-[300px] opacity-5 absolute left-[22%] max-[1700px]:left-[10%] top-30 z-[5]"
      />
      <img
        src="/assets/nurburgring-road.png"
        alt="nurburgring road image"
        className="w-[350px] max-[1305px]:w-[200px] opacity-[72%] absolute left-[10%] top-[430px] max-[1305px]:top-[300px] max-sm:top-[350px] z-[5] max-[400px]:hidden"
      />
      <img
        src="/assets/917model.png"
        alt="917 model image"
        className="w-[450px] max-[500px]:w-[300px] absolute right-[33%] max-[1305px]:right-[60%] max-[1150px]:right-[30%] max-sm:left-5 bottom-8 max-[1305px]:bottom-26 max-[400px]:bottom-36 z-[5]"
      />
    </div>
  );
}
