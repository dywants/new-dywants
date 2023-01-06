import React from "react";
import Image from "./Image";

const CardProcess = ({ icon, title, description, number = "" }) => {
    return (
        <div className="border border-[#1B3567] p-6 relative rounded-md bg-transparent z-10 mt-6 md:mt-4">
            <div>
                <h3 className="text-base font-semibold leading-8 mb-2">
                    {title}
                </h3>
                <p className="leading-6 text-texte text-base font-normal mb-2">
                    {description}
                </p>
            </div>
            <div className="absolute -top-6 left-4 w-[60px] h-[40px]  md:w-[80px] md:h-[60px] bg-white border-[#1B3567] rounded-md border flex items-center justify-center z-40 shadow-md">
                <p>{number}</p>
            </div>
        </div>
    );
};

export default CardProcess;
