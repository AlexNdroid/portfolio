
function Projects() {
  const project = {
    name: "Music Rec App",
    description: "Aplicación fullstack con autenticación JWT, panel de administración y recomendaciones musicales por género.",
    tech: ["React","Node.js","MongoDB","Tailwind"],
    live: "https://music-rec-api.netlify.app/",
    github: "https://github.com/AlexNdroid/music-rec-api",
    image: import.meta.env.BASE_URL + "images/music-rec.png"
  };

  return (
    <section id="projects" className="py-28 bg-linear-to-b from-gray-50 to-gray-100 relative">
      {/* Fondo decorativo */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          🚀 Proyectos
        </h2>

        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">

          {/* Imagen */}
          <div className="w-full md:w-1/2 p-10 flex justify-center">
            <div className="w-full max-w-lg aspect-video bg-gray-50 rounded-2xl shadow-inner p-4 transition hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-xl"/>
            </div>
          </div>

          {/* Contenido */}
          <div className="w-full md:w-1/2 p-10 space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold bg-indigo-100 text-indigo-700 rounded-full">
              Fullstack Project
            </span>
            <h3 className="text-3xl md:text-4xl font-bold">{project.name}</h3>
            <p className="text-gray-600 text-lg">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech,i) => (
                <span key={i} className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium border border-indigo-100 hover:bg-indigo-100 transition">
                  {tech}
                </span>
              ))}
            </div>

            {/* Botones */}
            <div className="flex gap-4 flex-wrap">
              <a href={project.live = "https://music-rec-api.netlify.app/"} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
                🌐 Live Demo
              </a>
              <a href={project.github = "https://github.com/AlexNdroid/music-rec-api"} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition shadow-md hover:shadow-lg">
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;