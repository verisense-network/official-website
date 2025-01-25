import React from "react";

const Elevating = () => {
  return (
    <div className="flex flex-col justify-center lg:items-start items-center pl-3">
      <div>
        <div className="text-[#ff847c] text-[15px] lg:text-[22px] font-medium">
          VERISENSE MAKES NEW SENSE!
        </div>
        <div className="text-[20px] lg:text-[32px] text-white font-black mt-[20px] lg:pl-0">
          Introducing the new possibilities.
        </div>
        <div className="text-[20px] lg:text-[32px] text-white font-black mt-[20px] lg:pl-0">
        Empowering the new applications.
        </div>
      </div>
    </div>
  );
};

export default React.memo(Elevating);
