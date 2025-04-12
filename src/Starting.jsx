export default function Starting() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <h1 className="text-[700px] font-caledo leading-[740px] text-start overflow-clip text-[#3D3D3D] max-2xl:text-[550px] max-xl:text-[450px] max-lg:text-[350px] max-md:text-[0px]">
        PORSCHE
      </h1>
      <img
        src="/assets/porsche.png"
        alt="porshe image"
        className="w-full bottom-0 left-0 absolute"
      />
      <StarterFooter />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row justify-between items-end mt-5 w-[91vw] ml-5 max-[850px]:flex-col">
      <h3 className="text-5xl font-caledo text-[#A4A4A4]">PORSCHE</h3>
      <div className="flex flex-row gap-5 text-[#A4A4A4]">
        <h5 className="font-roboto font-bold text-2xl">AUTOSPORT</h5>
        <h5 className="font-roboto font-bold text-2xl">PORSCHE 911</h5>
      </div>
      <div className="flex flex-row gap-5 text-[#A4A4A4]">
        <h5 className="font-roboto font-bold text-2xl">FORMULA 1</h5>
        <h5 className="font-roboto font-bold text-2xl">FORMULA E</h5>
      </div>
    </div>
  );
}

function StarterFooter() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row justify-between absolute w-[60%] bottom-10 left-0 right-0 ml-23 mr-5 md:max-xl:flex-col ">
        {/* это див инфы слева */}
        <div className="flex flex-col max-md:hidden">
          <div className="flex flex-row justify-between items-center h-min">
            <h2 className="font-roboto font-bold text-[60px] text-[#F2F2F2] leading-[70px]">
              2.7
            </h2>
            <h5 className="font-roboto font-light text-[17px] text-[#AEAEAE] w-[150px] text-end">
              ACCELERATION TIME 0-100 KM/H, S
            </h5>
          </div>
          <hr className="border-[#FFFFFF] h-[2px]" />
          <div className="flex flex-row justify-between items-center h-min">
            <h2 className="font-roboto font-bold text-[60px] text-[#F2F2F2] leading-[70px]">
              330
            </h2>
            <h5 className="font-roboto font-light text-[17px] text-[#AEAEAE] w-[150px] text-end">
              MAXIMUM SPEED, KM/H
            </h5>
          </div>
        </div>

        <img
          src="/assets/Porsche-Logo.png"
          alt="Porsche logo image"
          className="w-[100px] h-[130px] max-2xl:hidden"
        />
        <h2 className="font-sturkopf text-[200px] leading-[145px] mb-15 text-[#F2F2F2] lg:max-2xl:text-[140px]">
          911 TURBO S
        </h2>
      </div>

      <div className="max-md:hidden">
        <div
          className="absolute right-[240px] bottom-46 z-10 rounded-[50%] flex items-center justify-center w-[50px] h-[50px] bg-[#AAB0BD] border-[1px] border-[#FFFFFF] hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=nT2mjvWC3e8")
          }>
          <img
            src="/assets/triangle.png"
            alt="triangle"
            className="w-[20px] h-[20px] ml-[3px]"
          />
        </div>
        <img
          src="/assets/preview.png"
          alt="video preview"
          className="h-[100px] w-[200px] absolute right-16 bottom-26 hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=nT2mjvWC3e8")
          }
        />
      </div>
    </div>
  );
}
