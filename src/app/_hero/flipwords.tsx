import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["scalable", "responsive", "elegant", "modern"];

  return (
    <div className="flex">
      <div className="text-4xl  font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        apps with me
      </div>
    </div>
  );
}
