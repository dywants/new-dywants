import { Container } from "@/Pages/styles/globalStyles";
import React from "react";
import styled from "styled-components";
import { SectionServices } from "./ServicesStyled.js";
import CardService from "@/Components/Elements/CardService";
import CardServices from './CardService'
import { servicesInfo, servicesInfos } from "@/Pages/Data/services";
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import LinkElement from "@/Components/LinkElement";

const Services = () => {
    return (
        <SectionServices>
            <div className="container mx-auto max-w-7xl text-left px-16 py-20">
                <TitleSection title="Nos services"/>
                <Title className="w-[777px] mb-4" title="Nous construisons des solutions logicielles qui résolvent les défis commerciaux de nos clients"/>
                <LinkElement href={route('contact')} primary className="mt-8 w-full ml-0">
                    Démarrer un projet
                    <img className="w-6 h-6 ml-1 inline-flex" src="assets/images/icons/right-arrow.png" alt="right-arrow icon" />
                </LinkElement>
                <div className='flex justify-between items-center gap-4 mt-14'>
                    {servicesInfos.map((service) => {
                        return (
                            <CardServices
                                key={service.id}
                                src={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        );
                    })}
                </div>
                {/*<div className="flex mx-auto max-w-full items-center justify-center gap-4">
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
                        </div> */}
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
