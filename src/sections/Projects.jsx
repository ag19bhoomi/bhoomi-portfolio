import { motion } from "framer-motion";

const projects = [
  {
    title: "FoodGenie",
    github: "https://github.com/ag19bhoomi/FoodGenie",
    status: "In Active Development",
    description:
      "A modern food ordering platform focused on seamless restaurant discovery, intuitive ordering, and real-time updates.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
  },

  {
    title: "Amazon Clone",
    github: "https://github.com/ag19bhoomi/amazon-clone",
    status: "Completed",
    description:
      "A full-stack e-commerce platform featuring authentication, product management, shopping cart functionality, and a responsive user experience.",
    tech: ["React", "PostgreSQL", "Node.js"],
  },

  {
    title: "EduScan",
    github: "https://github.com/ag19bhoomi/eduscan",
    status: "Completed",
    description:
      "An AI-powered educational tool leveraging OCR and NLP to process and analyze academic content.",
    tech: ["OCR", "NLP", "OpenCV"],
  },

  {
    title: "REWIRe",
    github: "https://github.com/ag19bhoomi/rewire_flutterapp",
    status: "Completed",
    description:
      "A personalized study companion helping students build effective learning habits through adaptive planning.",
    tech: ["Flutter", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a0f1f] text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-medium tracking-wider">
            FEATURED WORK
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-4">
            Projects That
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Define Me
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            A collection of projects that showcase my journey from learning
            development fundamentals to building complete products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-6"
            >
              {/* Project Banner */}
              <div className="relative h-56 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0f172a] overflow-hidden flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute -top-10 -right-10 h-40 w-40 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl" />

                <h3 className="relative text-5xl md:text-6xl font-black tracking-wider text-center">
                  {project.title}
                </h3>
              </div>

              {/* Status */}
              <span className="text-cyan-400 text-sm font-medium">
                {project.status}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold mt-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition-all duration-300 font-medium"
              >
                View Source Code →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;