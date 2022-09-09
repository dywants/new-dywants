import React from "react";
import styled from "styled-components";
import CardExpertise from "@/Components/Elements/CardExpertise";
import { expertises } from "../../Pages/Data/expertises";

const Expertises = () => {
    return (
        <section className="mt-4">
            <div className="flex items-center">
                <div className="flex-1">
                    <img
                        src="assets/images/expertises.png"
                        className="w-full"
                        alt=""
                    />
                </div>
                <div className="flex-1 px-[100px]">
                    <h3 className="text-[36px] font-semibold">
                        Nous mettons tous notre savoir faire pour realiser ce
                        dont vous avez vraiment besoins
                    </h3>
                    <p className="text-[18px] font-normal leanding-3 mt-3">
                        Nous développons des solutions sur mesure qui s’adapte à
                        votre contexte, au niveau de maturité de votre
                        entreprise tout en etant à la pointe de le
                        technologique.
                    </p>
                    <p className="text-[18px] font-normal leanding-3 mt-3">
                        Les technologies que nous utilisons pour le realisation
                        de nos projets web et mobile
                    </p>

                    <div className="mt-3 inline-flex flex-wrap">
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
