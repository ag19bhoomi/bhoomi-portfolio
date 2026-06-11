


const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0a0f1f] text-white flex items-center px-6 py-20 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 font-medium mb-3">
            BEYOND THE CODE
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            From Algorithms
            <br />
            To Applications
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Technology, for me, is more than writing code—it's about solving problems that matter.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-5">
            I enjoy building software that combines thoughtful design, robust engineering, and seamless user experiences. Whether it's developing web applications, experimenting with mobile technologies, or tackling algorithmic challenges, I am constantly driven by curiosity and the desire to create meaningful impact.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-5">
            Currently, I am expanding my expertise in full-stack development while exploring modern mobile application development through Flutter.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="grid gap-5">

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-cyan-400 text-xl font-semibold mb-2">
              Academics
            </h3>

            <p className="text-gray-300">
              9.3 CGPA
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Ranked among the Top 5 students in my batch.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-purple-400 text-xl font-semibold mb-2">
              Problem Solving
            </h3>

            <p className="text-gray-300">
              270+ LeetCode Problems
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Maintained a personal best coding streak of 101 consecutive days while consistently practicing Data Structures, Algorithms, and competitive programming.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-pink-400 text-xl font-semibold mb-2">
              Builder Mindset
            </h3>

            <p className="text-gray-300">
              FoodGenie • EduScan • REWIRe
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Focused on transforming ideas into useful products.
            </p>
          </div>

        </div>

      </div>
    
    </section>
  );
};

export default About;