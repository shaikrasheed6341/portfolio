import React from "react";
import { FaMagic } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";


const svgimages = [FaMagic , FaBookOpen, BsGraphUpArrow];



interface Quationcardprop {
    title: string,
    para: string,
    iconindex: number
}

const Quationcard: React.FC<Quationcardprop> = ({ title, para, iconindex }) => {
    const Iconcomponent = svgimages[iconindex % svgimages.length]
    return (
        <div>
            <div className=" bg-white p-2 rounded-2xl  my-2  shadow-lg sh shadow-zinc-600 " >
                <div className=" flex justify-center items-center  my-3  ">
                    <Iconcomponent className="  w-10 h-10 mt-2 mb-3  text-violet-600 bg-gradient-to-tl   " />
                </div>
                <p className="font-bold text-xl my-1 ">{title}</p>
                <p className="font-sans text-sm text-start my-2 leading-5">{para}</p>
            </div>
        </div>
    )

}

export default Quationcard;