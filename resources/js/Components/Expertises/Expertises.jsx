import React from "react";
import CardExpertise from "@/Components/Elements/CardExpertise";
import { expertises } from "../../Pages/Data/expertises";
import TitleSection from "../Elements/TitleSection";
import Title from "../Elements/Title.jsx";

const Expertises = () => {
    return (
        <section className="mt-4">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-1">
                    <img
                        src="assets/images/expertises.png"
                        className="w-full"
                        alt=""
                    />
                </div>
                <div className="flex-1 px-8 lg:px-[100px]">
                    <TitleSection title="Notre expertise"/>
                    <Title title={'Nous mettons tous notre savoir faire pour realiser cedont vous avez vraiment besoins'}/>
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

                    <div className="mt-3 inline-flex gap-4 flex-wrap">
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
