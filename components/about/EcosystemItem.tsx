import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white mt-[60px] lg:w-[570px] lg:pl-[100px]">
      <div className="text-[22px] text-[#ff847c] font-medium">
        Validation-as-a-Service
      </div>
      <div className=" clear-both text-[26px] lg:text-[48px] leading-[40px] lg:leading-[64px] mt-[30px]">
        Remove Vulnerability from Self Validation. 
        <Image
          className="inline-block w-[36px] h-[32px] ml-1 lg:ml-2"
          src="/icon-validators.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] lg:text-[18px] font-light mt-[30px] leading-[28px] lg:leading-[38px]">
        Access high-quality shared security massively and effortlessly. Pay only for what you need.
      </div>
    </div>
  );
};

export default React.memo(Item);
