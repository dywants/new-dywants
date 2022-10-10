import React from 'react';

const Image = ({src, name = ""}) => {
    return (
        <>
            <img className='object-cover w-full' src={src} alt={name} />
        </>
    );
};

export default Image;