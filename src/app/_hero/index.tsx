import React from "react";
import { FlipWordsDemo } from "./flipwords";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import { TechStack } from "./tech-stack";

const Hero = () => {
  return (
      <div
          id="hero"
          className="container min-h-screen flex flex-col justify-between space-y-8 md:space-y-4"
      >
          <div className="flex flex-col gap-4 ">
              <div className="h-16"></div>
              <TypewriterEffectSmoothDemo />
          </div>
          <div className="h-full items-center flex">
              <div className="grid gap-10 md:gap-8 lg:gap-10 md:grid-cols-2 items-center w-full">
                  <div className="space-y-2">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                          Rishav Sarma
                      </h1>
                      <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                          Fullstack Developer
                      </h2>
                      <FlipWordsDemo />
                  </div>
                  <div className="flex justify-center md:justify-end">
                      <img
                          src="images/logos/figma.png"
                          width="250"
                          height="250"
                          alt="John Doe"
                          className="rounded-full"
                          style={{ aspectRatio: "250/250", objectFit: "cover" }}
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
