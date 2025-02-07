import React from "react";
import { Image } from "@chakra-ui/react";
import StepValidator from "./StepValidator";
import ValidatorsItem from "./ValidatorsItem";

const Validator = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[820px] mt-[60px] lg:mt-0">
      <StepValidator />
      <ValidatorsItem />
      <Image src="/Sop2.gif" className="lg:w-[520px] lg:h-[520px]" alt="" />
    </div>
  );
};

export default React.memo(Validator);
