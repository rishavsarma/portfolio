import {
  CodepenIcon,
  DatabaseIcon,
  FastForwardIcon,
  NetworkIcon,
  NutIcon,
  WindIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <section className="">
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-neutral-600 dark:text-neutral-300">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center space-y-2">
              <CodepenIcon className="w-10 h-10" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <NetworkIcon className="w-10 h-10" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FastForwardIcon className="w-10 h-10" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <XIcon className="w-10 h-10" />
              <span className="text-sm font-medium">Express</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DatabaseIcon className="w-10 h-10" />
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DatabaseIcon className="w-10 h-10" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <WindIcon className="w-10 h-10" />
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <NutIcon className="w-10 h-10" />
              <span className="text-sm font-medium">Jest</span>
            </div>
          </div>
        </div>
      </section>
      {/* {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))} */}
    </div>
  );
};
