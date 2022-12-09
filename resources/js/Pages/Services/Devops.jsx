import Layout from "@/Layouts/Layout.jsx";
import React from "react";
import { Wrapper } from "../styles/globalStyles.js";
import CustomLink from "@/Components/CustomLink";
import LinkElement from "@/Components/LinkElement";
import Image from "@/Components/Elements/Image.jsx";
import { itemsDevps } from "../Data/how-it-works.js";
import CardElementServices from "@/Components/Elements/CardElementServices.jsx";
import CallToAction from "@/Components/Elements/CallToAction.jsx";
import Accordion from "@/Components/Accordion/Accordion.jsx";
import { Helmet } from "react-helmet-async";

const Devops = () => {
    const titles = [
        "Hostinger",
        "DigitalOcean",
        "HTTPS",
        "AWS",
        "Microsoft Azure",
        "PlanetHoster",
        "Hebergement cloud",
        "SSL",
        "VPS",
        "Cloud computer",
        "Docker",
        "Linux",
        "Kubernete",
        "Cpanel",
    ];
    return (
        <>
            <Helmet>
                <title>DYWANTS - Devops</title>
                <meta
                    name="description"
                    content="Nous vous accompagnons dans le choix et dans l'implémentation de la meilleure infrastructure pour vos applications."
                />
                <link
                    rel="canonical"
                    href="https://dywants.com/services/devops-et-deploiements-app/"
                />
            </Helmet>
            <Layout>
                <div
                    className="w-full pb-20 lg:h-[700px] overflow-hidden bg-left object-contain lg:bg-cover lg:object-cover bg-bgHeader"
                    style={{
                        backgroundImage: `url('/assets/images/devops/digital-world-map-hologram-blue-background.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        paddingTop: "0px",
                    }}
                >
                    <div className="wrapper " style={{ marginBottom: "0px" }}>
                        <div className="text-center flex justify-start w-full lg:w-[798px] mx-auto">
                            <div>
                                <h1 className="text-white text-[40px] lg:text-[50px] lg:pt-10 leading-11 font-extrabold ">
                                    Déploiement et maintenance des sites et
                                    applications web
                                </h1>
                                <p className="text-white text-[25px] mt-[30px] mb-[41px]">
                                    Etre en ligne ne suffit pas. Notre expertise
                                    vous permet d’offrir à vos utilisateurs une
                                    expérience différentes à travers une
                                    application ou un site web rapide et
                                    sécurisé.
                                </p>
                                <div>
                                    <LinkElement
                                        primary
                                        href={route("contact")}
                                    >
                                        Contactez-nous
                                    </LinkElement>
                                    <LinkElement
                                        className="ml-2"
                                        href={route("contact")}
                                    >
                                        Faire un devis
                                    </LinkElement>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="my-8">
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    Maintenance ou mise en ligne, nous sommes là
                                    pour vous!
                                </h2>
                                <p>
                                    Votre site internet est enfin prêt! Il ne
                                    reste plus qu’à le rendre disponible auprès
                                    de votre cible.
                                </p>
                                <p>
                                    Nous vous accompagnons tout au long du
                                    processus de mise en ligne de votre site
                                    internet.{" "}
                                </p>
                                <div className="mt-4">
                                    <CustomLink
                                        secondary
                                        href={route("contact")}
                                    >
                                        Contactez-nous
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/devops/devops-image1.png"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section className="my-10">
                    <div className="overflow-hidden flex flex-col-reverse lg:flex-row gap-3 lg:gap-8 items-center">
                        <div className="flex-1">
                            <Image
                                src={"/assets/images/devops/devops-image2.png"}
                            />
                        </div>
                        <div className="flex-1 py-6 lg:px-0 lg:mr-20">
                            <div className="px-5">
                                <h2>
                                    Même si{" "}
                                    <span className="text-primary">
                                        vous partez sw zéro,
                                    </span>{" "}
                                    nous sommes là pour vouas assister
                                </h2>
                                <p className="text-base text-texte leading-7 mb-2">
                                    Vous n’avez pas d’adresse web ? Vous n’êtes
                                    pas propriétaire de votre nom de domaine ?
                                    vous n’avez pas d’hébergeur web ? Pas
                                    d’inquiétude.
                                </p>
                                <p className="text-base text-texte leading-7">
                                    Nous gérons la mise en place de votre
                                    hébergement Web et la gestion du nom de
                                    domaine.
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
                        </div>
                    </div>
                </section>
                <section className="my-10">
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    Nous nous{" "}
                                    <span className="text-primary">
                                        adapatons
                                    </span>{" "}
                                    à votre secteur d’activité.
                                </h2>
                                <p>
                                    Selon vos besoins en ressource serveur,
                                    investissement, usages, audience visée et
                                    stockage nécessaire; nous choisissons
                                    l’hébergement le plus approprié pour vous.
                                </p>
                                <p>
                                    Nous mettons à votre disposition toutes les
                                    dernières technologies en matière de
                                    sécurité.
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
                                <Image
                                    src={
                                        "/assets/images/devops/devops-image3.png"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <div className="w-full md:max-w-xl">
                            <h2>
                                Nous utilisons{" "}
                                <span className="text-primary">
                                    les meilleurs
                                </span>{" "}
                                outils
                            </h2>
                            <p className="mt-2 text-base text-texte leading-7">
                                Nous utilisons des technologies de pointes et
                                nous sommes fières de le dire haut et fort.
                            </p>
                        </div>
                        <div className="my-8 flex flex-wrap gap-1 md:gap-4 overflow-hidden">
                            {titles.map((title, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#F6F8FA] p-5 inline-flex text-base text-title rounded"
                                    >
                                        {title}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <div className="w-full md:max-w-[852px] my-6">
                            <h2>Comment ça marche? </h2>
                            <p className="text-base text-texte left-7 mt-2">
                                Nous travaillons selon les meilleurs normes, ce
                                qui rend chaque livraison facile et
                                compréhensible pour nos clients . Ils peuvent
                                dès lors, suivre chaque étape de la création du
                                produit en toute sérénité
                            </p>
                        </div>
                        <div className="grid w-full  md:grid-cols-3 gap-4 my-10">
                            {itemsDevps.map((item, i) => {
                                return (
                                    <CardElementServices
                                        key={i}
                                        center
                                        w80
                                        h80
                                        title={item.title}
                                        icon={item.img}
                                        describe={item.describe}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="mx-auto w-full px-8 md:max-w-[1120px] text-center md:my-10">
                    <h2>
                        Concentrez-vous sur votre domaine d’activité,{" "}
                        <span className="text-primary">
                            Nous faisons le reste.
                        </span>
                    </h2>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1 p-8">
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
                                        href={route("contact")}
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

export default Devops;
