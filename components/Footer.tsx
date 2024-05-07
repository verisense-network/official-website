import React from "react";
import { Image,Link } from "@chakra-ui/react"; 

const Footer = () => {
  return (
    <div className="mt-[60px] md:mt-[160px] border-t border-[#272727] py-3 md:py-0">
      <div className="md:w-[60%] mx-auto md:h-[224px] flex justify-between items-center  p-3 md:p-0">
        <div className=" text-white/80 font-light text-[12px] md:text-[16px] leading-[18px] md:leading-[28px]">
          <Image src="/title.svg" className="w-[244px] h-[42px] mb-3" alt="" />
          <div>
            Sophon elevates the blockchain security economics to new heights,
          </div>
          <div>powered by the interoperability and FHE technologies.</div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
          <Link
            href="https://twitter.com/ebunker_eth"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-x.svg" alt="X" />
          </Link>
          <Link
            href="https://discord.gg/nuvw6hmvnK"
            target="_blank"
            rel="noreferrer"
          >
            <Image boxSize={8} src="/icon-t.svg" alt="T" />
          </Link>
          <Link href="https://t.me/ebunkerio" target="_blank" rel="noreferrer">
            <Image boxSize={8} src="/icon-f.svg" alt="F" />
          </Link>
          <Link
            href="mailto:support@ebunker.io"
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
