import { Image } from "@chakra-ui/react";
import React from "react";

const Trust = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-[130px] pb-[30px] md:py-[160px] relative pl-3">
      <div className="text-white text-[15px] md:text-[26px] font-medium">
        <div>VaaS: Validation-as-a-Service</div>
        <div className="text-[28px] md:text-[60px] leading-[40px] md:leading-[80px] font-black mt-[30px]">
          Trust boost with VaaS
        </div>
        <div className="text-[28px] md:text-[60px] leading-[40px] md:leading-[80px] font-black text-[#ff847c] mt-2">
          Serve AVS in variety
        </div>
        <div className="text-[14px] md:text-[20px] leading-[20px] md:leading-[36px] font-light mt-[30px]">
          Verisense is the world&apos;s first FHE-enabled VaaS network
        </div>
        <div className="text-[13px] md:text-[18px] leading-[20px] md:leading-[36px] font-light">
          Plug and play with any restaking layers to unlock the AVS demand
        </div>
      </div>
      <div className="hidden md:inline-block w-[580px] h-[564px] ml-[30px]" />
      <Image
        src="/image-trust.png"
        alt=""
        className="md:w-[686px] md:h-[666px] block md:absolute md:left-[52%]"
      />
    </div>
  );
};

export default React.memo(Trust);
