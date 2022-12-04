import React from "react";
import styled from "styled-components";
import {Link} from "@inertiajs/inertia-react";

const CardProjet = ({image, title, description, link, className = "",
                        processing, tags = "",
                    }) => {
    return(
        <CardSections>
            <SectionImage className="mx-auto relative">
                <img src={image} alt={title} className="w-full h-full rounded-t-md object-cover image"/>
                <h3 className="text-black text-[24px] font-bold mb-4 absolute bottom-0 left-8 backdrop-contrast-50 bg-white/30 p-2 rounded-sm">{title}</h3>
            </SectionImage>
            <SectionBody className="text-left mb-2 px-12 py-4 rounded-b-lg">
                <h4 className="text-black text-[24px] font-semibold mb-4">Technologies</h4>
                <TagList>
                    {
                        tags.map((k,j) => {
                            return (
                                <Tag key={j}>{k}</Tag>
                            )
                        })
                    }

                </TagList>
                <p className="text-md">
                    {description}
                </p>
                <div className="mt-2 text-right">
                   <Link href={link} target="_blank" className={
                   `inline-flex items-center text-right mt-4 px-4 py-2 bg-[#FFB400] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
                       processing && "opacity-25"
                   } ` + className
                   }>Visiter</Link>
                </div>
            </SectionBody>
        </CardSections>
    )
}

const CardSections = styled.div`
 border-radius:1rem;
 z-index: 100;
 margin-top: 2rem;
 text-align:right;

 @media screen and (min-width: 736px) {
    .image{
      height:400px;
    }
 }
`;

export const SectionImage = styled.div`
background:${(props) => props.theme.colors.gradedSecondary} !important;
z-index:9999;

    img{
        position: relative;
        z-index:-1;
    }

    img::before{
        content:"";
        background:${(props) => props.theme.colors.gradedSecondary} !important;
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        width: 45%;
        transform: translateX(-50%) skew(-50deg);
    }

`;

export const SectionBody = styled.div`
    background:${(props) => props.theme.colors.secondary};
    color: ${(props) =>props.theme.colors.light};
    z-index: 1000;

    img{
        z-index:-1;
    }

    h4{
        color: ${(props) =>props.theme.colors.light};
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
  color: ${(props) => props.theme.colors.primary};
  display: inline-flex;
  margin-right: 0.3rem;
`;


export default CardProjet;
