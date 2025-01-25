import React from "react";
import { Image } from "@chakra-ui/react";

const Item = () => {
  return (
    <div className="text-white lg:w-[570px] mt-[60px] lg:mt-0 lg:pl-[100px]">
      <div className="text-[22px] lg:text-[22px] text-[#ff847c] font-medium">
        Active Blockchain
      </div>
      <div className=" clear-both mt-[30px] text-[26px] lg:text-[48px] leading-[40px] lg:leading-[64px]">
        <span>Shatter the Boundary of Blockchain.</span>
        <Image
          className="inline-block w-[44px] h-[32px] ml-1 lg:ml-2"
          src="/icon-restakers.svg"
          alt=""
        />
      </div>
      <div className="text-[13px] lg:text-[18px] font-light mt-[30px]">
        Break the limitation of smart contract. Break the passiveness of blockchain.
      </div>
    </div>
  );
};

export default React.memo(Item);
