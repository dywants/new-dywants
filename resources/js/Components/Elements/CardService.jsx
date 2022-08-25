import React from "react";
import IconService from "@/Components/IconService";

const CardService = ({ icon, title, description }) => {
    return (
        <div className="text-left mb-4 p-10 bg-[#FFB400] rounded-lg shadow-md cursor-pointer">
            <div className="p-4 w-[180px] h-[180px] flex justify-center items-center mx-auto">
                <IconService icon={icon} />
            </div>
            <h3 className="text-[20px] text-center font-semibold leading-6 my-2">
                {title}
            </h3>
            <p className="text-[18px] text-gray-600 leading-snug py-2">{description}</p>
        </div>
    );
};

export default CardService;
