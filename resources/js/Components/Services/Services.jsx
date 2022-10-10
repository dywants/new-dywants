import { Container } from "@/Pages/styles/globalStyles";
import React from "react";
import styled from "styled-components";
import { SectionServices } from "./ServicesStyled.js";
import CardService from "@/Components/Elements/CardService";
import { servicesInfo } from "@/Pages/Data/services";

const Services = () => {
    return (
        <SectionServices>
            <div className="text-center p-16">

                <div className="flex mx-auto max-w-full items-center justify-center gap-4">
                    <div className="max-w-[395px] w-full text-left">
                        <h2 className="font-semibold text-[48px] leading-10 mb-8">
                            Nos services
                        </h2>
                        <p className="text-[18px] font-light leading-7">
                            Comprendre ce dont vous avez besoins et y apporter
                            une réponse numerique sur-mesure,qui vous
                            corresponds est Notre objectif
                        </p>
                    </div>
                    <div className="max-w-[765px] w-full">
                        <GridSection>
                            {servicesInfo.map((service) => {
                                return (
                                    <CardService
                                        key={service.id}
                                        icon={service.icon}
                                        title={service.title}
                                        // description={service.description}
                                    />
                                );
                            })}

                        </GridSection>
                    </div>
                </div>


            </div>
        </SectionServices>
    );
};

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin: 3rem auto;
    gap: 1.5rem;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

export default Services;
