import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="mt-6 bg-gradient-to-tl from-violet-600 to-violet-400 rounded-sm text-white py-6 text-center shadow-inner">
            <h1 className="text-2xl font-semibold mb-2">Let’s Connect!</h1>
            <div className="div flex justify-center space-x-6 mb-3 ">
                <div >
                    <a href="https://x.com/shaikrasheed634" target="_blank" className="text-3xl">
                    <FaXTwitter />
                    </a>
                    
                     </div>


                <div className="div ">
                    <a href="https://www.linkedin.com/in/shaik-rasheed-4b76a9276/" target="_blank" className="text-3xl" >
                        <FaLinkedin target="_blank" />
                    </a>
                </div>
            </div>
            <p className="text-sm mb-4">© 2025 Shaik Rasheed. All rights reserved.</p>
            
            <div className="text-center text-sm ml-3">✨ Made with &#x1F493;
            by Shaik Rasheed ✨</div>
        </footer>
    );
};

export default Footer;