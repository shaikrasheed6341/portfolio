import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-violet-500 dark:bg-gray-900 shadow-md fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                
                <div className="text-2xl font-bold text-gray-800 dark:text-white">SHAIK</div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-6 text-gray-700 dark:text-gray-300">
                    {["Home", "About", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
                        <li key={item} className="hover:text-500 transition cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="sm:hidden text-2xl text-gray-700 dark:text-white" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu - Slide In Effect */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-white dark:bg-gray-800 shadow-lg p-6 transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                } sm:hidden`}
            >
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-white" onClick={() => setOpen(false)}>
                    <FaTimes />
                </button>

                {/* Mobile Links */}
                <ul className="mt-10 space-y-4 text-gray-700 dark:text-gray-300">
                    {["Home", "About", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
                        <li key={item} className="text-lg hover:text-blue-500 transition cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
