import React from "react";

const Item = () => {
  return (
    <div className="text-white md:w-[570px] md:mt-[60px] pl-3 md:pl-0 ">
      <div className="text-[16px] text-[#00f2cd] font-medium">DEVELOPERS</div>
      <div className=" clear-both mt-[30px] text-[26px] md:text-[48px] leading-[40px] md:leading-[64px]">
        Find quality, variety,
      </div>
      <div className=" clear-both text-[26px] md:text-[48px] leading-[40px] md:leading-[64px]">
        <span>and affordability.</span>
        {/* <Image
          className="inline-block w-[36px] h-[32px] ml-1 md:ml-2"
          src="/icon-validators.svg"
          alt=""
        /> */}
      </div>
      <div className="text-[12px] md:text-[20px] font-light mt-[30px] leading-[28px] md:leading-[38px]">
        Safeguard your validation network altogether across
      </div>
      <div className="text-[12px] md:text-[20px] font-light leading-[28px] md:leading-[38px]">
        chains, all in your budget.
      </div>
    </div>
  );
};

export default React.memo(Item);
