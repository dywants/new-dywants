import Presentation from "@/Components/Apropos/Presentation";
import CardTeam from "@/Components/Elements/CardTeam";
import Layout from "@/Layouts/Layout";
import React from "react";
import styled from "styled-components";
import { teams } from "./Data/teams";
import { processInfos } from "@/Pages/Data/process";
import CallToAction from "@/Components/Elements/CallToAction";
import SectionService from "@/Components/Elements/SectionService";
import Process from "@/Components/Process/Process";
import TitleSection from "@/Components/Elements/TitleSection";
import Title from "@/Components/Elements/Title";
import { Helmet } from "react-helmet-async";

const Apropos = () => {
    return (
        <div>
            <Helmet>
                <title>DYWANTS - Qui sommes nous?</title>
                <meta
                    name="description"
                    content="Nous vous presentons nos dernières réalisation et les entreoprises qui nous ont faites confiance"
                />
                <link rel="canonical" href="https://dywants.com/projets/" />
            </Helmet>
            <Layout>
                <div>
                    <h1>Je suis les projets</h1>
                </div>
            </Layout>
        </div>
    );
};

const WrapperTeams = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin: 3rem auto;
    gap: 1rem;
`;

export default Apropos;
