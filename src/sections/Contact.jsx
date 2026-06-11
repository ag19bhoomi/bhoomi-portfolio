import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-[#050816] border-t border-white/10 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side */}
          <div>
            <h3 className="text-4xl font-bold text-white">
              Bhoomi Agrawal
            </h3>

            <p className="text-gray-400 mt-3 text-lg">
              Aspiring Software Engineer • Full Stack Developer
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center gap-8">
            
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhoomiagrawal175@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope size={20} className="text-red-400" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/ag19bhoomi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              <FaGithub
                size={20}
                className="text-white"
              />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bhoomi-agarwal-869a1428b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin
                size={20}
                className="text-blue-400"
              />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/bhoomi1098/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              <SiLeetcode
                size={20}
                className="text-yellow-400"
              />
              <span>LeetCode</span>
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 Bhoomi Agrawal. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Contact;