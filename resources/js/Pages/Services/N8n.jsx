import HeaderPage from "@/Components/Elements/HeaderPage";
import Layout from "@/Layouts/Layout";
import CustomLink from "@/Components/CustomLink";
import React from "react";
import { Wrapper } from "../styles/globalStyles";
import Image from "@/Components/Elements/Image";
import CardItem from "@/Components/Elements/CardItem";
import LinkElement from "@/Components/LinkElement";
import CallToAction from "@/Components/Elements/CallToAction";
import Accordion from "@/Components/Accordion/Accordion";

const N8n = () => {
    const titles = [
        "CBS",
        "Adobe",
        "Fielda",
        "Nova Benefits",
        "Pearson",
    ];
    return (
        <Layout>
            <HeaderPage
                icon={"/assets/images/digitalisation/n8n.png"}
                smallTile={"-Nous vous proposons le meilleur-"}
                title={"Votre activité devient autonome"}
                description={
                    "Automatisez facilement les tâches entre différents services. Synchronisez les données entre différentes applications/bases de données."
                }
                link={"Contactez-nous"}
                url={route("contact")}
            />
            <section className="my-8">
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>
                                Nous mettons à votre Disposition l’
                                <span className="text-primary">
                                    outil idéal.
                                </span>
                            </h2>
                            <p>
                                Créez des flux de travail puissants et très
                                rapidement.
                            </p>
                            <p className="mt-2">
                                Tous les processus répétitifs peuvent maintenant
                                être gérer automatiquement sans intervention.
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
                                    Contactez-nous
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={"/assets/images/n8n/connexion-n8n.png"}
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1">
                            <Image src={"/assets/images/n8n/rentabilite.png"} />
                        </div>
                        <div className="flex-1">
                            <h2>
                                Reduisez votre charge de travail et{" "}
                                <span className="text-primary">
                                    Boostez votre rentabilité
                                </span>{" "}
                            </h2>
                            <p className="mt-2">
                                Vous n’avez plus qu’à vous concentrer sur les
                                tâches qui necessitent vraiment votre attention.
                            </p>
                            <p className="mt-2">
                                Nous faisons tout le reste du travail pour vous.
                            </p>
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section className="my-8">
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>
                                Plus de{" "}
                                <span className="text-primary">
                                    200 intégrations
                                </span>{" "}
                                externes
                            </h2>
                            <p>
                                Créez des automatisations avec vos applications
                                préférées.
                            </p>
                            <p className="mt-2">
                                Des applications de communications, marketing de
                                contenu, finance, ventes, producitivté, données
                                et structures. Boostez maintenant votre
                                activité.
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
                                    Faire un devis
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={"/assets/images/n8n/integration-n8n.png"}
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section className="bg-bgSection">
                <div className="wrapper py-16">
                    <div className="columns-1 md:columns-2 py-2">
                        <div className="py-2">
                            <h2 className="text-[36px] font-semibold leading-10 mb-2">
                                Des milliers d’entreprises ont fait le pas,{" "}
                                <span className="text-secondaryGraded">
                                    {" "}
                                    pourquoi pas vous ?
                                </span>
                            </h2>
                            <p className="font-light mb-2">
                                Nous vous accompagnons avec un outil qui a déjà
                                fait ses preuves. Notre expertise au service de
                                votre entreprise afin de repondre à votre besoin
                                de manière éfficace.
                            </p>
                        </div>
                        <div>
                            <p className="font-light mb-2">
                                Il est utilisé dans les secteurs de la
                                communication, la publicité marketing, la
                                technologie, le service financier, l’education,
                                la santé etc.
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
                                Nous sommes là pour vous aider. Si vous ne trouvez pas la réponse à votre question ici, contactez-nous. C'est avec plaisir que nous  discuterons avec vous.
                            </p>
                            <div className="mt-4">
                                <CustomLink secondary url={route("contact")}>
                                    Contactez-nous
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1 py-4">
                            <Accordion/>
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section className="my-8">
                <CallToAction/>
            </section>
        </Layout>
    );
};

export default N8n;
