import React from "react";
import { SquareBrickSVG } from "../public/Icons/LoadSVGs";
import { LoadImage } from "./LoadImage";

function Testinmonials() {
  return (
    <div className=" mt-[20px] h-[224px]">
      <div className="w-[90%] h-[20%]">
        <p className="text-right font-proximaNovaMedium tracking-wide text-[25px] text-[#f2f2f2] pr-4">
          Testimonials
        </p>
      </div>

      <div className="border-[#f5f5f5] border-t-[1.8px] w-[80%] m-auto opacity-50"></div>

      <div className="flex overflow-x-auto hide-scroll-bar lg:mt-10 mt-6">
        <div className={`lg:w-[270px] w-[120px] my-auto flex`}>
          <div
            className={`lg:w-[270px] w-[120px] h-[120px] flex justify-end lg:pr-[90px] pr-[40px] relative`}
          >
            <div className="lg:mt-[30%] mt-[40%]">
              <SquareBrickSVG />
            </div>
          </div>
        </div>
        <LoadImage
          imgUrl={
            "https://res.cloudinary.com/deurbq7gg/image/upload/v1686331835/temp/testionial1_elxmiv.webp"
          }
          width={"lg:w-[353px]"}
          mobileWidth={"w-[250px]"}
          mobileHeight={"h-[96px]"}
        />
        <LoadImage
          imgUrl={
            "https://res.cloudinary.com/deurbq7gg/image/upload/v1686331835/temp/testionial2_t6eou6.webp"
          }
          width={"lg:w-[353px]"}
          mobileWidth={"w-[250px]"}
          mobileHeight={"h-[96px]"}
        />
        <LoadImage
          imgUrl={
            "https://res.cloudinary.com/deurbq7gg/image/upload/v1686331835/temp/testionial3_uiesta.webp"
          }
          width={"lg:w-[506px]"}
          mobileWidth={"w-[370px]"}
          mobileHeight={"h-[96px]"}
        />
      </div>
    </div>
  );
}

export default Testinmonials;
