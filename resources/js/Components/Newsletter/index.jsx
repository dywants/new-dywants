import React from "react";
import styled from "styled-components";
import { Details } from "./details";
import { SideImage } from "./sideImage";

const CardContainer = styled.div`
    width: 1100px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    border-radius: 26px;
    position: relative;
    border: 2px solid #fff;
    backdrop-filter: blur(10px);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export function NewsLetter(props) {
    return (
        <CardContainer>
            <Details />
            <SideImage />
        </CardContainer>
    );
}
