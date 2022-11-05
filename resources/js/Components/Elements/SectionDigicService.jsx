import React from "react";
import LinkElement from "../LinkElement";
import styled from "styled-components";
import CustomLink from "../CustomLink";
import Image from "./Image";

const SectionDigicService = (
  {
    title,
    description,
    descrite,
    url,
    link,
    secondary,
    src,
    reverse,
    icon,
    url2,
    link2
  }
) => {
    let className = "text-white font-normal left-6 text-base";

    if (descrite) {
        className += " mb-2";
    }else {
        className += " mb-8";
    }

    if (secondary) {
        className += " text-texte";
    }
    return (
        <Wrapper reverse={reverse}>
            <div className="flex-1">
                <div className="w-24 h-24 mb-6">
                    <Image src={icon} />
                </div>
                {
                    secondary ? <h2 className="text-[#4F6CA4] font-extrabold leading-9 text-[30px] mb-4">{title}</h2> : <h2 className="text-white font-extrabold leading-9 text-[30px] mb-4">{title}</h2>
                }

                <p className={className}>{description}</p>
                {descrite && (
                    <p className={className}>
                        {descrite}
                    </p>
                )}

                <div className="my-4">
                    {secondary ? (
                        <CustomLink secondary href={url}>
                            {link}
                        </CustomLink>
                    ) : (
                        <CustomLink href={url}>{link}</CustomLink>
                    )}
                    <LinkElement className="inline-flex ml-2" href={url2}>
                        {link2}
                    </LinkElement>
                </div>
            </div>
            <div className="flex-1">
                <Image src={src} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "")};
    gap: 5rem;
    overflow: hidden;
`;

export default SectionDigicService;
