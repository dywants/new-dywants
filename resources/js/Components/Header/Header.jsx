import React from "react";
import { HeaderSection } from "./HeaderStyled";
import "./particle.css";
import LinkElement from "@/Components/LinkElement";

const Header = () => {
    return (
        <HeaderSection className="border-gray-200 border-b relative py-12 bg-secondary">
            <div className="wrapper">
                <div className="flex flex-col lg:flex-row items-center justify-between relative">
                    <div className="zone-text py-4 lg:py-[113px] flex-1 justify-between">
                        <h3 className="text-light leading-7 text-[30px] italic">Agence de développement informatique</h3>
                        <h1 className="text-white font-bold text-[40px] lg:text-[60px]">
                                Let us create what you want!
                        </h1>
                        <p className="font-medium text-white mb-8 z-40">
                            Nous vous proposons des solutions innovantes pour
                            votre business.
                        </p>
                        <div className="flex flex-col md:flex-row gap-3 text-center">
                            <LinkElement
                                href={route("contact")}
                                primary
                                classname="mt-4"
                            >
                                Demander un devis
                            </LinkElement>
                            <LinkElement
                                href={route("apropos")}
                                classname="mt-4 md:ml-2"
                            >
                                En savoir plus
                            </LinkElement>
                        </div>
                    </div>
                    <div className="zone-image pt-4 md:p-0 relative flex-1 flex-end flex items-center justify-center">
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
            <img
                src="assets/images/header_circles.png"
                alt=""
                className="absolute -top-12 -right-16 -z-40 hidden lg:block"
            />
        </HeaderSection>
    );
};

export default Header;
