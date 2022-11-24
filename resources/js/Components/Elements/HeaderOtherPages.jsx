import React from "react";
import styled from "styled-components";
import CustomLink from "../CustomLink.jsx";
import Image from "./Image.jsx";

const HeaderOtherPages = ({ image, title, describe, url, link }) => {
    return (
        <SectionHeader className="w-full overflow-hidden h-auto bg-cover object-cover bg-bgHeader text-center">
            <div className="flex justify-between gap-4 items-center overflow-hidden">
                <div className="flex-1">
                    <div className="px-4 text-left ml-24">
                        <h1>{title}</h1>
                        <p className="text-texte text-base">{describe}</p>
                        <div className="my-4">
                            <CustomLink secondary href={url}>
                                {link}
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <div className="flex-1 m-0 p-0 overflow-hidden">
                    <Image src={image} />
                </div>
            </div>
        </SectionHeader>
    );
};

const SectionHeader = styled.section`
    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 42px;
        color: #F0F0F0;
    }
`;

export default HeaderOtherPages;
