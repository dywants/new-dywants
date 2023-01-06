import React from "react";
import styled from "styled-components";
import CardProjet from "@/Components/Elements/CardProjet";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./projet.css";

const Projets = ({ projets }) => {
    return (
        <ProjetSection>
            <div className="relative">
                <h2 className="font-semibold text-[30px] md:text-[50px] text-white leading-10 mb-6 md:mb-10">
                    Nos projets
                </h2>
                <div className="max-w-7xl mx-auto">
                    <Splide
                        aria-label="Nos recents projets"
                        options={{
                            rewind: true,
                            perPage: 2,
                            perMove: 1,
                            pagination: false,
                            type: "loop",
                            drag: "fade",
                            padding: { left: "1rem", right: "6rem" },
                            gap: "1rem",
                            trimSpace: false,
                            breakpoints: {
                                768: {
                                    fixedWidth: "100%",
                                    perPage: 1,
                                    padding: "0", // Used after destruction
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
                                        type={p.type}
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
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 4rem 0 5rem 7rem;

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 2rem;
    }

    .splide__pagination__page {
        &.is-active {
            background: #ffb400;
        }
    }
`;

export default Projets;
