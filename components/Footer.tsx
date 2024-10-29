import React from "react";
import { Image, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="mt-[60px] md:mt-[160px] border-t border-[#272727] py-3 md:py-0">
      <div className="mx-auto md:h-[224px] flex justify-between items-center p-3 md:p-0 overflow-hidden">
        <div className=" text-white/80 font-light text-[12px] lg:text-[16px] leading-[18px] md:leading-[28px]">
          <Image
            src="/verisense_logo.svg"
            className="w-[240px] h-[80px] mb-3"
            alt=""
          />
          <div>
            Verisense elevates the blockchain security economics to new heights,
          </div>
          <div>powered by the interoperability and FHE technologies.</div>
        </div>

        <div className="flex flex-col flex-1 justify-end items-center gap-1 lg:flex-row lg:gap-2 pr-12">
          <Link
            href="https://x.com/veri_sense"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-x.svg" alt="X" />
          </Link>
          <Link
            href="https://discord.gg/cvQQe7ne"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-t.svg" alt="T" />
          </Link>
          <Link
            href="https://t.me/verisense_official"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-f.svg" alt="F" />
          </Link>
          <Link
            href="https://verisense.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-e.svg" alt="E" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
