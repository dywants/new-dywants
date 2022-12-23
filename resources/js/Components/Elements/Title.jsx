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
line-height: 50px;
color: ${props => props.white ? "white" : "#1B3567"};

@media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
    text-align:left;
    line-height: 42px;
  }
`;

export default Title;