import { motion } from "framer-motion";

const Hero = () => {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white px-6">

      {/* Background Glow 1 */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Background Glow 2 */}
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-lg mb-4"
        >
          From Algorithms To Applications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Bhoomi Agarwal
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Web Developer • Problem Solver 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Building beautiful applications, solving algorithmic challenges,
          and turning ideas into products.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
            <button
            onClick={() =>
            document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
            }
            >
            View Projects
           </button>
          </button>

          <div className="flex gap-4">
            <a
               href="/Bhoomi-CV.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
            >
               View Resume
            </a>

            <a
               href="/Bhoomi-CV.pdf"
               download
               className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
            >
               Download Resume
            </a>
           </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">270+</h3>
            <p className="text-gray-400">LeetCode Problems</p>
          </div>

         <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
         <h3 className="text-3xl font-bold text-purple-400">9.3 CGPA</h3>
         <p className="text-gray-400">Ranked Among Top 5 Students</p>
         </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-pink-400">4</h3>
            <p className="text-gray-400">Major Projects</p>
          </div>

        </div>

      </div>
    </section>
    
  );
};

export default Hero;