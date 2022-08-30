import React from 'react';
import styled from 'styled-components';

const HeaderPage = ({img, title, description}) => {
    return (
        <SectionHeader className='w-full overflow-hidden h-auto bg-cover object-cover' style={{
            backgroundImage: `linear-gradient(90deg, rgba(27, 53, 103, 0.8) 0%, rgba(79, 108, 164, 0.44) 100%),url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="leading-loose m-0">{title}</h1>
          <p className="font-medium text-md text-white mt-2 leading-relaxed max-w-[564px]">
           {description}
          </p>
        </div>
        </SectionHeader>
    );
};

const SectionHeader = styled.section`
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

export default HeaderPage;