import React from "react";
import Layout from "@/Layouts/Layout";
import HeaderOtherPages from "@/Components/Elements/HeaderOtherPages.jsx";
import { Wrapper } from "../styles/globalStyles.js";
import Image from "@/Components/Elements/Image.jsx";
import {
    itemsCusmens,
    itemsDevelopment,
} from "../Data/services-development.js";
import CardElementServices from "@/Components/Elements/CardElementServices.jsx";
import CallToAction from "@/Components/Elements/CallToAction.jsx";
import Accordion from "@/Components/Accordion/Accordion.jsx";
import CustomLink from "@/Components/CustomLink.jsx";
import { Helmet } from "react-helmet-async";

const DevelopmentWeb = () => {
    const titles = [
        "Objective-C",
        "Laravel",
        "ReactJS",
        "React Native",
        "Flutter",
        "Typescript",
        "AngularJS",
        "ElectronJS",
        "Python",
        "Django",
        "VueJS",
        "NodeJs/ Express",
        "Oracle",
        "MongoDB",
        "+12 autres",
    ];
    return (
        <>
            <Helmet>
                <title>DYWANTS - Developpement web&mobile</title>
                <meta
                    name="description"
                    content="Nous developpons pour des sites web et application performantes qui correspondent a vos besoins avec des outils modernes "
                />
                <link rel="canonical" href="https://dywants.com/services/developpement-web/" />
            </Helmet>
            <Layout>
                <HeaderOtherPages
                    image={"/assets/images/development/pc-4-screens.png"}
                    title={
                        "Nous créons des applications et des sites web magnifiques et interactifs."
                    }
                    describe={
                        "Nous associons les meilleures pratiques en matière d'interface et d'expérience utilisateur au processus de valorisation de votre marque, afin de développer des produits inspirants et des technologies qui correspondent à l'objectif et aux besoins de votre public cible."
                    }
                    link={"Contactez-nous"}
                    url={route("contact")}
                />
                <section className="md:mt-8" style={{ marginBottom: "-4rem" }}>
                    <div className="wrapper text-left">
                        <Wrapper className="pb-28 md:pb-40">
                            <div className="flex-1 md:pt-8">
                                <div className="w-full md:max-w-2xl">
                                    <h2>
                                        Nous sommes une équipe Tournée vers,{" "}
                                        <span className="text-primary">
                                            le future.
                                        </span>
                                    </h2>
                                    <p>
                                        Nos ingénieurs sont des spécialistes
                                        avérés qui n'ont pas peur de trouver les
                                        meilleures solutions pour chaque besoin.
                                        S’il le faut, ces solutions seront
                                        créées uniquement pour vous.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <Image
                                    src={
                                        "/assets/images/development/vue-laterale-portrait-femme-developpeuse.png"
                                    }
                                />
                                <div className="absolute md:-bottom-32 md:-left-32 w-32 h-32 md:w-52 md:h-52 -bottom-20 -left-6">
                                    <Image
                                        src={
                                            "/assets/images/development/db-icon.png"
                                        }
                                    />
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="overflow-hidden flex flex-col-reverse md:flex-row gap-5 md:gap-8 items-center">
                        <div className="flex-1">
                            <Image
                                src={
                                    "/assets/images/development/pc-laptop-iphone.png"
                                }
                            />
                        </div>
                        <div className="flex-1 px-6 md:mr-16">
                            <div className="px-5">
                                <h2>
                                    Chaque projet est une oeuvre{" "}
                                    <span className="text-primary">
                                        unique.
                                    </span>
                                </h2>
                                <p className="text-base text-texte leading-7 my-2">
                                    Votre projet est unique au monde parce que
                                    c’est le votre! C’est pour cela que nous ne
                                    créons pas des solutions pré-assemblées sans
                                    étude.
                                </p>
                                <p className="text-base text-texte leading-7">
                                    Chaque projet implique des étapes de
                                    recherche sur le public cible et de test de
                                    protoypes. Résultat? Vous obtenez un produit
                                    parfaitement adapté à vos utilisateurs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wrapper text-left">
                        <div className="w-full md:max-w-2xl mb-2">
                            <h2>
                                Des services{" "}
                                <span className="text-primary">de qualité</span>{" "}
                                sur mesure.
                            </h2>
                        </div>
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <p className="max-w-2xl">
                                Nous sommes des experts. Nous maîtrisons
                                parfaitement toute la chaîne de production des
                                produits qui font la différence.
                            </p>
                            <p className="max-w-xl">
                                Quels que soient les besoins de votre
                                entreprise, notre équipe de développement de
                                produits est là pour vous aider à trouver la
                                meilleure solution.
                            </p>
                        </div>
                        <div className="grid w-full md:grid-cols-4 gap-4 my-10">
                            {itemsDevelopment.map((item, i) => {
                                return (
                                    <CardElementServices
                                        key={i}
                                        title={item.title}
                                        icon={item.img}
                                        describe={item.describe}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <div className="w-full md:max-w-xl">
                            <h2>
                                Nos meilleures armes pour affronter{" "}
                                <span className="text-primary">
                                    tous type de projet
                                </span>
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
                        <div className="w-full md:max-w-2xl">
                            <h2>
                                Le client est au {""}
                                <span className="text-primary">
                                    centre de tout
                                </span>
                            </h2>
                            <p className="mt-2 text-base text-texte leading-7">
                                Nous travaillons selon les meilleurs normes, ce
                                qui rend chaque livraison facile et
                                compréhensible pour nos clients . Ils peuvent
                                dès lors, suivre chaque étape de la création du
                                produit en toute sérénité.
                            </p>
                        </div>
                        <div className="grid w-full md:grid-cols-3 gap-4 my-10">
                            {itemsCusmens.map((item, i) => {
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
                <section className="mx-auto px-8 md:max-w-[1120px] text-center my-10">
                    <h2>
                        Nous créons des{" "}
                        <span className="text-primary">produits uniques</span>{" "}
                        qui offrent une veritable valeur ajoutée.
                    </h2>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1 py-8">
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

export default DevelopmentWeb;
