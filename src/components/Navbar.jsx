import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50 transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer select-none transition-transform duration-300 hover:scale-105">
          <span className="bg-linear-to-b from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Alex
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          {["projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="capitalize hover:text-blue-600 transition"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/AlexNdroid" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-600 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alex-mu%C3%B1oz-99555082/" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl cursor-pointer hover:text-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {["projects", "skills", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className="capitalize hover:text-blue-600 transition"
                >
                  {section}
                </a>
              </li>
            ))}
            <div className="flex gap-6 text-xl mt-4">
              <a href="https://github.com/AlexNdroid" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/alex-mu%C3%B1oz-99555082/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contáctame
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;