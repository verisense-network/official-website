import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white md:mt-[60px] pl-3 md:pl-0">
      <div className="text-[22px] text-[#ff847c] font-medium">VALIDATOR</div>
      <div className=" clear-both text-[26px] md:text-[48px] leading-[40px] md:leading-[64px] mt-[30px]">
        Join Verisense, earn more and earn smart.
        <Image
          className="inline-block w-[36px] h-[32px] ml-1 md:ml-2"
          src="/icon-validators.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] md:text-[18px] font-light mt-[30px] leading-[28px] md:leading-[38px]">
        Your nodes, your business
      </div>
      <div className="text-[13px] md:text-[18px] font-light leading-[28px] md:leading-[38px]">
        Maximize returns on your investment
      </div>
    </div>
  );
};

export default React.memo(Item);
