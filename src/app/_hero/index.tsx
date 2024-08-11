import React from "react";
import { FlipWordsDemo } from "./flipwords";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import { TechStack } from "./tech-stack";

const Hero = () => {
  return (
    <div id="hero" className="container h-screen">
      <div className="h-16"></div>
      <div className="flex flex-col gap-4">
        <TypewriterEffectSmoothDemo />
        <FlipWordsDemo />
        <TechStack />
      </div>
    </div>
  );
};

export default Hero;
