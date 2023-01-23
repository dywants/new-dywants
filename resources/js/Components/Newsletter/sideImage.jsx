import React from "react";
import styled from "styled-components";

import BookLoverImg from "@/icons/book-lover.svg";

const SideImageContainer = styled.div`
    max-width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    background-color: #f6f8fa;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

const Image = styled.div`
    width: auto;
    height: 30em;

    img {
        width: auto;
        height: 100%;
    }
`;

export function SideImage(props) {
    return (
        <SideImageContainer>
            <Image>
                <img src={BookLoverImg} />
            </Image>
        </SideImageContainer>
    );
}
