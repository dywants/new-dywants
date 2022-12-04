import React from "react";
import styled from "styled-components";
import CardProjet from "@/Components/Elements/CardProjet";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Projets = ({ projets }) => {
    return (
        <ProjetSection>
            <div className="text-center">
                <h2 className="font-semibold text-[40px] text-[#FFB400] leading-10 mb-4">
                    Nos récents projets
                </h2>
                <div className="max-w-7xl mx-auto">
                    <Splide
                        aria-label="Nos recents projets"
                        options={{
                            rewind: true,
                            perPage: 2,
                            drag: "free",
                            gap: "2rem",

                            breakpoints: {
                                640: {
                                    fixedWidth: "100%",
                                    fixedHeight: "590px",
                                    perPage: 1, // Used after destruction
                                },
                            },
                        }}
                    >
                        {projets.map((p, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <CardProjet
                                        image={p.image}
                                        title={p.title}
                                        description={p.description}
                                        link={p.site}
                                        tags={p.tags}
                                    />
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </div>
        </ProjetSection>
    );
};

const ProjetSection = styled.section`
  background-color: ${(props) => props.theme.colors.degradedPrimary};
  padding: 6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }

   .splide__pagination__page {
    &.is-active {
     background: #FFB400;
    }
  }
 }
`;

export default Projets;
