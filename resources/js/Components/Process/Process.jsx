import React from "react";
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import CardProcess from "../Elements/CardProcess.jsx";
import styled from "styled-components";
import LinkElement from "../LinkElement.jsx";

const Process = ({ processes }) => {
    return (
        <div className="wrapper my-10 lg:my-20">
            <div className="flex items-center flex-wrap justify-between">
                <div>
                    <TitleSection
                        className="text-black"
                        title="Notre processus"
                    />
                    <Title
                        className="lg:w-[777px] mb-4"
                        title="Nous adoptons une méthodologie de travail couvrant tous les aspects important de vos projets digitaux."
                    />
                    <p className="text-texte opacity-80 mb-8 lg:w-[642px]">
                        Nous visons à atteindre la plus grande satisfaction de
                        nos clients, ceci en ecoutant, evaluant leur besoins
                        pour un service de qualité
                    </p>
                </div>
                <div className="mb-8 md:mb-0">
                    <LinkElement
                        primary
                        className="mt-10"
                        href={route("contact")}
                    >
                        Contactez-nous
                    </LinkElement>
                </div>
            </div>
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
    gap: 4rem;

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
    }
`;

export default Process;
