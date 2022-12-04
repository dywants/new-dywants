import React from "react";
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import CardProcess from "../Elements/CardProcess.jsx";
import styled from "styled-components";

const Process = ({ processes }) => {
    return (
        <div className="wrapper my-10 md:my-20">
            <TitleSection className="text-black" title="Notre processus" />
            <Title
                className="md:w-[777px] mb-4"
                title="Nous adoptons une méthodologie de travail couvrant tous les aspects important de vos projets digitaux."
            />
            <p className="text-texte opacity-80 mb-8 md:w-[642px]">
                Notre équipe de développement web&app est expérimentée et formée
                aux dernières technologies pour vous garantir un code de
                qualité.
            </p>
            <GridSection>
                {processes.map((process, i) => {
                    return (
                        <CardProcess
                            key={i}
                            title={process.title}
                            description={process.description}
                            number={process.number}
                            icon={process.icon}
                        />
                    );
                })}
            </GridSection>
        </div>
    );
};

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 1.5rem;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

export default Process;
