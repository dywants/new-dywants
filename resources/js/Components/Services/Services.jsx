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
            <div className="wrapper py-20">
                <TitleSection className="text-white" title="Nos services"/>
                <Title white className="md:w-[777px] mb-4" title="Nous avons toutes l'expertise et les compétences qu'il faut pour mener à bien vos projets web et digitaux."/>
                <LinkElement href={route('services')} primary className="mt-8 w-full ml-0">
                    Voir nos services web
                    <img className="w-6 h-6 ml-1 inline-flex" src="assets/images/icons/right-arrow.png" alt="right-arrow icon" />
                </LinkElement>
                <div className='card3 mt-14'>
                    {servicesInfos.map((service) => {
                        return (
                            <CardServices
                                key={service.id}
                                src={service.icon}
                                title={service.title}
                                description={service.description}
                                url={service.url}
                            />
                        );
                    })}
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
