import React from "react"; 
import Item from "./RestakersItem";
import { Image } from "@chakra-ui/react";
import StepValidator from "./StepValidator";
import ValidatorsItem from "./ValidatorsItem";
import DevelopersItems from "./DevelopersItems";

const Validator = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:h-[820px] mt-[60px] md:mt-0">
      <StepValidator />
      <Image
        src="/Sop2.gif"
        className="md:w-[520px] md:h-[520px]"
        alt=""
      />
      <div className="flex flex-col gap-20 md:ml-[100px]">
        <ValidatorsItem />
        <DevelopersItems />
      </div>
    </div>
  );
};

export default React.memo(Validator);
