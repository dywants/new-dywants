import Presentation from '@/Components/Apropos/Presentation';
import Sections from '@/Components/Apropos/Sections';
import CardTeam from '@/Components/Elements/CardTeam';
import HeaderPage from '@/Components/Elements/HeaderPage';
import Valeurs from '@/Components/Elements/Valeurs';
import Layout from '@/Layouts/Layout';
import React from 'react';
import styled from 'styled-components';
import { teams } from './Data/teams';
import {processInfos} from "@/Pages/Data/process";
import CallToAction from "@/Components/Elements/CallToAction";
import SectionService from '@/Components/Elements/SectionService';
import Process from '@/Components/Process/Process';
import Values from '@/Components/Values/Values';
import TitleSection from '@/Components/Elements/TitleSection';
import Title from '@/Components/Elements/Title';

const Apropos = () => {
    return (
        <Layout>
            <div className="container mx-auto max-w-6xl mt-32">
                <SectionService  titlesection={"Qui sommes-nous?"}
                        title={"Nos conceptions résolvent les problèmes"}
                        src={'/assets/images/apropos/about.png'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
                <Presentation/>
            </div>
            <Process {...processInfos}/>
            <div className='bg-[#EEF4FA]'> 
                <div className="container mx-auto max-w-6xl">
                <SectionService  titlesection={"Notre mission"}
                        title={"Inspirez, innovez, partagez"}
                        src={'/assets/images/apropos/mission.png'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
                <SectionService reverse titlesection={"Notre vision"}
                        title={"La performance"}
                        src={'/assets/images/apropos/vision.png'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}/>
                </div>
            </div>
            <div >
            <div className="container mx-auto max-w-6xl px-7 my-16">
                <TitleSection title={"Une equipe"}/>
                <Title title={"d'experte dynamique a votre écoute"}/>
                <p className='text-texte text-base leading-6'>Le travail d'équipe est la seule notre façon de travailler</p>
              <WrapperTeams className="wrapper">
                {
                    teams.map((p,i) => {
                        return(
                            <CardTeam key={i} name={p.name} poste={p.poste} image={p.image}/>
                        )
                    })
                }
              </WrapperTeams>
            </div>
            </div>
            <CallToAction/>
        </Layout>
    );
};

const WrapperTeams = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
   margin: 3rem auto;
   gap: 1rem;
`;

export default Apropos;
