import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
      transition-all duration-300
      ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/10"
          : "bg-white/5 backdrop-blur-md border border-white/5"
      }
      rounded-full px-8 py-4`}
    >
      <div className="flex items-center gap-8">

        <a
          href="#"
          className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          BA
        </a>

        <a
          href="#about"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          About
        </a>
      
        <a
          href="#contact"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          Contact
        </a>

      </div>
    </nav>
  );
};

export default Navbar;