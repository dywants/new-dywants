import React from "react";
import LinkElement from "@/Components/LinkElement";
import Image from "../Elements/Image";
import { v4 as uuidv4 } from "uuid";

const Digitalisation = () => {
    const InfoDigics = [
        {
            id: uuidv4(),
            title: "Gagner du temps",
            description:
                "Nos outils vous permettent d’être plus efficace en moins de temps.",
        },
        {
            id: uuidv4(),
            title: "Plus de productivité",
            description:
                "Occupez-vous seulement des tâches les plus importantes.",
        },
        {
            id: uuidv4(),
            title: "Une croissance exponentielle",
            description: "Une approche différente pour atteindre votre but.",
        },
    ];
    return (
        <div className="">
            <div className="wrapper">
                <div className="card2">
                    <div className="flex-1">
                        <h2 className="text-title font-extrabold text-[30px] md:leading-8 md:text-[40px] mb-4">
                            Vous êtes une entreprise? Nous avons ce qu'il vous
                            faut pour la{" "}
                            <span className="text-primary">
                                Croissance digitale
                            </span>{" "}
                            de votre entreprise.
                        </h2>
                        <div className="mb-6 space-y-2">
                            <p className="text-texte font-normal">
                                Nous sommes là pour vous permettre d’atteindre
                                vos objectifs.
                            </p>
                            <p className="text-texte font-normal">
                                C’est notre passion: assister les entreprises
                                avec ce que nous maîtrisons le mieux la
                                technologie.
                            </p>
                        </div>
                        <div className="pb-2 lg:pb-0">
                            <LinkElement
                                primary
                                className="mt-10"
                                href={route("digitalisation")}
                            >
                                Voir nos services
                            </LinkElement>
                        </div>
                    </div>
                    <div className="flex-1 mt-8 md:mt-0">
                        <Image src={"/assets/images/digitalisation.png"} />
                    </div>
                </div>
                <div className="grid grid-col-1 md:grid-cols-3 gap-1 md:gap-8 mt-10">
                    {InfoDigics.map((p, i) => {
                        return (
                            <div
                                key={i}
                                className="col-span-1 border-b md:border-b-0 pr-2 pb-3 md:pb-0 md:border-r border-[#DFDFDF] last:border-0"
                            >
                                <h3 className="text-[25px]  leading-9 font-semibold">
                                    {p.title}
                                </h3>
                                <p className="text-texte font-normal left-6 text-base mt-2">
                                    {p.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Digitalisation;
