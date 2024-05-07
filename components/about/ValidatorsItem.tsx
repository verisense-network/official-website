import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white md:mt-[60px] pl-3 md:pl-0 ">
      <div className="text-[16px] text-[#00f2cd] font-medium">VALIDATORS</div>
      <div className=" clear-both mt-[30px] text-[26px] md:text-[48px] leading-[40px] md:leading-[64px]">
        Join Sophon and become
      </div>
      <div className=" clear-both text-[26px] md:text-[48px] leading-[40px] md:leading-[64px]">
        <span>an in-network node.</span>
        <Image
          className="inline-block w-[36px] h-[32px] ml-1 md:ml-2"
          src="/icon-validators.svg"
          alt=""
        />
      </div>
      <div className="text-[12px] md:text-[20px] font-light mt-[30px] leading-[28px] md:leading-[38px]">
        Running your nodes and growing your business. Maximize
      </div>
      <div className="text-[12px] md:text-[20px] font-light leading-[28px] md:leading-[38px]">
        Returns for your existing investments
      </div>
    </div>
  );
};

export default React.memo(Item);
