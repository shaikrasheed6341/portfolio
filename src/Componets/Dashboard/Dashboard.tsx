import { useTypewriter } from 'react-simple-typewriter';
import { FaDownload } from "react-icons/fa";

function Dashboard() {
  const [text] = useTypewriter({
    words: ['Full-Stack Web Developer', 'Problem Solver','Koi tensan na ley bhai, ham tho banaleygey'],
    loop: 0,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 text-white p-5">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl gap-10">
        
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 z-[-1]">
          
          <h1 className="text-5xl text-start font-extrabold bg-gradient-to-tl from-purple-400 to-violet-600 bg-clip-text text-transparent leading-tight animate-fadeInUp">
            Hi, I'm <span className="text-gray-100 flex">Shaik Rasheed</span>
          </h1>
          <p className="mt-5 text-2xl font-medium leading-relaxed animate-slideIn  text-gray-200">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-violet-400">
              {text}
            </span>
          </p>

          
          <div className="mt-10 flex justify-center lg:justify-start gap-5 animate-fadeInDown">
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold bg-gradient-to-br from-violet-600 to-violet-700 hover:from-violet-600 hover:to-violet-800 transition-all rounded-xl shadow-lg transform hover:scale-110 lg:mr-15"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-15 py-3   text-lg font-semibold bg-violet-700 hover:bg-gray-800 transition-all rounded-xl shadow-lg transform hover:scale-110"
            >
              Hire Me
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-6 flex justify-center lg:justify-start lg:mt-10 ml-15 animate-fadeInUp">
            <a
              href="/resume.pdf"
              download="Shaik_Rasheed_Resume.pdf"
               className="  flex items-center gap-2 px-7 py-3  mr-25 text-lg text-gray-100 font-bold bg-gradient-to-br from-violet-600 to-violet-700 hover:from-violet-600 hover:to-gray-200 transition-all rounded-xl shadow-lg transform hover:scale-110  lg:mt-2 ml-10  "
            >
              <FaDownload className='text-white' /> Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center z-[-1]">
          <img
            src="/main.svg"
            alt="main"
            className="w-[70%] lg:w-[450px] animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
