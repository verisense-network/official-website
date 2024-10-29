import React from "react";
import StepRestaking from "./StepRestaking";
import RestakersItem from "./RestakersItem";
import { Image } from "@chakra-ui/react";

const Restakers = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[720px] mt-[60px] lg:mt-0">
      <StepRestaking />
      <RestakersItem />
      <Image
        src="/Sop1.gif"
        className="lg:ml-[96px] lg:w-[520px] lg:h-[520px] w-1/2"
        alt=""
      />
    </div>
  );
};

export default React.memo(Restakers);
