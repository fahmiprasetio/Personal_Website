import { GraduationCap } from "lucide-react";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="pt-0 pb-24 px-4 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Organizational Experiences */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Organizational Experiences
            </h3>
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="relative bg-card border border-muted rounded-xl py-6 px-8 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-glow">
                    UFO Veteran Jakarta - Graphic Design
                  </h4>
                  <span className="text-xs font-semibold bg-primary text-background px-2 py-1 rounded-full">
                    2023 - 2024
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-justify">
                  Served as a{" "}
                  <span className="text-primary font-semibold">
                    creative division
                  </span>{" "}
                  member, assisting in the design and execution of an exhibition
                  held at the National Library of Indonesia, Jakarta, on June 3,
                  2024.
                </p>
              </div>
              {/* Card 2 */}
              <div className="relative bg-card border border-muted rounded-xl py-6 px-8 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-glow">
                    KSM Multimedia - UI/UX Design
                  </h4>
                  <span className="text-xs font-semibold bg-primary text-background px-2 py-1 rounded-full">
                    2024
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-justify">
                  Joined KSM Multimedia as a member, assisting peers with design
                  skills and taking part in creative discussions and project
                  brainstorming sessions.
                </p>
              </div>
              {/* Card 3 */}
              <div className="relative bg-card border border-muted rounded-xl py-6 px-8 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-glow">
                    KSM Android - Front End Web Developer
                  </h4>
                  <span className="text-xs font-semibold bg-primary text-background px-2 py-1 rounded-full">
                    2024 - present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-justify">
                  Actively contributed to multiple event projects within KSM
                  Android, focusing on front-end web development tasks and
                  successfully completing a capstone project as a final
                  deliverable.
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            {/* Education timeline cards */}
            <div className="space-y-8 relative">
              {/* Card 1 */}
              <div className="relative bg-card border border-muted rounded-xl p-6 shadow-md flex items-center justify-between gap-4">
                {/* kiri */}
                <div className="flex flex-col items-start gap-1">
                  {/* tahun */}
                  <span className="bg-card border-1 border-white text-white text-xs mb-5 font-semibold px-2 py-0.5 rounded-md">
                    2018–2023
                  </span>
                  {/* nama sekolah */}
                  <h4 className="text-xl text-glow font-semibold">
                    SMK Negeri 1 Temanggung
                  </h4>
                  {/* jurusan */}
                  <span className="inline-block text-md font-semibold ">
                    Analytical Chemistry
                  </span>
                </div>

                {/* kanan */}
                <div className="w-50 h-44 rounded-md overflow-hidden">
                  <img
                    src="/projects/smkn-1-tmg.jpg"
                    alt="SMK Negeri 1 Temanggung Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-card border border-muted rounded-xl p-6 shadow-md flex items-center justify-between gap-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="bg-card border-1 border-white text-white text-xs mb-5 font-semibold px-2 py-0.5 rounded-md">
                    2023 - Present
                  </span>
                  <h4 className="text-xl text-glow font-semibold">
                    UPN Veteran Jakarta
                  </h4>
                  <span className="inline-block text-sm text-left font-semibold ">
                    Computer Science - Information System
                  </span>
                </div>

                {/* kanan */}
                <div className="w-50 h-44 rounded-md overflow-hidden">
                  <img
                    src="/projects/upnvj.jpg"
                    alt="SMK Negeri 1 Temanggung Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap mx-auto justify-center  gap-4">
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/reactjs.svg"
                alt="React"
                className="h-9 w-9 invert"
              />
              React
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/tailwind.svg"
                alt="Tailwind CSS"
                className="h-9 w-9 invert"
              />
              Tailwind CSS
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/figma.svg"
                alt="Figma"
                className="h-9 w-9 invert"
              />
              Figma
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/photoshop.svg"
                alt="Photoshop"
                className="h-9 w-9 invert"
              />
              Photoshop
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/javascript.svg"
                alt="JavaScript"
                className="h-7 w-7 invert"
              />
              JavaScript
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/github.svg"
                alt="GitHub"
                className="h-9 w-9 invert"
              />
              GitHub
            </span>
            <span className="flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-full text-xl">
              <img
                src="/projects/git.svg"
                alt="Git"
                className="h-9 w-9 invert"
              />
              Git
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
