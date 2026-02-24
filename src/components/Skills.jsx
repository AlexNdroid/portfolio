function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          🛠 Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-600">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100 hover:bg-indigo-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;