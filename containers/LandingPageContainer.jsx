import React from "react";
import SignupBox from "../components/SignupBox";
import GetNotifiedContent from "../components/GetNotifiedContent";
import WhatWhalesDoingContent from "../components/WhatWhalesDoingContent";
import Testinmonials from "../components/Testinmonials";

function LandingPageContainer() {
  const gradient = `radial-gradient(70.84% 96.84% at 4.27% 102.27%, rgba(30, 137, 17, 0.899) 36.21%, rgba(47,21,208, 0.9455) 76.58%, rgba(0, 0, 0, 0.88) 105%)`;
  const backgroundStyle = {
    background: gradient,
    backgroundAttachment: "fixed",
  };
  return (
    <div className="lg:w-[90%] w-full lg:flex md:block min-w-full  min-h-screen">
      <div className="lg:w-[52%] w-[100%]" style={backgroundStyle}>
        <GetNotifiedContent />
        <WhatWhalesDoingContent />
        <Testinmonials />
      </div>
      <div className="lg:w-[48%] pt-10 lg:pt-0 m-auto lg:m-0 bg-white shadow-lg shadow-black">
        <div className="flex w-full justify-center h-full m-auto">
          <div className="m-auto">
            <SignupBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContainer;
