import React from "react";
import Image from "../Elements/Image";
import Title from "../Elements/Title";
import TitleSection from "../Elements/TitleSection";
import { aboutInfo } from "@/Pages/Data/aboutSection";
import { Link } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <div className="container mx-auto max-w-6xl px-7 my-10">
            {aboutInfo.map((p, index) => {
                return (
                    <div key={index}>
                        <TitleSection title={p.titleSection} />
                        <div className="flex items-start justify-between gap-8">
                            <div className="flex-1">
                                <Title title={p.title} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-title font-semibold leading-10 mb-4 text-[30px]">
                                    {p.compagny}
                                </h3>
                                <p className="text-texte text-lg leading-6 font-normal">
                                    {p.description1}
                                </p>
                                <p className="text-texte text-lg leading-6 font-normal mt-2">
                                    {p.description2}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-2 my-8">
                            {
                                p.images.map((src, index) => {
                                    return (
                                        <Image key={index} src={src.image} name={src.name} />
                                    )
                                })
                            }
                        </div>
                        <div className="text-right">
                            <Link href={route('apropos')} className="flex space-x-1 items-center text-lg text-primary">
                                <a>En savoir plus</a>
                                <img className="w-8 h-8" src="assets/images/icons/right-arrow.png" alt="right-arrow icon" />
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
