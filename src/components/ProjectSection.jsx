import { ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Atap Nusantara",
    description:
      "A web platform that provides information about climbable mountains across Indonesia, tailored for hiking enthusiasts.",
    video: "/projects/atap-nusantara.mp4",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://atapnusantarawebsite.vercel.app/",
    githubUrl: "https://github.com/fahmiprasetio/Atap-Nusantara-Website",
  },
  {
    id: 2,
    title: "Tech Sentinel",
    description:
      "A recommendation platform that helps users compare and discover the best laptops, phones, and other tech products available to the public.",
    video: "/projects/tech-sentinel.mp4",
    tags: ["ReactJS", "Tailwind CSS", "Node.js"],
    demoUrl: "http://tech-sentinel-website-review-tech.vercel.app",
    githubUrl:
      "https://github.com/fahmiprasetio/TechSentinel-Tech-Review-Website",
  },
  {
    id: 3,
    title: "Aksara Suara",
    description:
      "An online marketplace for booking tickets to cultural events across the Indonesian archipelago and purchasing traditional cultural accessories.",
    video: "/projects/aksara-suara.mp4",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
    demoUrl: "https://aksara-suara-oa4c.vercel.app/",
    githubUrl: "https://github.com/fahmiprasetio/Aksara_Suara",
  },
  {
    id: 4,
    title: "Personal Portofolio Website",
    description:
      "A personal portfolio website showcasing my professional background, skills, and a curated selection of projects I have developed.",
    video: "/projects/personal_website.mp4",
    tags: ["ReactJS", "Tailwind CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/fahmiprasetio/Personal_Website",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Website<span className="text-primary"> Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects, thoughtfully built with a strong
          focus on performance, accessibility, and user experience. Each project
          not only showcases my progress in web development but also reflects my
          creativity and attention to visual detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xl card-hover border"
            >
              <div className="h-48 overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pl-7 py-4  ">
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-md bg-primary/10 text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-left ml-8 text-glow">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 text-justify mx-8">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 ml-8 mb-8 border-2 border-white/50 rounded-md p-1.5 hover:border-primary"
                  >
                    <ExternalLink size={25} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 mb-8 border-2 border-white/50 rounded-md p-1.5 hover:border-primary"
                  >
                    <Github size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
