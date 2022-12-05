import React from "react";
import Layout from "@/Layouts/Layout";
import HeaderPage from "@/Components/Elements/HeaderPage";
import CustomLink from "@/Components/CustomLink";
import Image from "@/Components/Elements/Image";
import LinkElement from "@/Components/LinkElement";
import Accordion from "@/Components/Accordion/Accordion";
import CallToAction from "@/Components/Elements/CallToAction";
import CardItem from "@/Components/Elements/CardItem";
import { Wrapper } from "../styles/globalStyles";
import Item from "@/Components/Elements/Item";
import { Helmet } from "react-helmet-async";

const Nextcloud = ({ reverse }) => {
    const titles = [
        "Solutec",
        "LuminarTech",
        "AVM",
        "GreyTip Softwares",
        "StoryCorp Inc",
    ];
    return (
        <>
            <Helmet>
                <title>DYWANTS - Integrateur Nextcloud Cameroun</title>
                <meta
                    name="description"
                    content="Nous installons, configurons votre instance de Nextcloud sur votre propre serveur web. formons vos equipe a tirer le meilleur de l'outil de collaboration par excellence"
                />
                <link rel="canonical" href="https://dywants.com/digitalisation/integrateur-nextcloud-au-cameroun/" />
            </Helmet>
            <Layout>
                <HeaderPage
                    icon={"/assets/images/digitalisation/nextcloud.png"}
                    smallTile={"-Nous vous proposons le meilleur-"}
                    title={"Plus d'espace.Plus de sécurité.Plus de simplicité"}
                    description={
                        "Nous mettons à votre disposition une solution unique conçue pour vous accompagner dans tous les niveaux de votre activité."
                    }
                    link={"Contactez-nous"}
                    url={route("contact")}
                />

                <section className="my-8">
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    Un seul outil pour toute votre activité.
                                </h2>
                                <p>
                                    La solution ultime pour les entreprises qui
                                    veulent garder le contrôle total de leurs
                                    données et optimiser leur rentabilité.
                                </p>
                                <div className="my-4">
                                    <CustomLink
                                        secondary
                                        href={route("contact")}
                                    >
                                        Contactez-nous
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Item
                                    title={
                                        "Conçu pour une intégration en profondeur dans votre infrastructure"
                                    }
                                    describe={
                                        "En utilisant les répertoires d'utilisateurs et les systèmes de stockage de fichiers existants."
                                    }
                                    icon={"/assets/images/point2.svg"}
                                />
                                <Item
                                    className="bg-secondaryGraded"
                                    whiteColor
                                    title={
                                        "Sécurisé avec les dernières protections"
                                    }
                                    describe={
                                        "Des technologies de connexion sécurisées telles que la protection Brute Force et  l'authentification à 2 facteurs."
                                    }
                                    icon={"/assets/images/point.svg"}
                                />
                                <Item
                                    title={
                                        "Taillé sur mésure pour votre équipe"
                                    }
                                    describe={
                                        "Tout ce dont vous avez besoin pour une activité collaborative efficace et transparente"
                                    }
                                    icon={"/assets/images/point2.svg"}
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper reverse={reverse}>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nextcloud/section-stockage.svg"
                                    }
                                />
                            </div>
                            <div className="flex-1">
                                <h2>
                                    <span className="text-primary">
                                        Votre espace
                                    </span>{" "}
                                    de stockage centralisé pour toute votre
                                    équipe
                                </h2>
                                <p className="mt-2">
                                    Reprenez le contrôle total de vos données.
                                    Nous assurons la conformité, la sécurité et
                                    la disponibilité instantanée de vos données.
                                </p>
                                <p className="mt-2">
                                    Peu importe où se trouvent vos employés,
                                    clients ou partenaires, travaillez sans
                                    crainte vos sont accessibles en tout temps.
                                </p>
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper reverse={reverse}>
                            <div className="flex-1">
                                <h2>
                                    <span className="text-primary">
                                        Ne manquez plus rien,
                                    </span>{" "}
                                    créez les réunions et discuter en équipe
                                </h2>
                                <p className="mt-2">
                                    Gérez directement votre calendrier
                                    professionnel et discuter en temps réels
                                    avec tous les membres de votre équipe grâce
                                    à votre messagerie privée.
                                </p>
                                <div className="mt-4">
                                    <CustomLink
                                        secondary
                                        url={route("contact")}
                                    >
                                        Faire un devis
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nextcloud/section-discussion.svg"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper reverse={reverse}>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nextcloud/section-productivité.svg"
                                    }
                                />
                            </div>
                            <div className="flex-1">
                                <h2>
                                    Encore plus de productivité, toujours{" "}
                                    <span className="text-primary">
                                        plus de rentabilité.
                                    </span>{" "}
                                </h2>
                                <p className="mt-2">
                                    Outil d'organisation de style Kanban destiné
                                    à la planification personnelle et à
                                    l'organisation de projets pour les équipes
                                    intégrées à Nextcloud.
                                </p>
                                <p className="mt-2">
                                    Organisation de projets Échange avec les
                                    collaborateurs Partage de tâches avec les
                                    équipes Gestion des fichiers attachés
                                </p>
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper reverse={reverse}>
                            <div className="flex-1">
                                <h2>
                                    Des centaines d’extensions pour
                                    personnaliser{" "}
                                    <span className="text-primary">
                                        votre besoin
                                    </span>{" "}
                                </h2>
                                <p className="mt-2">
                                    A travers Nextcloud, nous mettons à votre
                                    disposition de nombreuses applications
                                    annexes pour completer vos potentiels
                                    besoins.
                                </p>
                                <div className="mt-4">
                                    <CustomLink
                                        secondary
                                        url={route("contact")}
                                    >
                                        Faire un devis
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nextcloud/section-extension.svg"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section className="bg-bgSection">
                    <div className="wrapper py-16">
                        <div className="column-1 md:columns-2 py-2">
                            <div className="py-2">
                                <h2 className="text-[36px] font-semibold leading-10 mb-2">
                                    Des milliers d’entreprises ont fait le pas,{" "}
                                    <span className="text-secondaryGraded">
                                        {" "}
                                        pourquoi pas vous ?
                                    </span>
                                </h2>
                                <p className=" font-light mb-2">
                                    Nous vous accompagnons avec un outil qui a
                                    déjà fait ses preuves. Nextcloud est le plus
                                    souvent utlisé par des entreprises avec un
                                    revenu de 1 à 10 millions de dollars.
                                </p>
                                <p className=" font-light mb-2">
                                    Mais nous l’adaptons parfaitement avec tout
                                    type d’entreprise peu importe le niveau
                                    d’activité.
                                </p>
                            </div>
                            <div>
                                <p className=" font-light mb-2">
                                    Il est utilisé dans les secteurs de la
                                    télécommunication, la technologie, le
                                    commerce, le service financier, la publicité
                                    marketing, l’automobile, l’education etc.
                                </p>
                            </div>
                        </div>
                        <CardItem titles={titles} />
                        <div className="text-center mt-10">
                            <LinkElement href={route("contact")}>
                                Travaillons ensembles
                            </LinkElement>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1 py-4">
                                <h2>
                                    Vous avez des interrogations,Nous avons{" "}
                                    <span className="text-primary">
                                        des réponses.
                                    </span>{" "}
                                </h2>
                                <p className="mt-2">
                                    Nous sommes là pour vous aider. Si vous ne
                                    trouvez pas la réponse à votre question ici,
                                    contactez-nous. C'est avec plaisir que nous
                                    discuterons avec vous.
                                </p>
                                <div className="mt-4">
                                    <CustomLink
                                        secondary
                                        url={route("contact")}
                                    >
                                        Contactez-nous
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1 py-4">
                                <Accordion />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section className="my-8">
                    <CallToAction />
                </section>
            </Layout>
        </>
    );
};

export default Nextcloud;
