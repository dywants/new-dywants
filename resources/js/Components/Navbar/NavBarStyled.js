import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

export const Nav = styled.nav`
    background: transparent;
    justify-content: center;
    align-items: center; */
    color: black;
    font-size: 1.2rem;
    z-index: 0;

   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(100% - 3rem);
    margin: 0 auto;
    width: 100%;

    @media screen and (min-width: 726px) {
      max-width: calc(100% - 4.75rem);
    }
`;

export const NavLogo = styled(Link)`
  color: black !important;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  padding-top:1rem:
  padding-bottom:1rem;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.logo};

  @media screen and (min-width: 726px) {
    font-size: 1.8rem;
    padding:0;
  }

  {Link}
`;

export const MobileIcon = styled.div`
    display: none;
    @media ${(props) => props.theme.breakpoints.md} {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    padding-top: 1rem;
    z-index:40;
    position: absolute;
    top: 48px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
    background: ${(props) => props.theme.colors.dark};
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.dark};
  padding: 1rem 0;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    color: ${(props) => props.theme.colors.light};

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #0A142F;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  {Link}

  &:active {
    color: red;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    padding: 1.3rem;
    width: 100%;
    display: table;color: ${(props) => props.theme.colors.light};

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transition: all 0.3s ease;
    }
  }
`;

export const SectionButton = styled.div`
  display:none;
  > button {
    margin-left: 1rem;
  }
  @media screen and (min-width: 726px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
