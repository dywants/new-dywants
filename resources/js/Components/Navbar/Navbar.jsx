import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SectionButton,
} from "./NavBarStyled";
import LinkElement from "@/Components/LinkElement";
import Dropdown from "@/Components/Dropdown";
import { MenuItems } from "@/Pages/Data/MenuItems";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo href={route("homepage")}>
                        <img
                            src="/assets/logo/logo.png"
                            alt=""
                            className="w-[45px] h-[45px] md:w-full md:h-full"
                        />
                        Dywants
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-md leading-4 font-medium rounded-md text-black bg-white focus:outline-none transition ease-in-out duration-150"
                                            >
                                                Services
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        {MenuItems.map((p, i) => {
                                            return (
                                                <Dropdown.Link
                                                    key={i}
                                                    href={route(`${p.path}`)}
                                                    method="get"
                                                >
                                                    {p.title}
                                                </Dropdown.Link>
                                            );
                                        })}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#">Projets</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href={route("apropos")}>
                                Qui sommes nous
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#">Podcast</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="https://blog.dywants.com">
                                Blog
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <div className="hidden lg:block">
                        <LinkElement href={route("devis")}>
                            Demander un devis
                        </LinkElement>
                    </div>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
