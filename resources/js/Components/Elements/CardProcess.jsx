import React from 'react';
import Image from './Image';

const CardProcess = ({icon, title, description, number = ""}) => {
    return (
        <div className='border border-gray-300 p-6 relative rounded-sm bg-white'>
            <div className='flex gap-2 items-start'>
                <Image className='w-[47px] h-[47px]' src={icon} name={title}/>
                <div>
                    <h3 className="text-base font-semibold leading-8 mb-2">{title}</h3>
                    <p className="leading-6 text-texte text-base font-normal mb-2">{description}</p>
                </div>
            </div>
            <div className='absolute top-4 right-4 w-[29px] h-[32px]'>
                <Image src={number}/>
            </div>
        </div>
    );
};

export default CardProcess;