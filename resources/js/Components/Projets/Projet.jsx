import React from "react";
import styled from "styled-components";
import {Container} from "@/Pages/styles/globalStyles";
import CardProjet from "@/Components/Elements/CardProjet";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projets = ({projets}) =>{
    return (
        <ProjetSection>
            <div className="text-center">
                <h2 className="font-semibold text-[40px] text-[#FFB400] leading-10 mb-4">
                    Nos récents projets
                </h2>
                <Splide aria-label="Nos recents projets" options={{
                    rewind: true,
                    perPage: 2,
                    drag: "free",
                    gap: "2rem",

                    breakpoints: {
                        640: {
                            fixedWidth: '350px',
                            fixedHeight: '590px',
                            perPage: 1,// Used after destruction
                        },

                    }
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
            </div>
        </ProjetSection>
    )
}

const ProjetSection = styled.section`
  background-color: ${(props) => props.theme.colors.degradedPrimary};
  padding: 5rem;

   .splide__pagination__page {
    &.is-active {
     background: #FFB400;
    }
  }
 }
`;

export default Projets;
