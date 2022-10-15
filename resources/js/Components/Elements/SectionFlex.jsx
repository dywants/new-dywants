import React from 'react';
import LinkElement from '../LinkElement';
import Image from './Image';
import styled from "styled-components";

const SectionFlex = ({title, description, descrite, url, link, primary, src, reverse}) => {
    let className = 'text-texte font-normal left-6 text-base';

    if (descrite) {
        className += ' mb-2';
    }else{
        className += ' mb-8';
    }
    return (
        <Wrapper reverse={reverse}>
            <div className="flex-1">
                <h2 className="text-title font-extrabold leading-9 text-[30px] mb-4">{title}</h2>
                <p className={className}>{description}</p>
                {
                    descrite && <p className="text-texte font-normal left-6 text-base mb-8">{descrite}</p>
                }

                {
                    primary ? <LinkElement primary href={url}>{link}</LinkElement> : <LinkElement href={url}>{link}</LinkElement>
                }

            </div>
            <div className="flex-1">
                <Image src={src}/>
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

export default SectionFlex;