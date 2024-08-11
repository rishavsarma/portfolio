import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "responsive", "beautiful", "modern"];

  return (
    <div className="flex justify-center items-center p-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with me
      </div>
    </div>
  );
}
