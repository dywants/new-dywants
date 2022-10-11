import React from 'react';
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import CardProcess from '../Elements/CardProcess.jsx';
import styled from "styled-components";

const Process = ({processes}) => {
    return (
        <div>
            <div className="container mx-auto max-w-7xl text-left p-16">
                <TitleSection title="Notre processus"/>
                <Title className="w-[777px] mb-4" title="Nous construisons des solutions logicielles qui résolvent les défis commerciaux de nos clients"/>
                <p className='text-texte text-base font-normal leading-6 opacity-80 mb-8 w-[642px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                <GridSection>
                    {
                        processes.map((process, i) => {
                            return(
                                <CardProcess title={process.title} 
                                            description={process.description}
                                            number={process.number}
                                            icon={process.icon}/>
                            )
                        })
                    }
                </GridSection>
            </div>
        </div>
    );
};

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

export default Process;