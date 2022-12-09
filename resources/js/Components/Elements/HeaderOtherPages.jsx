import React from "react";
import styled from "styled-components";
import CustomLink from "../CustomLink.jsx";
import Image from "./Image.jsx";

const HeaderOtherPages = ({ image, title, describe, url, link }) => {
    return (
        <SectionHeader className="w-full overflow-hidden h-auto bg-cover object-cover bg-bgHeader text-center">
            <div className="flex flex-col lg:flex-row justify-between pt-8 lg:pt-0 gap-4 items-center overflow-hidden h-auto">
                <div className="w-full lg:flex-1">
                    <div className="px-8 text-left lg:ml-24">
                        <h1>{title}</h1>
                        <p className="text-white text-base">{describe}</p>
                        <div className="my-4">
                            <CustomLink secondary href={url}>
                                {link}
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:flex-1 m-0 p-0 overflow-hidden">
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
