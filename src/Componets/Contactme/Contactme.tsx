import { CgProfile, CgMail } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";

const Contactme = () => {
    return (
        <div className=" my-10  flex items-center justify-center ">
            <div className="bg-white shadow-2xl rounded-2xl z-[-1] p-6 w-full max-w-lg">
                <h1 className="font-bold mb-6 text-4xl  text-center bg-gradient-to-r from-violet-600 to-violet-400 text-transparent bg-clip-text drop-shadow-lg">
                    Contact Me
                </h1>

                <div className="space-y-6">
                    
                    <div className="flex items-center space-x-3">
                        <CgProfile className="text-violet-600 text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Name</h2>
                            <p className="text-gray-600">Shaik Rasheed</p>
                        </div>
                    </div>

                    
                    <div className="flex items-center space-x-3">
                        <CgMail className="text-violet-600 text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
                            <p className="text-gray-600">shaikrasheed6341@gmail.com</p>
                        </div>
                    </div>

                    
                    <div className="flex items-center space-x-3">
                        <IoLocation className="text-violet-600 text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">Location</h2>
                            <p className="text-gray-600">Hyderabad</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">Feel free to reach out anytime!</p>
                </div>
            </div>
        </div>
    );
};

export default Contactme;