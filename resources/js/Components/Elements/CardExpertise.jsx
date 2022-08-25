import React from "react";
import styled from "styled-components";

const CardExpertise = ({ name }) => {
    return (
        <div className=" p-[12px] border border-gray-200 hover:shadow cursor-pointer mr-2 mb-2">
            <span>{name}</span>
        </div>
    );
};

export default CardExpertise;
