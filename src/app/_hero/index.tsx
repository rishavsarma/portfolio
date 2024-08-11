import React from "react";
import { FlipWordsDemo } from "./flipwords";
import { TypewriterEffectSmoothDemo } from "./typewriter";

const Hero = () => {
  return (
    <div id="hero" className="container h-screen">
      <div className="h-16"></div>
      <div className="gap-4">
        <TypewriterEffectSmoothDemo />
        <FlipWordsDemo />
      </div>
    </div>
  );
};

export default Hero;
