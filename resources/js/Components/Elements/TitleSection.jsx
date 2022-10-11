import React from 'react';
import styled from 'styled-components'

const TitleSection = ({title ,  className = ""}) => {
    return (
        <TitleName  className={
            `` + className
        }>
            {title}
        </TitleName>
    );
};

const TitleName = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
letter-spacing: 3px;
text-transform: uppercase;
color: #000000;
opacity: 0.87;

`;
export default TitleSection;