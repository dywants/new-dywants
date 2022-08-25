import React from "react";
import styled from "styled-components";

const CardTemoignage = ({image, title, description, link}) => {
    return(
        <CardSections href={link} target="_blank">
            <div className="left">
                <img src={image} alt="" className="w-full h-full rounded-full object-cover"/>
            </div>
            <div className="right text-left">
                <h3 className="text-black text-[28px] font-semibold mb-4">{title}</h3>
                <p className="text-md leading-tight">
                    {description}
                </p>
            </div>
        </CardSections>
    )
}

const CardSections = styled.a`
 border-radius:20px;
 background-color:white;
 padding: 2rem;
 display:flex;
 justify-content:center;
 align-items:start;
 gap: 1.5rem;
 margin-top: 2rem;
 cursor:pointer;

.left{
max-width: 200px !important;
}

.right{
max-width: 280px !important;
}
`;

export default CardTemoignage;
