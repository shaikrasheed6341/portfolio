import { useTypewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

function Dashboard() {
  const [text] = useTypewriter({
    words: ["Full-Stack Web Developer", "Problem Solver"],
    loop: 0,
  });

  // Function for smooth scrolling
  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white mt-10 p-5">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-5xl gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 z-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-tl from-purple-400 to-violet-600 bg-clip-text text-transparent leading-tight animate-fadeInUp">
            Hi, I'm <span className="text-gray-100">Shaik Rasheed</span>
          </h1>
          <p className="mt-5 text-2xl font-medium leading-relaxed animate-slideIn text-gray-200">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-violet-400">
              {text}
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center lg:justify-start gap-5 animate-fadeInDown lg:space-x-10">
            <a
              href="#project"
              className="px-6 py-3 text-lg font-bold bg-gradient-to-br from-violet-600 to-violet-700 hover:from-violet-600 hover:to-violet-800 transition-all rounded-xl shadow-lg transform hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project"); // Links to Project component
              }}
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-15 py-3 text-lg font-bold bg-violet-700 hover:bg-gray-800 transition-all rounded-xl shadow-lg transform hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact"); // Links to Contactme component
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-6 flex justify-center lg:justify-start lg:mt-10 lg:ml-20 animate-fadeInUp">
            <a
              href="/shaikrasheed.pdf"
              download="Shaik_Rasheed_Resume.pdf"
              className="flex items-center gap-2 px-7 py-3 text-lg text-gray-100 font-bold bg-gradient-to-br from-violet-600 to-violet-700 hover:from-violet-600 hover:to-gray-200 transition-all rounded-xl shadow-lg transform hover:scale-110"
            >
              <FaDownload className="text-white" /> Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center z-10">
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