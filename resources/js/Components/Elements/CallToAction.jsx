import React from "react";
import CustomLink from "@/Components/CustomLink";

const CallToAction = () => {
    return (
        <div className="container mx-auto max-w-6xl px-7 pb-10">
            <div className="wrapper bg-primary px-14 py-16 flex gap-4 items-center justify-between rounded-md shadow-xl">
                <div className="left">
                    <h2 className="text-white">Besoin d’un service ?</h2>
                    <p className="text-white font-thin text-muted w-[620px]">
                        Nous serons ravis de vous aider peu importe votre
                        préoccupation. N’hesitez pas à nous ecrire, c’est avec
                        plaisir que nous vous aiderons.
                    </p>
                </div>

                <CustomLink secondary href={route("contact")}>
                    Demander un devis
                </CustomLink>
            </div>
        </div>
    );
};

export default CallToAction;
