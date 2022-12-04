import React from "react";
import styled from "styled-components";
import CustomLink from "../CustomLink";
import Image from "./Image";

const SectionService = ({
    src,
    titlesection,
    title,
    description,
    reverse,
    describe,
    url
}) => {
    return (
        <Wrapper reverse={reverse}>
             <div className="w-full md:max-w-[480px]">
                <Image src={src} className="" />
            </div>
            <div className="w-full md:w-[642px]">
                <div className="pt-0 mb-6 md:pt-24">
                    <TitleSection>{titlesection} </TitleSection>
                    <Title>{title}</Title>
                    <p className="text-texte  opacity-80 my-2">
                        {description}
                    </p>
                    {describe && (
                        <p className="text-texte opacity-80 mb-10">
                            {describe}
                        </p>
                    )}
                </div>
                {
                    url ? (
                        <CustomLink secondary href={url} className="mt-8">
                            En savoir plus
                        </CustomLink>
                    ): null
                }
                
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 3rem;
    padding-bottom: 6rem;
    overflow: hidden;

    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
      }

    @media screen and (min-width: 768px) {
        flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    }
`;

const Title = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 42px;
line-height: 58px;
color: ${props => props.white ? "white" : "#232536"};

@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
    text-align:left;
    line-height: 42px;
  }
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
