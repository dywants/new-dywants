import React from 'react';

const Sections = ({title, image, children, reversed}) => {
    let className = 'left flex-1';
    if (reversed) {
        className += ' order-last';
    }
    return (
        <div className="container mx-auto max-w-6xl px-7 py-16">
            <div className="wrapper flex items-center justify-between gap-4">
                <div className={className}><h2>{title}</h2></div>
                <div className="right flex-1"><img src={image} alt=""/></div>
            </div>
            {children}
        </div>
    );
};

export default Sections;