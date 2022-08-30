import React from 'react';
import styled from 'styled-components';
import CardValue from './CardValue';
import { values } from "../../Pages/Data/values";

const Valeurs = () => {
    return (
        <div className="container mx-auto max-w-6xl px-7">
            <WrapperValue className="wrapper">
                {
                    values.map((p,i) => {
                        return(
                            <CardValue key={i} title={p.title} description={p.description} icon={p.icon}/>
                        )
                    })
                }
                
            </WrapperValue>
        </div>
    );
};

const WrapperValue = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
   margin: 3rem auto;
   gap: 1rem;
`;

export default Valeurs;