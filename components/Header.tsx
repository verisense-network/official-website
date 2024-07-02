import { Image } from "@chakra-ui/react";
import Menus from "./Menus";
import React from "react";

const Header = () => {
  return (
    <div className="h-[78px] fixed left-0 right-0 z-50 text-xs flex items-center justify-between bg-[#000000]/20 backdrop-blur px-[10%] md:px-[20%] border-b border-[#00f2cd]/20">
      <Image src={"/verisense_logo.svg"} className="w-[150px] h-[50px]" alt="Logo" />
      <Menus />
    </div>
  );
};

export default React.memo(Header);
