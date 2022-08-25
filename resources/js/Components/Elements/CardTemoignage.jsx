import React from "react";
import styled from "styled-components";

const CardTemoignage = ({image, title, description, link}) => {
    return(
        <CardSections href={link} target="_blank" className="flex-col md:flex-row">
            <div className="left mt-4 md:mt-0">
                <img src={image} alt="" className="w-24 h-24 md:w-full md:h-full rounded-full object-cover"/>
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
 background-color: #fff !important;
 margin-top: 2rem;
 cursor:pointer;
 // flex-direction:column;

 .left{
    max-width: 100%;
  }

  .right{
      max-width: 100%;
  }

 @media screen and (min-width: 736px) {
        padding: 2rem;
        display:flex;
        justify-content:center;
        align-items:start;
        gap: 1.5rem;


        .left{
          max-width: 220px;
        }

        .right{
           max-width: 350px;
         }
 }
`;

export default CardTemoignage;
