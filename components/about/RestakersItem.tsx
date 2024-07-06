import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white md:w-[570px] mt-[60px] pl-3 md:pl-0 md:mt-0">
      <div className="text-[15px] md:text-[22px] text-[#ff847c] font-medium">
        AVS Client
      </div>
      <div className=" clear-both mt-[30px] text-[26px] md:text-[48px] leading-[40px] md:leading-[64px]">
        <span>Find quality, variety, and affordability.</span>
        <Image
          className="inline-block w-[44px] h-[32px] ml-1 md:ml-2"
          src="/icon-restakers.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] md:text-[18px] font-light mt-[30px]">
        Safeguard your application. Pay as you need, all within your budget.
      </div>
    </div>
  );
};

export default React.memo(Item);
