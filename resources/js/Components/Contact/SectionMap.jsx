import React from 'react';
import styled from 'styled-components';
import MapSection from '../Maps/Map';

const location = {
    address: 'DYWANTS TECHNOLOGIE AND SERVICES Sarl',
    lat: 4.051655,
    lng: 9.765258,
  }

const SectionMap = () => {
    return (
        <div> 
            <div className="container mx-auto max-w-7xl px-16 py-10 mb-8">
                <div>
                    <RightSection className="right">
                        <MapSection location={location} zoomLevel={17}/>
                    </RightSection>
                </div>
            </div>
        </div>
    );
};


const LeftSection = styled.div`
   max-width: 414px;

   h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    color: #000000;
   }
`;

const RightSection = styled.div`
  width: 100%;
`;
export default SectionMap;