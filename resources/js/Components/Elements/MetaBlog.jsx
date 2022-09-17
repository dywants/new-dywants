import React from 'react';
import styled from 'styled-components';
import {Link} from "@inertiajs/inertia-react";

const MetaBlog = ({img , name, date, url}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex inline-flex space-x-2 items-start">
                <img src={img} alt={name} className="w-10 h-10 rounded-full "/>
                <div className="space-y-1">
                    <h4>{name}</h4>
                    <times className="text-[14px] text-[#667085] leading-6 font-normal">{date}</times>
                </div>
            </div>
            <Link href={url} className="flex inline-flex invisible space-x-1 group-hover:visible duration-75 ease-in">
                <span className="text-[#6941C6] font-thin">Voir plus</span>
                <img src="assets/images/blog/arrow-next.png" alt='arrow icon'/>
            </Link>
        </div>

    )
}

export default MetaBlog;
