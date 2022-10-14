import React from 'react';
import Image from '../Elements/Image';
import TitleSection from '../Elements/TitleSection';

const Presentation = () => {
    return (
        <div className="">
            <div className="p-10 bg-[#F4F5F5]">
                <TitleSection title={"DYWANTS TECHNOLOGIE AND SERVICES (DTS)"}/>
                <p className='text-texte text-base leading-6 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident, architecto laudantium at voluptatem illum odit. Minus, dignissimos corrupti exercitationem dolorem vero cupiditate eum est, ipsa libero voluptates ipsum unde.</p>
            </div>
            <div className='w-full h-[340]'>
                <Image src={"/assets/images/apropos/team.png"}/>
            </div>
        </div>
    );
};

export default Presentation;