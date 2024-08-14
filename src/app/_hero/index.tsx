import React from "react";
import { FlipWordsDemo } from "./flipwords";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import { TechStack } from "./tech-stack";

const Hero = () => {
  return (
    <div id="hero" className="container h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-4 ">
        <div className="h-16"></div>
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="h-full items-center flex">
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 items-center w-full">
          <div className="space-y-4 ">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Rishav Sarma
            </h1>
            <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              Fullstack Developer
            </h2>
            <FlipWordsDemo />
          </div>
          <div className="flex justify-end">
            <img
              src="images/logos/figma.png"
              width="400"
              height="400"
              alt="John Doe"
              className="rounded-full"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <TechStack />
        <div className="h-14"></div>
      </div>
    </div>
  );
};

export default Hero;
