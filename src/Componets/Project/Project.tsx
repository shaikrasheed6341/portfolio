import Cardcomponent from "./Cardcomponent";
import invoice from "/invoice.svg";
import villa from "/villa.svg";
import Portfolio from "/portfolio.svg";

function Project() {
  return (
    <div className="md:rounded-2xl shadow-2xl overflow-hidden">
      <div className="text-center mb-10 md:mb-10 lg:mb-10">
        <span className="bg-white text-6xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-tl from-violet-600 to-violet-200 text-transparent bg-clip-text drop-shadow-lg">
          Projects
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8">
        <div className="transform transition duration-500 hover:scale-105">
          <Cardcomponent
            imgs={[invoice]}
            title="Invoice Generator"
            github="https://github.com/shaikrasheed6341/invoiceGenrator"
            live="#"
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <Cardcomponent imgs={[villa]} 
          title="Villa Rent" 
          
          github= "https://github.com/shaikrasheed6341/VillaRent"
          live="#"
          />
        </div>
         <div className="transform transition duration-500 hover:scale-105">
         <Cardcomponent 
          title="Portfolio"
          imgs={[Portfolio]}
          github="https://github.com/shaikrasheed6341/portfolio"
          live="#"
         />
         
   
   </div>
      </div>
    </div>
  );
}

export default Project;