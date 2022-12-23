import React from "react";
import { HeaderSection } from "./HeaderStyled";
import "./particle.css";
import LinkElement from "@/Components/LinkElement";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "@inertiajs/inertia-react";

const Header = () => {
    const titles = [
        "dév web",
        "digitalisation",
        "deploiement",
        "support technique",
        "devops",
        "consulting",
        "CMS",
        "dév mobile",
    ];
    return (
        <HeaderSection className="border-gray-200 border-b relative object-left-top py-12 bg-[url('/assets/images/bg-header-home.png')]">
            <div className="wrapper mt0 pb-10 relative">
                <div className="zone-text py-4 lg:py-[113px] flex-1 justify-between w-full lg:max-w-[951px]">
                    <h3 className="text-light leading-7 text-[30px]">
                        Nous sommes des experts
                    </h3>
                    <h1 className="text-white font-bold text-[30px] lg:text-[50px]">
                        Nous transformons les idées de nos Clients en des
                        projets concrets qui Défient toute concurrence
                    </h1>
                    <p className="font-medium text-white mb-8 z-40 w-full lg:max-w-[812px]">
                        Nous sommes des experts, le pont incontournable entre
                        vos idées, leur implémentation et votre succès.
                    </p>
                    <div className="">
                        <LinkElement
                            href={route("contact")}
                            primary
                            classname="mt-4"
                        >
                            Contactez-nous
                        </LinkElement>
                    </div>
                </div>
                <div className="absolute -bottom-8 md:-bottom-12">
                    <Link
                        href={route("services")}
                        className="bg-secondary px-3 py-2 text-white rounded-md hover:opacity-75 duration-75 ease-out"
                    >
                        Nos services
                    </Link>
                </div>
                <div className="absolute -bottom-40 bg-secondary h-16 w-full"></div>
            </div>
            <div className="absolute py-6 bottom-0 bg-secondary w-full">
                <Splide
                    aria-label="Nos recents projets"
                    options={{
                        rewind: true,
                        perPage: 6,
                        drag: "free",
                        autoHeight: true,
                        arrows: false,
                        pagination: false,
                        drag: true,
                        cover: true,
                        autoplay: true,
                        interval: 5000,

                        breakpoints: {
                            768: {
                                perPage: 2, // Used after destruction
                            },
                        },
                    }}
                >
                    {titles.map((title, i) => {
                        return (
                            <SplideSlide key={i} className="text-center">
                                <div className="text-[#D2D2D2] flex items-center justify-center">
                                    {title}{" "}
                                    <div className="w-2 h-2 rounded-full bg-[#748FC4] ml-3"></div>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </HeaderSection>
    );
};

export default Header;
