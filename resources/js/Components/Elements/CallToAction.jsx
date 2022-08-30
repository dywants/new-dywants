import React from 'react';
import LinkElement from "@/Components/LinkElement";

const CallToAction = () => {
    return (
        <div className="container mx-auto max-w-6xl px-7 pb-10">
            <div className="wrapper bg-[#FFB400] px-14 py-16 rounded-tl-3xl rounded-br-3xl flex items-center justify-between">
                <div className="left">
                    <h2 className="text-white">Besoin d’un service ?</h2>
                    <p className="text-white font-thin text-muted">Demandez un dévis et soyez fixé sur les détails</p>
                </div>

                <LinkElement href={route('contact')} className="bg-[#1B3567] p-2 text-white rounded-md">Demander un devis</LinkElement>

            </div>
        </div>
    );
};

export default CallToAction;
