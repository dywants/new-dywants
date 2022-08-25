import React from "react";
import styled from "styled-components";
import {Container} from "@/Pages/styles/globalStyles";
import CardProjet from "@/Components/Elements/CardProjet";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projets = ({projets}) =>{
    return (
        <ProjetSection>
            <Container className="text-center p-16">
                <h2 className="font-semibold text-[40px] text-[#FFB400] leading-10 mb-4">
                    Nos récents projets
                </h2>
                <Splide aria-label="Nos recents projets" options={{
                    rewind: true,
                    fixedWidth: '750px',
                    perPage: 1,
                    gap: '1.5rem',
                }}>
                    {
                        projets.map((p, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <CardProjet image={p.image} title={p.title} description={p.description}
                                                link={p.site} tags={p.tags}/>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Container>
        </ProjetSection>
    )
}

const ProjetSection = styled.section`
  background-color: ${(props) => props.theme.colors.degradedPrimary};
  // margin-top:76px;

   .splide__pagination__page {
    &.is-active {
     background: #FFB400;
    }
  }
 }
`;

export default Projets;
