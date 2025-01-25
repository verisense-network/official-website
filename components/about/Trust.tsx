import { Image } from "@chakra-ui/react";
import React from "react";

const Trust = () => {
  return (
    <div className="lg:flex lg:flex-row lg:text-left items-center text-center pt-[130px] pb-[30px] lg:py-[160px] relative pl-3 overflow-hidden">
      <div className="text-white text-[15px] lg:text-[26px] font-medium lg:w-3/5">
        <div>VERISENSE -  UNCHAIN THE BLOCKCHAIN</div>
        <div className="text-[28px] lg:text-[60px] leading-[40px] lg:leading-[80px] font-black mt-[30px]">
          Active Blockchain and Bridgeless Execution 
        </div>
        <div className="text-[28px] lg:text-[60px] leading-[40px] lg:leading-[80px] font-black text-[#ff847c] mt-2">
          Extended Programmability and Applicability
        </div>
        <div className="text-[14px] lg:text-[20px] leading-[20px] lg:leading-[36px] font-light mt-[30px]">
          Verisense is the world's first FHE-based blockchain with active data I/O and native execution, enabling previously unviable applications across any blockchain.
        </div>
      </div>
      <div className="flex lg:justify-end justify-center absolute right-0 z-[-1]">
        <Image
          src="/image-trust.png"
          alt=""
          className="lg:w-[686px] lg:h-[666px] w-1/2"
        />
      </div>
    </div>
  );
};

export default React.memo(Trust);
