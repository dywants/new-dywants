import Presentation from '@/Components/Apropos/Presentation';
import Sections from '@/Components/Apropos/Sections';
import CardTeam from '@/Components/Elements/CardTeam';
import HeaderPage from '@/Components/Elements/HeaderPage';
import Valeurs from '@/Components/Elements/Valeurs';
import Layout from '@/Layouts/Layout';
import React from 'react';
import styled from 'styled-components';
import { teams } from './Data/teams';

const Apropos = () => {
    return (
        <Layout>
            <HeaderPage title='Qui sommes nous?' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno" img="assets/images/apropos/apropos.png"/>
            <Presentation/>
            <Sections title="Nos Valeurs" image="assets/images/apropos/valeurs.png">
                <Valeurs/>
            </Sections>
            <Sections reversed="reversed" title="Comment travaillons nous ?" image="assets/images/apropos/how-are-work-us.png">
               <div className='mt-4 space-y-2'>
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt iusto obcaecati consequatur non, rem itaque dolorum nesciunt quasi magni quod pariatur et beatae delectus temporibus dolorem error praesentium magnam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt iusto obcaecati consequatur non, rem itaque dolorum nesciunt quasi magni quod pariatur et beatae delectus temporibus dolorem error praesentium magnam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt iusto obcaecati consequatur non, rem itaque dolorum nesciunt quasi magni quod pariatur et beatae delectus temporibus dolorem error praesentium magnam.
                </p>
               </div>
            </Sections>
            <Sections title="La Team" image="assets/images/apropos/teams.png">
            <div className="container mx-auto max-w-6xl px-7">
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
            </Sections>
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