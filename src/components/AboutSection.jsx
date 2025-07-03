import profileImage from "../assets/foto-profil-resize.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Section kiri (gambar) */}
          <div className="relative w-full max-w-sm mx-auto lg:mr-28">
            {/* Card background */}
            <div className="absolute inset-0 -rotate-3 bg-primary/70 rounded-xl shadow-lg z-0"></div>
            {/* foto profile */}
            <div className="relative z-10 overflow-hidden rounded-xl shadow-xl border border-border">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section kanan */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold">
              Creative Web Developer & UI/UX Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a university student who has been actively learning and
              practicing web development for the past two years. My journey has
              been driven by curiosity and dedication to building modern,
              responsive, and user-friendly websites.
            </p>

            <p className="text-muted-foreground">
              Alongside coding, I have a strong creative side as a designer
              bringing ideas to life with clean interfaces and thoughtful user
              experiences. I constantly challenge myself to blend technical
              skill with visual creativity, ensuring every project is both
              functional and visually engaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button lg:w-50">
                Get In Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
