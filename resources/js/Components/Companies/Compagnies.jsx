import React from "react";
import styled from "styled-components";
import { Container } from "@/Pages/styles/globalStyles";
import LogoEntreprise from "@/Components/Elements/LogoEntreprise";
import { entreprises } from "../../Pages/Data/entreprises.js";

export default function Compagnies() {
    return (
        <SectionCompagnies>
            <Container className="text-center">
                <h2 className="font-semibold text-[40px] leading-10 text-[#eaeef3]">
                    Ils nous font confiance
                </h2>
                <GridSection>
                    {entreprises.map((entreprise) => {
                        return (
                            <LogoEntreprise
                                key={entreprise.id}
                                image={entreprise.logo}
                                name={entreprise.name}
                                url={entreprise.url}
                            />
                        );
                    })}
                </GridSection>
            </Container>
        </SectionCompagnies>
    );
}

const SectionCompagnies = styled.section`
    margin: 6rem 0;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 2rem 0;
`;

const GridSection = styled.div`
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    justify-content: center;
    align-content: center;
    justify-self: center;
`;
