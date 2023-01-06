import React from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

const CardProjet = ({
    image,
    title,
    description,
    type,
    link,
    className = "",
    processing,
    tags = "",
}) => {
    return (
        <CardSections>
            <img
                src={image}
                alt={title}
                className="w-full h-full rounded-md object-cover image"
            />

            <div className="inline-flex items-center space-x-2 pt-5 pb-3">
                <h3 className="font-semibold text-secondary">{title} - </h3>
                <h3 className="text-secondary">{type}</h3>
            </div>
            <p className="text-md">{description}</p>
        </CardSections>
    );
};

const CardSections = styled.div`
    border-radius: 0.8rem;
    z-index: 100;
    margin-top: 2rem;
    text-align: left;
    padding: 1.1rem;
    background-color: white;

    @media screen and (min-width: 736px) {
        .image {
            height: 400px;
        }
    }
`;

export const SectionImage = styled.div`
    background: ${(props) => props.theme.colors.gradedSecondary} !important;
    z-index: 9999;

    img {
        position: relative;
        z-index: -1;
    }

    img::before {
        content: "";
        background: ${(props) => props.theme.colors.gradedSecondary} !important;
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        width: 45%;
        transform: translateX(-50%) skew(-50deg);
    }
`;

export const SectionBody = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.light};
    z-index: 1000;

    img {
        z-index: -1;
    }

    h4 {
        color: ${(props) => props.theme.colors.light};
    }
`;

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-bottom: 1rem;
    gap: 0.5rem;
`;
export const Tag = styled.li`
    color: ${(props) => props.theme.colors.primary};
    display: inline-flex;
    margin-right: 0.3rem;
`;

export default CardProjet;
