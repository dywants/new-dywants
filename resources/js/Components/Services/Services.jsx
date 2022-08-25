import { Container } from "@/Pages/styles/globalStyles";
import React from "react";
import styled from "styled-components";
import { SectionServices } from "./ServicesStyled.js";
import CardService from "@/Components/Elements/CardService";
import { servicesInfo } from "@/Pages/Data/services";

const Services = () => {
    return (
        <SectionServices>
            <Container className="text-center p-16">
                <h2 className="font-semibold text-[40px] leading-10 mb-4">
                    Nos services
                </h2>
                <p className="text-[18px] font-light leading-tight">
                    Comprendre ce dont vous avez besoins et y apporter
                    une réponse numerique sur-mesure,qui vous
                    corresponds est Notre objectif
                </p>

                <GridSection>
                    {servicesInfo.map((service) => {
                        return (
                            <CardService
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        );
                    })}

                </GridSection>
            </Container>
        </SectionServices>
    );
};

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin: 3rem auto;
    gap: 3rem;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

export default Services;
