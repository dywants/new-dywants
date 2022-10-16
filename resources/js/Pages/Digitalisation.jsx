import { ReasonWork, InfoDigitalisation } from "@/Pages/Data/digitalisation";
import SectionDigicService from "@/Components/Elements/SectionDigicService";
import SectionFlex from "@/Components/Elements/SectionFlex";
import LinkElement from "@/Components/LinkElement";
import Layout from "@/Layouts/Layout";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "@/Components/Elements/Image";
import styled from "styled-components";

const Digitalisation = () => {
    console.log(InfoDigitalisation.zimbra.temoignages);
    const TemoignageZimbra = [
        {
            id: uuidv4(),
            name: "Stefano Durzo , Oceano SRL",
            comment:
                "Avec Zimbra, nos coûts ont chuté de façon spectaculaire, passant de 3,30 euros par boîte aux lettres par mois à 1,22 euros.",
        },
        {
            id: uuidv4(),
            name: "Oseeterman Research",
            comment:
                "Zimbra offre un TCO inférieur à celui du leader du marché Microsoft Exchange et d'autres systèmes sur site.",
        },
        {
            id: uuidv4(),
            name: "Christine Preusler , HostingAdvice",
            comment:
                "La plate-forme évolutive de Zimbra est reconnue pour son accent sur la sécurité, l'évolutivité et la souveraineté des données.",
        },
    ];
    return (
        <Layout>
            <div
                className="w-full h-[800px] overflow-hidden bg-cover object-cover"
                style={{
                    backgroundImage: `url('/assets/images/digitalisation/bannier-digitalisation.png'),url('/assets/images/digitalisation/header-digitalisation.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="h-screen text-left">
                        <div>
                            <h1 className="text-white text-[50px] pt-[193px] leading-12 font-extrabold w-[798px]">
                                Nous accompagnons les entreprises dans leur
                                processus de digitalisation
                            </h1>
                            <p className="text-white text-[25px] mt-[30px] mb-[41px]">
                                Faites nous confiance, nous l’avons fait pour
                                d’autres Nous le ferons pour vous.
                            </p>
                            <div>
                                <LinkElement primary>
                                    Contactez-nous
                                </LinkElement>
                                <LinkElement className="ml-2">
                                    Faire un devis
                                </LinkElement>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-16">
                <div className="container mx-auto max-w-6xl text-left">
                    <section className="my-24">
                        {InfoDigitalisation.firstSection.map((p, i) => {
                            return (
                                <SectionFlex
                                    key={i}
                                    src={p.src}
                                    title={p.title}
                                    description={p.description}
                                    link={p.linkTitle}
                                    primary
                                    url={route("contact")}
                                />
                            );
                        })}
                    </section>
                    <section className="my-24">
                        {InfoDigitalisation.secondSection.map((p, i) => {
                            return (
                                <SectionFlex
                                    key={i}
                                    src={p.src}
                                    title={p.title}
                                    description={p.description}
                                    descrite={p.describe}
                                    link={p.linkTitle}
                                    reverse
                                    url="#"
                                />
                            );
                        })}
                    </section>
                </div>
            </div>

            <section>
                <div className="my-16 bg-secondaryGraded">
                    <div className="container mx-auto max-w-6xl py-20 text-left">
                        {InfoDigitalisation.zimbra.info.map((p, i) => {
                            return (
                                <SectionDigicService
                                    icon={p.icon}
                                    title={p.title}
                                    description={p.description}
                                    descrite={p.describe}
                                    src={p.src}
                                    link={"Faire un devis"}
                                    link2={"En savoir plus"}
                                    url={route("contact")}
                                    url2={"#"}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Ils l’ont déjà utiliser et témoignent
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {InfoDigitalisation.zimbra.temoignages.map((p, i) => {
                            return (
                                <div
                                    key={i}
                                    className="col-span-1 border-r border-[#DFDFDF] last:border-0"
                                >
                                    <p className="text-texte font-normal left-6 text-base mb-2">
                                        {p.comment}
                                    </p>
                                    <h3 className="text-[18px] leading-6 font-medium">
                                        {p.name}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="my-16 bg-[#E8E8E8]">
                    <div className="container mx-auto max-w-6xl py-20 text-left">
                        {InfoDigitalisation.nextcloud.info.map((p, i) => {
                            return (
                                <SectionDigicService
                                    icon={p.icon}
                                    title={p.title}
                                    description={p.description}
                                    descrite={p.describe}
                                    src={p.src}
                                    secondary
                                    reverse
                                    link={"Faire un devis"}
                                    link2={"En savoir plus"}
                                    url={route("contact")}
                                    url2={"#"}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Pourquoi Nextcloud
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {InfoDigitalisation.nextcloud.raisons.map((p, i) => {
                            return (
                                <div
                                    key={i}
                                    className="col-span-1 border-r border-[#DFDFDF] last:border-0"
                                >
                                    <h3 className="text-[18px] leading-6 font-medium mb-2">
                                        {p.title}
                                    </h3>
                                    <p className="text-texte font-normal left-6 text-base">
                                        {p.texte}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="my-16 bg-secondaryGraded">
                    <div className="container mx-auto max-w-6xl py-20 text-left">
                        {InfoDigitalisation.dolibarr.info.map((p, i) => {
                            return (
                                <SectionDigicService
                                    icon={p.icon}
                                    title={p.title}
                                    description={p.description}
                                    descrite={p.describe}
                                    src={p.src}
                                    link={"Faire un devis"}
                                    link2={"En savoir plus"}
                                    url={route("contact")}
                                    url2={"#"}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Pourquoi Dolibarr
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {InfoDigitalisation.dolibarr.raisons.map((p, i) => {
                            return (
                                <div
                                    key={i}
                                    className="col-span-1 border-r border-[#DFDFDF] last:border-0"
                                >
                                    <h3 className="text-[18px] leading-6 font-medium mb-2">
                                        {p.title}
                                    </h3>
                                    <p className="text-texte font-normal left-6 text-base">
                                        {p.texte}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    {InfoDigitalisation.n8n.map((p, i) => {
                        return (
                            <SectionDigicService key={i}
                                icon={p.icon}
                                title={p.title}
                                description={p.description}
                                src={p.src}
                                secondary
                                reverse
                                link={"Faire un devis"}
                                link2={"En savoir plus"}
                                url={route("contact")}
                                url2={"#"}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                {InfoDigitalisation.nocodb.map((p, i) => {
                        return (
                            <SectionDigicService key={i}
                                icon={p.icon}
                                title={p.title}
                                description={p.description}
                                src={p.src}
                                secondary
                                link={"Faire un devis"}
                                link2={"En savoir plus"}
                                url={route("contact")}
                                url2={"#"}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="my-16 bg-secondaryGraded">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <div className="flex items-start justify-between gap-8">
                        <div className="flex-1">
                            <div className=" max-w-[520px]">
                                <h2 className="text-[30px] font-semibold leading-10 text-white mb-2">
                                    {ReasonWork.titleSection}
                                </h2>
                                <p className="text-white font-normal left-6 text-base mb-4">
                                    {ReasonWork.description}
                                </p>
                                <LinkElement href={"#"}>
                                    Commençons maintenant
                                </LinkElement>
                            </div>
                        </div>
                        <div className="flex-1">
                            <GridSection>
                                {ReasonWork.infoReason.map((p, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="w-[70px] h-[70px] mb-1">
                                                <Image
                                                    src={p.icon}
                                                    className=""
                                                />
                                            </div>
                                            <h4 className="text-white text-justify font-semibold text-2xl mb-2">
                                                {p.title}
                                            </h4>
                                            <p className="text-[#E8E8E8] text-lg font-normal">
                                                {p.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </GridSection>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                {InfoDigitalisation.threeSection.map((p, i) => {
                        return (
                            <SectionFlex key={i}
                                title={p.title}
                                description={p.description}
                                descrite={p.describe}
                                src={p.src}
                                reverse
                                link={"Contactez-nous"}
                                url={route("contact")}
                            />
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
};

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;

    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

export default Digitalisation;
