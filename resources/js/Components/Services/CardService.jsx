import { Link } from '@inertiajs/inertia-react';
import React from 'react';

const CardServices = ({src,title, description, url}) => {
    return (
        <div className='bg-white p-[48px]'>
            <img src={src} alt="" className="mb-4" />
            <h3 className="text-base font-semibold leading-8 mb-2">{title}</h3>
            <p className="leading-6 text-texte text-base font-normal mb-2">{description}</p>
            <Link href={url} className="text-secondary text-base font-medium">
               Voir plus
               <img className="w-6 h-6 ml-2 inline-flex" src="assets/images/icons/right-arrow.png" alt="right-arrow icon" />
            </Link>
        </div>
    );
};

export default CardServices;