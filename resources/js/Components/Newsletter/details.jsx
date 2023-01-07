import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import "./newsletter.css";

const DetailsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const InnerContainer = styled.div`
    max-width: 80%;
`;

const Header = styled.h2`
    margin: 0;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 700;
    font-size: 45px;
`;

const SubHeader = styled.h3`
    margin: 10px 0;
    color: ${(props) => props.theme.colors.dark};
    font-weight: 700;
    font-size: 24px;
`;

const Text = styled.p`
    color: #5d5f6d;
    font-weight: 500;
    font-size: 20px;
`;

const FormGroup = styled.div`
    .embed-page .substack-watermark {
        display: none !important;
    }
`;

export function Details(props) {
    return (
        <DetailsContainer>
            <InnerContainer>
                <Header>Hé, attends...</Header>
                <SubHeader>Abonnez-vous à notre newsletter!</SubHeader>
                <Text>
                    Chaque semaine, les meilleurs tips sur le développement web
                    & mobile et la digitalisation, afin d'optimiser ses process
                    et prendre son indépendance.
                </Text>
                <FormGroup className="mt-4">
                    <Iframe
                        src="https://dywantsletter.substack.com/embed"
                        width="100%"
                        frameborder="0"
                        scrolling="no"
                    />
                </FormGroup>
            </InnerContainer>
        </DetailsContainer>
    );
}
