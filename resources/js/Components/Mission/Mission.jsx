import React from "react";
import styled from "styled-components";

import {Container} from "@/Pages/styles/globalStyles";

const Mission = () => {
    return (
        <SectionMission>
            <h2 className="font-semibold text-[40px] leading-10 text-[#0A142F] my-4">
                Notre mission
            </h2>
            <Container>
                <WrapperMission>
                    <div className="flex-1">
                        <img src="assets/images/notre_mission.png" alt="" className="w-full h-full" />
                    </div>
                   <div className="flex-1">
                       <p className="text-gray-800 text-[22px] p-4 leading-relaxed text-left">
                           L'entreprise DYWANTS TECHNOLOGIE AND SERVICES (DTS) vous accompagne dans tous vos
                           projets digitaux.
                       </p>
                       <p className="text-gray-800 text-[22px] p-4 leading-relaxed text-left">
                           Nous proposons un service complèt permettant
                           de répondre à vos besoins de communication digitale, création
                           graphique, UX, conception, développement web & application mobile et référencement
                           naturel (SEO).

                           Nous adaptons nos services à vos besoins pour vous proposer la meilleure solution digitale.
                       </p>
                   </div>
                </WrapperMission>
            </Container>
        </SectionMission>
    );
};

const SectionMission = styled.section`
    // background-color: ${(props) => props.theme.colors.degradedPrimary};
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
    padding: 3rem
`;

const WrapperMission = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`;

export default Mission;
