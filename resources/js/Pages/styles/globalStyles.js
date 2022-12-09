import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  p{
    font-family: ${(props) => props.theme.fonts.main};
  }

  html {
    font-size: 1rem;
  }
  
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  p, li {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  @media screen and (min-width: 500px){
    html{
      font-size: 14px;
    }
  }
  @media screen and (min-width: 570px){
    html{
      font-size: 15px;
    }
  }
  @media screen and (min-width: 620px){
    html{
      font-size: 16px;
    }
  }
  @media screen and (min-width: 680px){
    html{
      font-size: 17px;
    }
  }
  @media screen and (min-width: 720px){
    html{
      font-size: 18px;
    }
  }
  @media screen and (min-width: 800px){
    html{
      font-size: 19px;
    }
  }
  @media screen and (min-width: 860px){
    html{
      font-size: 20px;
    }
  }
  @media screen and (min-width: 920px){
    html{
      font-size: 21px;
    }
  }
  @media screen and (min-width: 1000px){
    html{
      font-size: 22px;
    }
  }

`;

export const Container = styled.div`
    z-index: 1;
    padding-right: 30px;
    padding-left: 30px;
    width: 100%;

    @media screen and (min-width: 736px) {
        width: 100%;
        max-width: calc(100% - 18.75rem);
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    gap: 1.5rem;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
      gap: 5rem;
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }

    h2 {
        font-style: normal;
        font-weight: 700;
        color: #0f1727;
        padding-bottom: 1rem;
    }

    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 0.6rem;
        color: ${(props) => (props.whiteColor ? "#FFFFFF" : "#0f1727")};
    }

    p {
        font-style: normal;
        font-weight: 400;
        color: ${(props) => (props.whiteColor ? "#FFFFFF" : "#0f1727")};
    }
`;
export default GlobalStyles;
