import React from "react";
import styled from "styled-components";
import CustomLink from "../CustomLink";
import Image from "./Image";

const HeaderPage = ({ icon, title, description, smallTile, url, link }) => {
    return (
        <SectionHeader
            className="w-full overflow-hidden h-auto bg-cover object-cover bg-bgHeader">
            <div className="container mx-auto max-w-6xl">
                <div className="w-20 h-20 mb-4">
                    <Image src={icon} alt="" />
                </div>
                <p className="text-[17px] text-[#F0F0F0]">{smallTile}</p>
                <h1 className="leading-loose m-0">{title}</h1>
                <p className="font-medium text-md text-[#F0F0F0] mt-2 leading-relaxed max-w-[564px]">
                    {description}
                </p>
                <div className="my-4">
                    <CustomLink secondary href={url}>{link}</CustomLink>
                </div>
            </div>
        </SectionHeader>
    );
};

const SectionHeader = styled.section`
    padding: 8rem 0;

    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 72px;
        color: #ffb400;
    }
`;

export default HeaderPage;
