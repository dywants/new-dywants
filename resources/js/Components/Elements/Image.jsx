import React from 'react';

const Image = ({src, name = "", className = ""}) => {
    return (
        <>
            <img className={
            `object-cover w-full` + className
        } src={src} alt={name} />
        </>
    );
};

export default Image;