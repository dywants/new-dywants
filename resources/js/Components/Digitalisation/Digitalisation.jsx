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
            <div className="container mx-auto max-w-7xl text-left p-16">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                        <h2 className="text-title font-extrabold leading-9 text-[30px] mb-4">
                            Vous êtes une entreprise? Nous avons ce qu'il vous
                            faut pour la{" "}
                            <span className="text-primary">
                                Croissance digitale
                            </span>{" "}
                            de votre entreprise.
                        </h2>
                        <p className="text-texte font-normal left-6 text-base mb-8">
                            Nous sommes là pour vous permettre d’atteindre vos
                            objectifs. C’est notre passion: assister les
                            entreprises avec ce que nous maîtrisons le mieux; la
                            technologie.
                        </p>
                        <LinkElement primary className="mt-10">
                            Voir nos services
                        </LinkElement>
                    </div>
                    <div className="flex-1">
                        <Image src={"/assets/images/digitalisation.png"} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-10">
                    {InfoDigics.map((p, i) => {
                        return (
                            <div key={i} className="col-span-1 border-r border-[#DFDFDF] last:border-0">
                                <h3 className="text-[25px] leading-9 font-semibold">{p.title}</h3>
                                <p className="text-texte font-normal left-6 text-base mt-2">{p.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Digitalisation;
