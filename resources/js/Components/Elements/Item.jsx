import React from 'react';
import Image from './Image';
import { clsx } from 'clsx';

const Item = ({ title, describe, icon, whiteColor, className = "" }) => {
    return (
        <div
            className={
                `flex flex-col md:flex-row gap-4 px-6 py-8 items-center rounded-md ` + className
            }
        >
            <div className="max-w-md">
                <div className="w-20 h-20">
                    <Image src={icon} />
                </div>
            </div>
            <div className="inline-flex">
                <div>
                    <h3 className={clsx(whiteColor ? "text-white" : "")}>{title}</h3>
                    <p className={clsx(whiteColor ? "text-white" : "")}>{describe}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;