import React from "react";
import styled from "styled-components";
import Image from "./Image";

const SectionService = ({ src, titlesection, title, description, reverse }) => {
    return (
        <Wrapper reverse={reverse}>
            <div className="w-[642px]">
                <div className="pt-24">
                    <TitleSection>{titlesection} </TitleSection>
                    <Title>{title}</Title>
                    <p className="text-texte text-base font-normal leading-6 opacity-80 mb-8">
                        {description}
                    </p>
                </div>
            </div>

            <div className="max-w-[480px]">
                <Image src={src} className="" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "")};
    gap: 3rem;
    padding-bottom: 6rem;
    overflow: hidden;
`;

const Title = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #232536;
`;

const TitleSection = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    opacity: 0.87;
`;

export default SectionService;
