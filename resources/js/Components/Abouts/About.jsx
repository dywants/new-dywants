import React from "react";
import Title from "../Elements/Title";
import TitleSection from "../Elements/TitleSection";
import { aboutInfo } from "@/Pages/Data/aboutSection";
import Expertises from "../Expertises/Expertises.jsx";

const About = () => {
    return (
        <div className="wrapper">
            {aboutInfo.map((p, index) => {
                return (
                    <div key={index}>
                        <TitleSection title={p.titleSection} />
                        <div className="flex items-start flex-col md:flex-row justify-between gap-8">
                            <div className="flex-1">
                                <Title title={p.title} />
                            </div>
                            <div className="flex-1">
                                <p className="text-texte text-lg leading-6 font-normal">
                                    {p.description1}
                                </p>
                                <p className="text-texte text-lg leading-6 font-normal mt-2">
                                    {p.description2}
                                </p>
                            </div>
                        </div>
                        <div className="card3 gap-2 my-8">
                            {p.images.map((src, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="z-40 h-[250px] md:h-[400px] rounded relative"
                                        style={{
                                            backgroundImage: `url('/assets/images/apropos/bg-degraded.png'),url(${src.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <div className="absolute rounded-t-md rounded-r-none bg-secondary w-28 h-10 flex items-center justify-center text-white">
                                            {src.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <Expertises />
        </div>
    );
};

export default About;
