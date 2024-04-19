import React from "react";

const StepRestaking = () => {
  return (
    <>
    <div className="flex flex-col md:hidden w-[370px] md:h-[380px] justify-center items-center mt-[60px] mx-auto">
      <div className="flex items-center justify-center">
        <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full"></span>
        <span className="inline-block w-[160px] h-[3px] bg-[#595959]"></span>
        <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full"></span>
        <span className="inline-block w-[160px] h-[3px] bg-gradient-to-b from-[#595959] to-white "></span>
        <span className="inline-block w-[12px] h-[12px] bg-white rounded-full"></span>
      </div>
      <div className="flex text-white/70 text-[16px] font-medium w-full items-center mt-1">
        <span className="inline-block ">Restaking</span>
        <div className="flex-grow flex flex-col justify-center items-center ">
          <span className="inline-block">Validator</span>
          <span className="inline-block">Marketplace</span>
        </div>
        <span className="inline-block text-white">Ecosystem</span>
      </div>
    </div>
    <div className="hidden md:flex w-[370px] h-[380px] justify-center pl-[100px]">
      <div className="flex flex-col items-center justify-center">
        <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full"></span>
        <span className="inline-block w-[3px] h-[160px] bg-[#595959]"></span>
        <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full"></span>
        <span className="inline-block w-[3px] h-[160px]  bg-gradient-to-b from-[#595959] to-white "></span>
        <span className="inline-block w-[12px] h-[12px] bg-white  rounded-full"></span>
      </div>
      <div className="flex flex-col h-full text-white/70 text-[16px] font-medium ml-[30px]">
        <span className="inline-block ">Restaking</span>
        <div className="flex-grow flex flex-col justify-center text-white">
          <span className="inline-block">Validator</span>
          <span className="inline-block">Marketplace</span>
        </div>
        <span className="inline-block text-white">Ecosystem</span>
      </div>
    </div>
    </>
  );
};

export default React.memo(StepRestaking);
