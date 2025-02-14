import React from "react";
import { Feature } from "../types";
import Image from "next/image";

interface ContentProps {
  feature: Feature;
}

const Content = ({ feature }: ContentProps) => {
  return (
    <div className="text-white lg:w-[570px] mt-[60px] lg:mt-0 lg:pl-[100px]">
      <div className="text-[22px] lg:text-[22px] text-[#ff847c] font-medium">
        {feature.title}
      </div>
      <div className=" clear-both mt-[30px] text-[26px] lg:text-[48px] leading-[40px] lg:leading-[64px]">
        <span>{feature.heading}</span>
        <Image
          className="inline-block w-[44px] h-[32px] ml-1 lg:ml-2"
          src={feature.headingIcon}
          alt=""
        />
      </div>
      <div className="text-[13px] lg:text-[18px] font-light mt-[30px]">
        {feature.description}
      </div>
    </div>
  );
};

export default React.memo(Content);
