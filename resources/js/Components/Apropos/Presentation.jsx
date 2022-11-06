import React from 'react';
import Image from '../Elements/Image';
import TitleSection from '../Elements/TitleSection';

const Presentation = () => {
    return (
        <div className="">
            <div className="p-10 bg-[#F4F5F5]">
                <TitleSection title={"DYWANTS TECHNOLOGIE AND SERVICES (DTS)"}/>
                <p className='text-texte text-base leading-6 mt-2'>Ce en quoi on croit chez nous, c'est que tous entreprise quelque soit sa taille à droit à la meilleure prestation et service</p>
                <p className='text-texte text-base leading-6 mt-2'>Nous vous conseillons et accompagnons en nous basant sur notre expérience dans le choix des technologies et des partenaires, UX/UI, financement…</p>
            </div>
            <div className='w-full h-[300px] overflow-hidden'>
                <Image className='' src={"/assets/images/meeting-smart.jpg"}/>
            </div>
        </div>
    );
};

export default Presentation;