const ProfileImg = import.meta.env.BASE_URL + "images/foto-perfil.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-b from-blue-600 via-purple-600 to-indigo-700 text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Hola, soy <span className="text-yellow-300">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Fullstack Developer
          </h2>
          <p className="text-lg md:text-xl max-w-xl text-white/90">
            Desarrollo aplicaciones web modernas, escalables y funcionales combinando frontend atractivo y backend robusto.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium shadow-md hover:shadow-lg">
              Ver proyectos
            </a>
            <a href="#contact" className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition font-medium">
              Contáctame
            </a>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap justify-center md:justify-start text-sm">
            {["JavaScript","React","Node.js","MongoDB","Tailwind"].map((tech) => (
              <span key={tech} className="bg-white/20 px-3 py-1 rounded-full hover:scale-105 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg transition hover:scale-105">
            <img src={ProfileImg} alt="Alex" className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl">
        ↓
      </div>
    </section>
  );
}

export default Hero;