import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white md:w-[570px] mt-[60px] pl-3 md:pl-0 md:mt-0">
      <div className="text-[12px] md:text-[16px] text-[#00f2cd] font-medium">RESTAKERS</div>
      <div className=" clear-both mt-[30px] text-[30px] md:text-[48px] leading-[40px] md:leading-[64px]">
        <span>Earn more and earn smart.</span>
        <Image
          className="inline-block w-[44px] h-[32px] ml-1 md:ml-2"
          src="/icon-restakers.svg" 
          alt=""
        />
      </div>
      <div className="text-[12px] md:text-[20px] font-light mt-[30px]">
        Restructured restaking earnings, for your appetite of risk.
      </div>
    </div>
  );
};

export default React.memo(Item);
