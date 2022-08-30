import React from "react";
import Button from "../Button";
import Particules from "../Particules";
import { HeaderSection } from "./HeaderStyled";
import "./particle.css";
import LinkElement from "@/Components/LinkElement";

const Header = () => {
    return (
        <HeaderSection className="border-gray-200 border-b relative py-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="zone-text py-[113px] flex-1 justify-between space-x-4">
                        <div className="w-[400px] h-[60px] rounded-md bg-gray-200 p-2 inline-flex space-x-2 items-center">
                            {/*<div className="w-10 h-10 rounded-full bg-[#FFB400]"></div>*/}
                            <div className="text-[20px] font-semibold leading-7">
                                Agence de développement informatique
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-white font-bold text-[60px]">
                                Let us create what you want!
                            </h1>
                        </div>
                        <p className="font-medium text-[22px] text-white mb-4 z-40">
                            Nous vous proposons des solutions
                            innovantes pour votre business.
                        </p>
                        <LinkElement href={route('contact')} primary classname="mt-4">Demander un devis</LinkElement>
                        <LinkElement href={route('apropos')} classname="mt-4">En savoir plus</LinkElement>
                    </div>
                    <div className="zone-image relative flex-1 flex-end flex items-center justify-center">
                        <img
                            className="flex-end"
                            src="assets/images/banner_header.png"
                            alt="banner image"
                        />
                    </div>

                    <div className="absolute left-[460px] top-[300px] w-[40px] h-[40px] bg-[#FFB400] rounded-full flex justify-center items-center">
                        <img
                            src="assets/images/ellipse.png"
                            className=""
                            alt=""
                        />
                    </div>
                    <img
                        src="assets/images/+.png"
                        className="absolute right-[460px] bottom-[10px]"
                        alt=""
                    />
                    <img
                        src="assets/images/ellipse.png"
                        className="absolute top-8 right-8"
                        alt=""
                    />
                    <img
                        src="assets/images/+.png"
                        className="absolute left-10 top-6"
                        alt=""
                    />
                    <img
                        src="assets/images/+.png"
                        className="absolute bottom-4 left-0"
                        alt=""
                    />
                </div>
            </div>
            <Particules />
            <img src="assets/images/header_circles.png" alt="" className="absolute -top-12 -right-16 -z-40"/>
        </HeaderSection>
    );
};

export default Header;
