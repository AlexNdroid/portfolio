import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          📩 Contacto
        </h2>

        <p className="text-gray-700 text-lg mb-12">
  Siempre estoy aprendiendo y creando. Si quieres decir hola o hablar de proyectos, ¡me encantaría conocerte! 😊
</p>

        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl p-10">

          {/* Email */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaEnvelope className="text-indigo-600" size={28} />
            </div>

            <a
              href="mailto:alexma4@gmail.com"
              className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition"
            >
              alexma4@gmail.com
            </a>
          </div>

          {/* Redes */}
          <div className="flex flex-col md:flex-row justify-center gap-8">

            <a
              href="https://www.linkedin.com/in/alex-mu%C3%B1oz-99555082/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              <FaLinkedin size={22} />
              LinkedIn
            </a>

            <a
              href="https://github.com/AlexNdroid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition shadow-md hover:shadow-lg"
            >
              <FaGithub size={22} />
              GitHub
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;