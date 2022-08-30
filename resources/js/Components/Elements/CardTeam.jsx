import React from 'react';

const CardTeam = ({image, name, poste}) => {
    return (
        <div className="border rounded-t-lg text-center">
            <div className="rounded-full w-full mb-4"><img src={image} alt="" className='w-full object-cover' /></div>
            <h3 className="font-semibold text-gray-800 text-md mb-2">{name}</h3>
            <p className="text-muted font-thin leading-tight pb-3">{poste}</p>
        </div>
    );
};

export default CardTeam;