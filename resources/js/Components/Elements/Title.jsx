import React from 'react';
import styled from 'styled-components'

const Title = ({title, white, className = ""}) => {
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
font-weight: 600;
font-size: 42px;
line-height: 58px;
color: ${props => props.white ? "white" : "#232536"};

`;

export default Title;