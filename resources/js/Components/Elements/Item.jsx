import React from 'react';
import Image from './Image';

const Item = ({ title, describe, icon, whiteColor, className = "" }) => {
    return (
        <div
            className={
                `flex gap-4 px-6 py-8 items-center rounded-md ` + className
            }
        >
            <div className="max-w-md">
                <div className="w-20 h-20">
                    <Image src={icon} />
                </div>
            </div>
            <div className="inline-flex">
                <div>
                    <h3 whiteColor={whiteColor}>{title}</h3>
                    <p whiteColor={whiteColor}>{describe}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;