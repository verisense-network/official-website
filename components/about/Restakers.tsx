import React from "react";
import StepRestaking from "./StepRestaking";
import RestakersItem from "./RestakersItem";
import { Image } from "@chakra-ui/react";

const Restakers = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:h-[720px] mt-[60px] md:mt-0">
      <StepRestaking />
      <RestakersItem />
      <Image
        src="/Sop1.gif"
        className="md:ml-[96px] md:w-[520px] md:h-[520px]"
        alt=""
      />
    </div>
  );
};

export default React.memo(Restakers);
