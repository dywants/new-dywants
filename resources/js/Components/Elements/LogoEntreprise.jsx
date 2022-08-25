import { Link } from "@inertiajs/inertia-react";
import React from "react";

const LogoEntreprise = ({ image, name, url }) => {
    return (
        <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center hover:shadow-md">
            <Link href={url}>
                <img src={image} alt={name} className="w-full object-contain" />
            </Link>
        </div>
    );
};

export default LogoEntreprise;
