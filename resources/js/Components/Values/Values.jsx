import React from "react";
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import CardProcess from '../Elements/CardProcess.jsx';
import { valuesInfo } from "@/Pages/Data/values";

const Values = () => {
    return (
        <div className="bg-[#E8E8E8]">
            <div className="container mx-auto max-w-7xl text-left p-16">
                <div className="flex justify-between items-center gap-6">
                    <div className="max-w-[642px] ">
                        <TitleSection title="Nos valeurs" />
                        <Title
                            className="max-w-[624px] mb-4"
                            title="Développer des solutions informatique qui correspondes aux besoins réels de nos clients"
                        />
                        <p className="text-texte text-base font-normal leading-6 opacity-80 mb-8">
                            Une gestion de projet flexible : grâce aux methodes de gestion de projet efficaces et des cycles de planification écourtés,
                        </p>
                    </div>
                    <div className=" flex-1 space-y-4">
                        {
                            valuesInfo.map((value, i) => {
                                return(
                                    <CardProcess title={value.title} icon={value.icon} description={value.description} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
