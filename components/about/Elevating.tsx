import React from "react";

const Elevating = () => {
  return (
    <div className="flex flex-col justify-center pl-3">
      <div className="text-[#ff847c] text-[15px] md:text-[22px] font-medium">
        VERISENSE MAKES SENSE!
      </div>
      <div className="text-[20px] md:text-[32px] text-white font-black mt-[20px] md:pl-0">
        Empowering decentralized security
      </div>
      <div className="text-[20px] md:text-[32px] text-white font-black mt-[20px] md:pl-0">
        Embracing AVS diversification
      </div>
    </div>
  );
};

export default React.memo(Elevating);
