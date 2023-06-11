import Head from "next/head";
import React from "react";
import LandingPageContainer from "../containers/LandingPageContainer";

export default function Home() {
  return (
    <div className={"appContainer min-h-screen w-[100%]"}>
      <Head>
        <title>Loch Signup</title>
        <meta name="description" content="Loch Signup" />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="LandingPageMainDiv">
        <LandingPageContainer />
      </div>
    </div>
  );
}
