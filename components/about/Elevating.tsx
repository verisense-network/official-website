import React from "react";

const Elevating = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-[#ff847c] text-[15px] md:text-[22px] font-medium">
        VERISENSE MAKES SENSE!
      </div>
      <div className="text-[24px] md:text-[32px] text-white font-black mt-[20px] pl-4 md:pl-0">
        Empowering decentralized security, embracing AVS diversification
      </div>
    </div>
  );
};

export default React.memo(Elevating);
