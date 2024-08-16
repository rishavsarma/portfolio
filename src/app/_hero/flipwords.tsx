import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["scalable", "responsive", "elegant", "modern"];

  return (
      <div className="text-muted-foreground md:text-lg lg:text-xl">
          Im a passionate fullstack developer with expertise in building{" "}
          <FlipWords words={words} /> web applications. Lets bring your ideas to
          life!
      </div>
  );
}
