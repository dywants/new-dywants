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
                    content="Nous sommes une équipe dynamique et d'experts dans le développement web & mobile, dans la transformation digitale des entreprises."
                />
                <link
                    rel="canonical"
                    href="https://dywants.com/qui-sommes-nous/"
                />
            </Helmet>
            <Layout>
                <div className="wrapper">
                    <SectionService
                        titlesection={"Qui sommes-nous?"}
                        title={"Nos conceptions résolvent les problèmes"}
                        src={"/assets/images/bayong-cyrille-thibaut.png"}
                        description={
                            "Agence de développement informatique, basée à Cameroun, pour grandes entreprises, PME et associations. Constituée d'experts dans le développement des solutions digitales sur mesure, DYWANTS vous aide à porter votre entreprise au maximum de son potentiel, d’augmenter ses performances et développer votre activité à travers des outils performants et adaptés à vos besoins."
                        }
                        describe={
                            "Notre mission est de construire avec vous des solutions qui auront un impact fort pour vos utilisateurs et la croissance de votre business."
                        }
                    />
                    <Presentation />
                </div>
                <div className="-mt-20 md:mt-0">
                    <Process {...processInfos} />
                </div>
                <div className="bg-[#EEF4FA] ">
                    <div className="wrapper">
                        <SectionService
                            titlesection={"Notre mission"}
                            title={"Inspirez, innovez, partagez"}
                            src={"/assets/images/innovation-team.jpg"}
                            description={
                                "Nous voulons permettre à nos clients d'atteindre leurs objectifs digitaux avec des solutions web qui change la donne."
                            }
                        />
                        <SectionService
                            reverse
                            titlesection={"Notre vision"}
                            title={"La performance"}
                            src={"/assets/images/apropos/vision.png"}
                            description={
                                "Nous privilégions la qualité à la quantité, apportez des solutions à la pointe de la technologie est une condition pour nous."
                            }
                        />
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                        <TitleSection title={"Une equipe"} />
                        <Title title={"d'experte dynamique a votre écoute"} />
                        <p className="text-texte">
                            Le travail d'équipe est la seule notre façon de
                            travailler
                        </p>
                        <WrapperTeams>
                            {teams.map((p, i) => {
                                return (
                                    <CardTeam
                                        key={i}
                                        name={p.name}
                                        poste={p.poste}
                                        image={p.image}
                                    />
                                );
                            })}
                        </WrapperTeams>
                    </div>
                </div>
                <CallToAction />
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
