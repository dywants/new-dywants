import React from "react";
import styled from "styled-components";
import {Link} from "@inertiajs/inertia-react";

const CardProjet = ({image, title, description, link, className = "",
                        processing, tags = "",
                    }) => {
    return(
        <CardSections>
            <div className="image mx-auto mb-2">
                <img src={image} alt="" className="w-full h-full rounded-md object-cover"/>
            </div>
            <div className="text-left mb-2 mt-4">
                <h3 className="text-black text-[28px] font-semibold mb-4">{title}</h3>
                <TagList>
                    {
                        tags.map((k,j) => {
                            return (
                                <Tag key={j}>{k}</Tag>
                            )
                        })
                    }

                </TagList>
                <p className="text-md leading-tight">
                    {description}
                </p>
            </div>
            <Link href={link} target="_blank" className={
                `inline-flex items-center text-right mt-4 px-4 py-2 bg-[#FFB400] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }>Visiter</Link>
        </CardSections>
    )
}

const CardSections = styled.div`
 // max-width: 900px;
 border-radius:20px;
 background-color:white;
 padding: 4rem;
 margin-top: 2rem;
 text-align:right;
 height: 750px;

 .image{
   // max-width: 900px;
   height:400px;
 }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;
export const Tag = styled.li`
  color: #eaeef3;
  font-size: 1rem;
  display: inline-flex;
  margin-right: 0.3rem;
  background: #0A142F;
  padding: 10px 25px;
  border-radius:10px;
`;


export default CardProjet;
