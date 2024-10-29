import React from "react";

const StepRestaking = () => {
  return (
    <>
      <div className="flex flex-col lg:hidden w-[370px] lg:h-[380px] justify-center items-center mt-[60px] px-3 lg:px-auto">
        <div className="flex items-center justify-center">
          <span className="inline-block w-[12px] h-[12px] bg-white rounded-full" />
          <span className="inline-block w-[150px] lg:w-[160px] h-[3px] bg-gradient-to-b from-white to-[#595959]" />
          <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full" />
          <span className="inline-block w-[150px] lg:w-[160px] h-[3px] bg-[#595959]" />
          <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full" />
        </div>
        <div className="flex text-white/70 text-[12px] lg:text-[16px] font-medium w-full items-center mt-1">
          <span className="inline-block text-white">AVS Client</span>
          <div className="flex flex-col items-center justify-center flex-grow">
            <span className="inline-block">Validator</span>
          </div>
          <span className="inline-block">Ecosystem</span>
        </div>
      </div>
      <div className="hidden lg:flex w-[150px] h-[380px] justify-center">
        <div className="flex flex-col items-center">
          <span className="inline-block w-[12px] h-[12px] bg-white rounded-full" />
          <span className="inline-block w-[3px] h-[160px] bg-gradient-to-b from-white to-[#595959]" />
          <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full" />
          <span className="inline-block w-[3px] h-[160px] bg-[#595959]" />
          <span className="inline-block w-[12px] h-[12px] bg-[#595959] rounded-full" />
        </div>
        <div className="flex flex-col h-full text-white/70 text-[16px] font-medium ml-[30px]">
          <span className="inline-block text-white">AVS Client</span>
          <div className="flex flex-col justify-center flex-grow">
            <span className="inline-block">Validator</span>
          </div>
          <span className="inline-block">Ecosystem</span>
        </div>
      </div>
    </>
  );
};

export default React.memo(StepRestaking);
