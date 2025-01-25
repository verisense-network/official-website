import React from "react";
import { Image } from "@chakra-ui/react";
import StepEcosystem from "./StepEcosystem";
import EcosystemItem from "./EcosystemItem";

const Ecosystem = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-[60px] lg:h-[720px] lg:mt-0">
      <StepEcosystem />
      <EcosystemItem />
      <Image
        src="/Sop3.gif"
        className="lg:ml-[100px] lg:w-[520px] lg:h-[520px] w-1/2"
        alt=""
      />
    </div>
  );
};

export default React.memo(Ecosystem);
