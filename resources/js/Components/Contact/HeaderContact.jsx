import React from 'react';
import styled from 'styled-components';

const HeaderContact = () => {
    return (
        <SectionHeader className='w-full overflow-hidden h-auto bg-cover object-cover'>
            <div className="container mx-auto max-w-6xl">
              <h1 className="leading-loose m-0">Contactez-nous</h1>
              <p className="font-medium text-md text-white mt-2 leading-relaxed max-w-[564px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
        </SectionHeader>
    );
};

const SectionHeader = styled.section`
   background: linear-gradient(90deg, rgba(27, 53, 103, 0.8) 0%, rgba(79, 108, 164, 0.44) 100%), url('assets/images/contact/header_contact.png') no-repeat center;
   background-size: cover;
   padding: 16rem 0;

   h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #FFB400;
   }
   `;

export default HeaderContact;
