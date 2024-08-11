import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex  items-center">
      <Link className={buttonVariants({ variant: "link" })} href={"#hero"}>
        Home
      </Link>
      <Link className={buttonVariants({ variant: "link" })} href={"#projects"}>
        Projects
      </Link>
    </div>
  );
};

export default Links;
