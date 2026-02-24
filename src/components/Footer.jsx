import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 py-8 shadow-inner overflow-hidden">
      
      {/* Fondos decorativos blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-orange-300 opacity-20 blur-2xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-6">
        
        {/* Redes sociales */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/AlexNdroid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-mu%C3%B1oz-99555082/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: "#0A66C2" }} 
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Texto */}
        <p className="text-gray-700 text-sm">
          &copy; 2026 Alex. Todos los derechos reservados.
        </p>

        {/* Botón de volver al top */}
        <a
          href="#"
          className="inline-block mt-2 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition transform hover:scale-110 shadow-md hover:shadow-lg"
        >
          ↑ Volver arriba
        </a>
      </div>
    </footer>
  );
}

export default Footer;