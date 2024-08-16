import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "./_hero";
import Projects from "./_projects";
import { SignupFormDemo } from "./_contact";

const Home = () => {
  return (
      <>
          <Hero />
          <Projects />
          <div className="flex justify-end container">
              <SignupFormDemo />
          </div>
      </>
  );
};

export default Home;
