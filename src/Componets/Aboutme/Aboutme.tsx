import myimage from "/myimage.png";

export default function Aboutus() {
  return (
    <div className="mt-5 mb-5 px-4 sm:px-6 lg:px-8">
      
      <div className="mb-4 grid grid-cols-1 justify-center text-center">
        <span className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-tl from-violet-600 to-violet-200 text-transparent bg-clip-text mb-2">
          About Us
        </span>
      </div>

      
      <div className="bg-gradient-to-tr from-violet-600 to-violet-300 p-5 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
  
          <div className="flex justify-center">
            <img
              src={myimage}
              alt="Shaik Rasheed"
              className="w-48 sm:w-60 md:w-72 lg:w-80 rounded-2xl shadow-lg shadow-white"
            />
          </div>

          {/* Text Section */}
          <div className="p-3 text-start text-zinc-900 font-sans">
            <p className="text-base sm:text-lg mb-2">
              👋 Hello! I’m <span className="font-bold">Shaik Rasheed</span>, a passionate web developer dedicated to helping you build your next big project.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              🚀 Beyond coding, I’m a problem solver who thrives on bringing creative ideas to life. From dynamic web apps to backend solutions, I believe in clean, maintainable code and user-friendly experiences. When I’m not developing, you’ll find me exploring new tech, working on personal projects, or jogging on weekends to recharge my mind.
            </p>

            <p className="text-base sm:text-lg font-semibold mt-3 text-zinc-900">
              Let’s build something amazing together! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
