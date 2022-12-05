import React from "react";
import Image from "./Image.jsx";
import styled from "styled-components";
import { clsx } from "clsx";

const CardElementServices = ({
    icon,
    title,
    describe,
    center = "",
    w80 = "",
    h80 = "",
}) => {
    return (
        <Wrapper center={center} className="">
            <div className={clsx(center ? "text-center" : "text-left", "p-6")}>
                <WithCard
                    w80={w80}
                    h80={h80}
                    className={clsx(center ? "mx-auto" : "m-0")}
                >
                    <Image src={icon} />
                </WithCard>
                <h3>{title}</h3>
                <p>{describe}</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: ${(props) => (props.center ? "center" : "left")};
    background: #f6f8fa;
    border-radius: 20px;

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 1rem;
    }
    p{
        text-align: left;
    }
`;

const WithCard = styled.div`
    width: ${(props) => (props.w80 ? "80px" : "50px")};
    height: ${(props) => (props.h80 ? "80px" : "50px")};
    align-items: center;
    margin-bottom: 70px;
`;
export default CardElementServices;
