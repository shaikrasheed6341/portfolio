import Cardcomponent from "./Cardcomponent";
import invoice from "/invoice.svg";
import villa from "/villa.svg"
import Portfolio from "/portfolio.svg"

function Project() {
  return (
    <div className="div">
      <div className="text-center mt-5">
        <span className="bg-white text-4xl font-extrabold bg-gradient-to-tl from-violet-600 to-violet-200 text-transparent bg-clip-text ">
          Project
        </span>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-5">
        <div>
          <Cardcomponent imgs={[invoice]} title="Invoice Generator" />
        </div>

        <div>
          <Cardcomponent imgs={[villa]} title="Villa Rent" />
        </div>

        <div className="col-span-2   w-1/2  mx-auto justify-center">
          <Cardcomponent imgs={[Portfolio]} title="Portfolio" />
        </div>
      </div>
    </div>
  );
}

export default Project;
