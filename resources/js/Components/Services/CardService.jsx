import { Link } from "@inertiajs/inertia-react";
import React from "react";

const CardServices = ({ src, title, description, url }) => {
    return (
        <Link
            href={url}
            className="bg-white p-[40px] overflow-hidden rounded-md hover:scale-105 transition duration-75 ease-out"
        >
            <img src={src} alt="" className="mb-4" />
            <h3 className="text-base text-secondary font-semibold leading-8 mb-2">
                {title}
            </h3>
            <p className="leading-6 text-texte text-base font-normal mb-2">
                {description}
            </p>
        </Link>
    );
};

export default CardServices;
