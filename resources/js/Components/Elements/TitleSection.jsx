import React from 'react';
import styled from 'styled-components'

const TitleSection = ({title , white, className = ""}) => {
    return (
        <TitleName white={white} className={
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
color: ${props => props.white ? "white" : "#4F6CA4"};
`;
export default TitleSection;