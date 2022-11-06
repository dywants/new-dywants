import React from 'react';
import styled from "styled-components";

const CardItem = ({titles}) => {
    return (
        <div className="inline-flex space-x-2 w-full mt-6">
            {titles.map((title, i) => {
                return (
                    <Card key={i}>
                        <TitleEntreprise>{title}</TitleEntreprise>
                    </Card>
                );
            })}
        </div>
    );
};

const Card = styled.div`
    background: #ffffff;
    padding: 35px 26px;

    box-shadow: -30px 14px 50px rgba(79, 108, 164, 0.1);
    border-radius: 16px;
`;

const TitleEntreprise = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #4f6ca4;
    opacity: 0.5;
`;

export default CardItem;