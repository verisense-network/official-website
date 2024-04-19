import { Container, Image } from "@chakra-ui/react";
import React from "react";

const Trust = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-[130px] pb-[30px] md:py-[160px] relative">
      <div className="text-white text-[12px] md:text-[20px] font-medium">
        <div>OMNICHAIN RESTAKING PROTOCOL</div>
        <div className="text-[32px] md:text-[66px] leading-[40px] md:leading-[80px] font-black mt-[30px]">Trust Boost with</div>
        <div className="text-[32px] md:text-[66px] leading-[40px] md:leading-[80px] font-black text-[#00F2CD] mt-2">
          Bnteroperability
        </div>
        <div className="leading-[20px] md:leading-[36px] font-light mt-[30px]">
          Sophon is reinventing decentralized trust boost with an{" "}
        </div>
        <div className="leading-[20px] md:leading-[36px] font-light">omnichain based restaking protocol</div>
      </div>
      <div className="hidden md:inline-block w-[580px] h-[564px] ml-[30px]"></div>
      <Image src="/image-trust.png" alt="" className="w-[320px] h-[312px] md:w-[980px] md:h-[952px] block md:absolute md:left-[42%]" />
    </div>
  );
};

export default React.memo(Trust);
