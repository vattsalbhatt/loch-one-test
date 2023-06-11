import React from "react";
import { EyeIconSVG } from "../public/Icons/LoadSVGs";

function WhatWhalesDoingContent() {
  return (
    <div className="xl:mt-[60px] xl:h-[310px] lg:flex">
      <div className="xl:w-[50%] md:w-[45%] hidden lg:block lg:px-4">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/deurbq7gg/image/upload/v1686322037/temp/Screenshot_2023-06-09_at_8.17.09_PM_clu6ax.webp"
            className="object-contain relative rounded-[20px] xl:ml-[50px] [#c8c5c5] w-auto h-[306px] "
            alt="whales-image"
          />
        </div>
      </div>
      <div className="xl:w-[40%] lg:w-[50%] w-[90%] lg:mt-3 lg:px-4">
        <div className="flex justify-end mt-8">
          <EyeIconSVG />
        </div>
        <div className="mt-[18px] text-right">
          <div className="flex justify-end">
            <p className="lg:text-[31px] text-3xl leading-8 text-[#f2f2f2] lg:leading-9 font-proximaNovaMedium">
              Watch what the <br /> whales are doing
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-[#f2f2f2] opacity-70 mt-[18px] lg:w-[75%] w-[80%] leading-6 font-proximaNovaMedium">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:hidden flex justify-end">
        <div className="relative w-[70%]">
          <img
            src="https://res.cloudinary.com/deurbq7gg/image/upload/v1686322037/temp/Screenshot_2023-06-09_at_8.17.09_PM_clu6ax.webp"
            className="object-contain relative rounded-[24px] lg:ml-[50px] [#c8c5c5] w-auto lg:h-[306px] h-[260px] "
            alt="whales-image"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWhalesDoingContent;
