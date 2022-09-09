import React from "react";
import styled from "styled-components";

const CardExpertise = ({ img, name }) => {
    return (
        <>
            <img src={img}  alt={name} className="w-12 h-12 mr-2 mb-2" />
        </>
    );
};

export default CardExpertise;
