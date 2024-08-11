"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "world!",
      className: "text-primary dark:text-primary",
    },
  ];
  return (
    <div className="flex items-center justify-start  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
