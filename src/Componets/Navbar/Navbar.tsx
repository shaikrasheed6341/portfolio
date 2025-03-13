import React from "react";
function Navbar() {
  return (
    <div className="lg: bg-gray-100 p-2 w-full shadow-xl rounded-md fixed top-0 " >
      <div className="lg: flex justify-between mx-4">
        <div className="lg: text-sm font-bold shadow-xl hover:text-sky-900 " >SHAIK</div>
        <div> 
          <ul className=" lg: flex space-x-8">
            <li className="lg: text-sm text-black font-semibold shadow-xl hover:text-sky-900">Home</li>
            <li className="lg: text-sm text-black font-semibold shadow-xl hover:text-sky-900">Tech Stack</li>
            <li className="lg: text-sm text-black font-semibold shadow-xl hover:text-sky-900">Project</li>

            <li className="lg: text-sm text-black font-semibold shadow-xl hover:text-sky-900">Resume</li>
            <li className="lg: text-sm text-black font-semibold shadow-xl hover:text-sky-900">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar;