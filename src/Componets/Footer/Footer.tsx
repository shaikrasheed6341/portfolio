const Footer = () => {
    return (
        <footer className="mt-6 bg-gradient-to-tl from-violet-600 to-violet-400 rounded-sm text-white py-6 text-center shadow-inner">
            <h1 className="text-2xl font-semibold mb-2">Let’s Connect!</h1>
            <p className="text-sm mb-4">© 2025 Shaik Rasheed. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="Footer" className="hover:text-violet-200 transition duration-300">Privacy Policy</a>
                <span>|</span>
                <a href="Footer" className="hover:text-violet-200 transition duration-300">Terms of Service</a>
        
            </div>
        </footer>
    );
};

export default Footer;