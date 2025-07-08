import { ArrowDown, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 ">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-6xl font-bold tracking-tight mb-3 md:mb-5">
            <span className="opacity-0 animate-fade-in">
              Hello There! I'm <br />
              Naufal{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Fahmi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Prasetio
            </span>
          </h1>
          <p className="text-md md:text-xl lg:text-xl text-muted-foreground max-w-6xl mx-auto opacity-0 animate-fade-in-delay-3">
            I transform complex problems into simple, meaningful, and effective
            web solutions, delivering clarity and impact through thoughtful,
            user-centered design.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex items-center justify-center gap-3 -mt-4 md:mt-6">
            <a
              href="#project"
              className="cosmic-button w-60 max-w-xs !text-sm md:!text-xl rounded-xl py-2.5 hover:scale-102 inline-block text-center"
            >
              View My Project
            </a>
            <a
              href="https://github.com/fahmiprasetio"
              target="_blank"
              rel="noopener noreferrer"
              className=" cosmic-button transition duration-300 p-1.5 sm:p-2 rounded-xl border-white "
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/fahmiprasetio"
              target="_blank"
              rel="noopener noreferrer"
              className=" cosmic-button transition duration-300 p-1.5 sm:p-2 rounded-xl border-white"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
