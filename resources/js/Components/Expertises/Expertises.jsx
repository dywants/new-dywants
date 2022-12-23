import React from "react";
import CardExpertise from "@/Components/Elements/CardExpertise";
import { expertises } from "../../Pages/Data/expertises";
import TitleSection from "../Elements/TitleSection";
import Title from "../Elements/Title.jsx";
import { Link } from "@inertiajs/inertia-react";

const Expertises = () => {
    return (
        <section className="mt-10">
            <div className="flex flex-col gap-5 lg:flex-row items-start">
                <div className="flex-1">
                    <img
                        src="/assets/images/expertises/programer-code-cloud.jpeg"
                        className="w-full rounded-md"
                        alt=""
                    />
                    <div className="text-right mt-8">
                        <Link
                            href={route("apropos")}
                            className="flex space-x-1 items-center text-lg text-primary"
                        >
                            <a>En savoir plus</a>
                            <img
                                className="w-8 h-8"
                                src="assets/images/icons/right-arrow.png"
                                alt="right-arrow icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <TitleSection title="Notre expertise" />
                    <Title
                        title={
                            "Nous mettons tous notre savoir faire pour realiser cedont vous avez vraiment besoins"
                        }
                    />
                    <p className="font-normal leading-6 mt-3">
                        Nous développons des solutions sur mesure qui s’adapte à
                        votre contexte, au niveau de maturité de votre
                        entreprise tout en etant à la pointe de le
                        technologique.
                    </p>
                    <p className="font-normal leading-6 mt-3">
                        Les technologies que nous utilisons pour le realisation
                        de nos projets web et mobile
                    </p>

                    <div className="mt-6 inline-flex gap-4 flex-wrap">
                        {expertises.map((expertise) => {
                            return (
                                <CardExpertise
                                    key={expertise.id}
                                    img={expertise.img}
                                    name={expertise.name}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertises;
