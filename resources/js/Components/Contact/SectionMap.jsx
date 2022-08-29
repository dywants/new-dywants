import React from 'react';
import styled from 'styled-components';
import MapSection from '../Maps/Map';

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

const SectionMap = () => {
    return (
        <div> 
            <div className="container mx-auto max-w-6xl px-7 py-10">
                <div className="wrapper flex justify-between items-center gap-4">
                    <LeftSection className="left">
                        <h2>Situation Géographique</h2>
                        <p className="font-medium text-md mt-2 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis corporis vitae quo placeat aspernatur, molestias explicabo pariatur atque suscipit.
                        </p>
                    </LeftSection>
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
  max-width: 924px;
  width: 100%;
`;
export default SectionMap;