import React from "react";
import styled from "styled-components";
import CustomLink from "../CustomLink";
import Image from "./Image";

const HeaderPage = ({ icon, title, description, smallTile, url, link }) => {
    return (
        <SectionHeader
            className="w-full overflow-hidden h-auto bg-cover object-cover bg-bgHeader text-center">
            <div className="container mx-auto max-w-7xl px-8">
                <div className="w-20 h-20 mb-4 text-center mx-auto">
                    <Image src={icon} alt="" />
                </div>
                <p className="text-[20px] text-[#F0F0F0]">{smallTile}</p>
                <h1 className="leading-loose m-0">{title}</h1>
                <p className="font-medium text-md text-[#F0F0F0] mt-2 leading-relaxed">
                    {description}
                </p>
                <div className="mt-8">
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
