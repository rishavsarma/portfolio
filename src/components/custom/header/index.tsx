import { DockDemo } from "./dock";
import Links from "./links";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="fixed px-8 py-4 h-16 top-0 left-0 w-full backdrop-blur-3xl bg-background/50 flex justify-between items-center  z-50">
      <div>Header</div>
      <div className="flex items-center space-x-4">
        {/* <Links /> */}
        {/* <ModeToggle /> */}
        <DockDemo />
      </div>
    </header>
  );
};

export default Header;
