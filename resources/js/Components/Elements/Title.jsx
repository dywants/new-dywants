import React from 'react';
import styled from 'styled-components'

const Title = ({title}) => {
    return (
        <TitleName>
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
color: #232536;

`;

export default Title;