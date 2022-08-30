import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SectionButton} from "./NavBarStyled";
import LinkElement from "@/Components/LinkElement";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo href={route('homepage')}>
                        <img src="assets/logo/logo.png" alt="" className="w-full h-full"/>
                        Dywants
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks href="#">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#">Projets</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href={route('apropos')}>Qui sommes nous</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#">Podcast</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#">Blog</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <SectionButton className="space-x-2">
                        <LinkElement href={route('contact')} >Demander un devis</LinkElement>
                    </SectionButton>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
