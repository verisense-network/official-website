import { Image } from "@chakra-ui/react";
import Menus from "./Menus";
import React from "react";

const Header = () => {
  return (
    <div className="h-[78px] fixed left-0 right-0 z-50 text-xs flex items-center justify-center bg-[#000000]/20 backdrop-blur px-4 lg:px-4 border-b border-[#00f2cd]/20">
      <div className="lg:w-[1400px] w-full flex justify-between items-center">
        <Image
          src={"/verisense_logo.svg"}
          className="w-[210px] h-[70px]"
          alt="Logo"
        />
        <Menus />
      </div>
    </div>
  );
};

export default React.memo(Header);
