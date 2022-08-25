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

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: calc(100% - 18.75rem);
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;
export default GlobalStyles;
