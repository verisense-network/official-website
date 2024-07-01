import React from "react";
import { Image } from "@chakra-ui/react";
import StepEcosystem from "./StepEcosystem";
import EcosystemItem from "./EcosystemItem";

const Ecosystem = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:h-[720px] mt-[60px] md:mt-0">
      <StepEcosystem />
      <EcosystemItem />
      <Image
        src="/Sop3.gif"
        className="md:ml-[100px] md:w-[520px] md:h-[520px]"
        alt=""
      />
    </div>
  );
};

export default React.memo(Ecosystem);
