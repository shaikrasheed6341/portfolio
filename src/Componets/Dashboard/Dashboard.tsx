import { useTypewriter } from 'react-simple-typewriter';
import { FaDownload } from "react-icons/fa";

function Dashboard() {
  const [text] = useTypewriter({
    words: ['Full-Stack Web Developer', 'Problem Solver', 'Lifelong Learner'],
    loop: 0,

  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br  text-white p-5">
      <div className="flex  lg:flex items-center justify-between w-full max-w-5xl">
        <div className="lg:w-1/2 flex   mt-10">
          <img
            src="/main.svg"
            alt="main"
            width={300}
            className="animate-fadeInUp drop-shadow-lg z-[-1] relative "
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 via-violet-500 to-violet-700 bg-clip-text text-transparent leading-tight animate-slideIn">
            Hi, I'm Shaik Rasheed
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed animate-fadeIn">
            <span className="text-2xl font-bold bg-gradient-to-br from-white to-red-300 text-transparent bg-clip-text">
              {text}
            </span>
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-6 animate-fadeInDown">

            <button> <a
              href="#projects"
              className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-violet-600 to-purple-700 hover:from-purple-700 hover:to-violet-800 transition-all rounded-xl shadow-lg transform hover:scale-105"
            >
              Explore My Work
            </a>
            </button>
            <button>
              <a
                href="#contact"
                className="px-6 py-2 text-sm font-bold bg-violet-700 border-gray-500 hover:bg-gray-800 transition-all rounded-xl shadow-lg transform hover:scale-105"
              >
                Hire Me
              </a>
            </button>
          </div>

          {/* Resume Download Button */}
          <div className="flex justify-center lg:justify-start mt-8 ml-8 z-[-1] relative ">
            <button>
              <a
                href="/resume.pdf"
                download="Shaik_Rasheed_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2 text-sm font-sm font-bold bg-gradient-to-tl from-violet-600 to-violet-300 hover:from-violet-600 hover:to-gray-200 transition-all rounded-xl shadow-lg transform hover:scale-105 text-gray-900"
              >
                <FaDownload /> Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;