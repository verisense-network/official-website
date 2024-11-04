import { Image } from "@chakra-ui/react";
import React from "react";

const Trust = () => {
  return (
    <div className="lg:flex lg:flex-row lg:text-left items-center text-center pt-[130px] pb-[30px] lg:py-[160px] relative pl-3 overflow-hidden">
      <div className="text-white text-[15px] lg:text-[26px] font-medium">
        <div>VaaS: Validation-as-a-Service</div>
        <div className="text-[28px] lg:text-[60px] leading-[40px] lg:leading-[80px] font-black mt-[30px]">
          Trust boost with VaaS
        </div>
        <div className="text-[28px] lg:text-[60px] leading-[40px] lg:leading-[80px] font-black text-[#ff847c] mt-2">
          Serve AVS in variety
        </div>
        <div className="text-[14px] lg:text-[20px] leading-[20px] lg:leading-[36px] font-light mt-[30px]">
          Verisense is the world&apos;s first FHE-enabled VaaS network
        </div>
        <div className="text-[13px] lg:text-[18px] leading-[20px] lg:leading-[36px] font-light">
          Plug and play with any restaking layers to unlock the AVS demand
        </div>
      </div>
      <div className="flex lg:justify-end justify-center">
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
