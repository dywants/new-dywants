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

  h2 {
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;

    @media screen and (min-width: 736px) {
      font-size: 48px;
      line-height: 55px;
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

    @media screen and (min-width: 736px) {
      gap: 5rem;
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
        color: #0f1727;
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
        font-size: 18px;
        line-height: 32px;
        color: ${(props) => (props.whiteColor ? "#FFFFFF" : "#0f1727")};
    }
`;
export default GlobalStyles;
