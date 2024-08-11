import React from "react";
import { ModeToggle } from "./mode-toggle";
import Links from "./links";

const Header = () => {
  return (
    <header className="fixed px-8 py-4 h-16 top-0 left-0 w-full backdrop-blur-2xl bg-background/60 flex justify-between items-center  z-50">
      <div>Header</div>
      <div className="flex items-center space-x-4">
        <Links />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
