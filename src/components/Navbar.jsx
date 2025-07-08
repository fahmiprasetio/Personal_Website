import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 px-4">
      {/* Navbar Container */}
      <div
        className={`transition-all duration-500 ease-in-out mx-auto flex items-center justify-between px-4 ${
          isScrolled
            ? "max-w-3xl py-3 mt-3 rounded-xl bg-primary/20 backdrop-blur-lg shadow-lg"
            : "max-w-6xl py-5"
        }`}
      >
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Fahmi</span> Prasetio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>

      {/* Toggle Button (positioned outside the navbar container) */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={`md:hidden p-2 text-foreground z-50 transition-all duration-300 ${
          isMenuOpen ? "fixed top-4.5 right-4" : "absolute top-4.5 right-4"
        }`}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md w-full h-screen flex flex-col items-center justify-center transition-all duration-300 md:hidden">
          <div className="flex flex-col space-y-8 text-xl mt-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
