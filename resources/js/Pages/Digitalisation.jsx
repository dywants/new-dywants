import { ReasonWork } from "@/Pages/Data/digitalisation";
import SectionDigicService from "@/Components/Elements/SectionDigicService";
import SectionFlex from "@/Components/Elements/SectionFlex";
import LinkElement from "@/Components/LinkElement";
import Layout from "@/Layouts/Layout";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "@/Components/Elements/Image";
import styled, { css } from "styled-components";

const Digitalisation = () => {
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
                        <SectionFlex
                            src={
                                "/assets/images/digitalisation/collaboration.png"
                            }
                            title={
                                "Nous avons tout ce qu’il vous faut pour faire évoluer votre business d’un cran"
                            }
                            description={
                                "Peu importe votre strategie, nous mettons à votre disposition les outils les plus performants pour vous garantir une croissance exponentielle. "
                            }
                            link={"Commençons maintenant"}
                            primary
                            url="#"
                        />
                    </section>
                    <section className="my-24">
                        <SectionFlex
                            src={"/assets/images/digitalisation/nocode.png"}
                            title={
                                "Plus de 98% des entreprises reconnaissent que leur succès repose sur une approche digitale réussie. "
                            }
                            description={
                                "Nous sommes là pour vous permettre d’atteindre vos objectifs.C’est notre passion: assister les entreprises avec ce que nous maîtrisons le mieux; la technologie."
                            }
                            descrite={
                                "Mailing professionnel, outils de collaboration, automatisations, planifications de projets, gestion d’entreprises etc. Tout est là pour vous!"
                            }
                            link={"Commençons maintenant"}
                            reverse
                            url="#"
                        />
                    </section>
                </div>
            </div>

            <section>
                <div className="my-16 bg-secondaryGraded">
                    <div className="container mx-auto max-w-6xl py-20 text-left">
                        <SectionDigicService
                            icon={"/assets/images/digitalisation/zimbraZ.png"}
                            title={
                                "Zimbra - Outils de messagerie et de collaboration"
                            }
                            description={
                                "Zimbra est utilisé par des centaines de millions de personnes & organisations dans le monde."
                            }
                            descrite={
                                "Le meilleur e-mail professionnel, meilleurs outils de productivité pour les équipes de travail au bureau et à distance des micro, petites, moyennes et entreprises"
                            }
                            src={
                                "/assets/images/digitalisation/zimbra-info.png"
                            }
                            link={"Faire un devis"}
                            link2={"En savoir plus"}
                            url={"#"}
                            url2={"#"}
                        />
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Ils l’ont déjà utiliser et témoignent
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {TemoignageZimbra.map((p, i) => {
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
                        <SectionDigicService
                            icon={"/assets/images/digitalisation/nextcloud.png"}
                            title={"Nextcloud - Outils de collaboration"}
                            description={
                                "La solution de collaboration auto-hébergée la plus populaire pour des dizaines de millions d'utilisateurs dans des milliers d'organisations à travers le monde."
                            }
                            descrite={
                                "Nextcloud Files offre une plate-forme d'accès universel aux fichiers et de synchronisation sur site avec de puissantes capacités de collaboration et des interfaces de bureau, mobiles et Web."
                            }
                            src={
                                "/assets/images/digitalisation/nextcloud-info.png"
                            }
                            reverse
                            secondary
                            link={"Faire un devis"}
                            link2={"En savoir plus"}
                            url={"#"}
                            url2={"#"}
                        />
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Ils l’ont déjà utiliser et témoignent
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {TemoignageZimbra.map((p, i) => {
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
                <div className="my-16 bg-secondaryGraded">
                    <div className="container mx-auto max-w-6xl py-20 text-left">
                        <SectionDigicService
                            icon={"/assets/images/digitalisation/dolibarr.png"}
                            title={
                                "Dolibarr - Une suite Web pour gérer l'ensemble de votre entreprise"
                            }
                            description={
                                "Utilisé par des millions d'utilisateurs dans le monde, Dolibarr ERP CRM est devenu une solution intégrée majeure dans le monde Open Source."
                            }
                            src={
                                "/assets/images/digitalisation/dolibarr-info.png"
                            }
                            link={"Faire un devis"}
                            link2={"En savoir plus"}
                            url={"#"}
                            url2={"#"}
                        />
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <h3 className="text-[#454545] font-semibold text-[22px] leading-7 mb-2">
                        Ils l’ont déjà utiliser et témoignent
                    </h3>
                    <div className="grid grid-cols-3 gap-8 mt-10">
                        {TemoignageZimbra.map((p, i) => {
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

            <section className="my-16">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <SectionDigicService
                        icon={"/assets/images/digitalisation/n8n.png"}
                        title={
                            "n8n.io - Automatisez tous sans limites et faites passer votre flux de travail au max."
                        }
                        description={
                            "Grâce à cette outil, nous vous permettons de gagner du temps et bien-sûr de l’argent. Ameliorez votre flux de travail et limitez vos interventions manuelles au maximum"
                        }
                        src={"/assets/images/digitalisation/n8n-info.png"}
                        secondary
                        reverse
                        link={"Faire un devis"}
                        link2={"En savoir plus"}
                        url={"#"}
                        url2={"#"}
                    />
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <SectionDigicService
                        icon={"/assets/images/digitalisation/nocodb.png"}
                        title={
                            "NocoDB - Analysez, traitez et collectez vos données autrements."
                        }
                        description={
                            "NocoDB est une plateforme open source #NoCode qui transforme n'importe quelle base de données en une feuille de calcul intelligente."
                        }
                        src={"/assets/images/digitalisation/nocodb-info.png"}
                        secondary
                        link={"Faire un devis"}
                        link2={"En savoir plus"}
                        url={"#"}
                        url2={"#"}
                    />
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
                    <SectionFlex
                        src={"/assets/images/digitalisation/nocode.png"}
                        title={
                            "Qu’attendez-vous pour faire passer votre activité au niveau supérieur?"
                        }
                        description={
                            "Qu’attendez-vous pour faire passer votre activité au niveau supérieur? Nous avons tous les outils pour la croissance exponentielle de votre activité."
                        }
                        descrite={
                            "Et nous ne le disons pas juste pour dire, nous avons réellement ce qu’il vous faut."
                        }
                        link={"Contactez-nous"}
                        reverse
                        url="#"
                    />
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
