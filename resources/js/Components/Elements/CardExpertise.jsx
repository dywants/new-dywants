import React from "react";
import styled from "styled-components";

const CardExpertise = ({ img, name }) => {
    return (
        <>
            <img src={img}  alt={name} className="w-10 h-10" />
        </>
    );
};

export default CardExpertise;
