import React from "react";
import WrapperSec from "./WrapperSec";
import AboutSec from "./AboutSec";
import UsingStepsSec from "./UsingStepsSec";

const Home = () => {
  return (
    <div className="site-wrapper">
      <WrapperSec />
      <AboutSec />
      <UsingStepsSec />
    </div>
  );
};

export default Home;
