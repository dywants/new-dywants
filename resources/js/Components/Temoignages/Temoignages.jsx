import React from "react";
import styled from "styled-components";
import {Container} from "@/Pages/styles/globalStyles";
import CardTemoignage from "@/Components/Elements/CardTemoignage";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Temoignages = ({testimonial}) =>{

    return (
        <SectionTemoignages>
            <Container className="text-center p-10">
                <h2 className="font-semibold text-[40px] text-white leading-10 mb-4">
                    Témoignages
                </h2>
                <p className="text-[18px] font-light leading-tight text-white">
                    Nos clients parlent pour nous!
                </p>
                <Splide className="cards" aria-label="My testimonial" options={{
                    rewind: true,
                    fixedWidth: '450px',
                    perPage: 2,
                    gap: '1rem',
                }}>
                    {
                        testimonial.map((p, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <CardTemoignage image={p.image} title={p.title} description={p.description}
                                                    link={p.site}/>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Container>
        </SectionTemoignages>
    )
}

const SectionTemoignages = styled.section`
 background-color: ${(props) => props.theme.colors.secondary};

 .cards{
  display:flex;
  align-items: center;
  justify-content:center;
  gap: 1.5rem;

  .splide__slide {
    &.is-active a{
      box-shadow: rgba(255,180,0, 0.4) 0px 5px, rgba(255,180,0, 0.3) 0px 10px, rgba(255,180,0, 0.2) 0px 15px, rgba(255,180,0, 0.1) 0px 20px, rgba(255,180,0, 0.05) 0px 25px;
    }
  }

  .splide__pagination__page {
    &.is-active {
     background: #FFB400;
    }
  }
 }
`;

export default Temoignages;
