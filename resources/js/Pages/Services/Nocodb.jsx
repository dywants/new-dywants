import HeaderPage from "@/Components/Elements/HeaderPage";
import Image from "@/Components/Elements/Image";
import Layout from "@/Layouts/Layout";
import React from "react";
import CustomLink from "@/Components/CustomLink";
import LinkElement from "@/Components/LinkElement";
import CardItem from "@/Components/Elements/CardItem";
import Accordion from "@/Components/Accordion/Accordion";
import CallToAction from "@/Components/Elements/CallToAction";
import { Wrapper } from "../styles/globalStyles";

const Nocodb = () => {
    const titles = [
        "Google",
        "Hyunday",
        "Walmart",
        "American Express",
        "Western Digital",
    ];
    return (
        <>
            <Helmet>
                <title>DYWANTS - Integrateur nocodb Cameroun</title>
                <meta
                    name="description"
                    content="Nous vous permettons d'être productif grâce a nocodb, la meilleure alternative a Airtable"
                />
                <link rel="canonical" href="https://dywants.com/digitalisation/integrateur-nocodb-au-cameroun/" />
            </Helmet>
            <Layout>
                <HeaderPage
                    icon={"/assets/images/digitalisation/nocodb.png"}
                    smallTile={"-Nous vous proposons le meilleur-"}
                    title={"Vos données parlent"}
                    description={
                        "Nous connectons notre outil à n’importe quelle source de données de production et la transforme en une feuille de calcul intelligente"
                    }
                    link={"Contactez-nous"}
                    url={route("contact")}
                />
                <section className="my-8">
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    Créez des solutions infinies avec Vos
                                    données.
                                </h2>
                                <p>
                                    Nous connectons notre outil à n’importe
                                    quelle base de données de production et la
                                    transforme en une feuille de calcul
                                    intelligente.
                                </p>
                                <p className="mt-2">
                                    Vous pouvez ainsi consulter et traiter vos
                                    données sans avoir les connaisnces
                                    techniques nécessaires.
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
                                    src={"/assets/images/nocodb/interface.png"}
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nocodb/database-nocodb.png"
                                    }
                                />
                            </div>
                            <div className="flex-1">
                                <h2>
                                    Oubliez les contraintes techniques{" "}
                                    <span className="text-primary">
                                        Exploiter vos données
                                    </span>{" "}
                                </h2>
                                <p className="mt-2">
                                    Après installation, pas besoins d’avoir des
                                    connaissances techniques.
                                </p>
                                <p className="mt-2">
                                    Gérez toutes vos bases de données aisément.
                                    Exploiter vos données sous différents
                                    formats.
                                </p>
                                <p className="mt-2">
                                    Créez une vue de grille illimitée, une vue
                                    de galerie, une vue de formulaire à partir
                                    de vos propres données
                                </p>
                                <p className="mt-2">
                                    Recherchez, triez, filtrez les colonnes et
                                    les lignes en toute simplicité
                                </p>
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    <span className="text-primary">
                                        Collaborez
                                    </span>{" "}
                                    en équipe et Travailler à distance
                                </h2>
                                <p className="mt-2">
                                    Invitez votre équipe avec un contrôle
                                    d'accès précis. Partagez des vues
                                    publiquement et également avec une
                                    protection par mot de passe
                                </p>
                                <div className="mt-4">
                                    <CustomLink
                                        secondary
                                        href={route("contact")}
                                    >
                                        Faire un devis
                                    </CustomLink>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nocodb/collaboration-nocodb.png"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <Image
                                    src={
                                        "/assets/images/nocodb/automation-nocodb.svg"
                                    }
                                />
                            </div>
                            <div className="flex-1">
                                <h2>
                                    Automatisez les{" "}
                                    <span className="text-primary">
                                        flux de travail
                                    </span>{" "}
                                    De votre entreprise
                                </h2>
                                <p className="mt-2">
                                    Créez des automatisations avec vos
                                    applications préférées : Microsoft Teams
                                    Slack, Discord, Whatsapp, Twilio, Email &
                                    SMS.
                                </p>
                                <div className="mt-4">
                                    <LinkElement href={route("contact")}>
                                        Faire un devis
                                    </LinkElement>
                                </div>
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
                                    Plus de 2 000 entreprises, dont des
                                    entreprises du Fortune 500 telles que Google
                                    et Walmart, utilisent NocoDB pour créer des
                                    applications et des automatisations sans
                                    code connectées aux magasins de données de
                                    production.
                                </p>
                            </div>
                            <div>
                                <p className="font-light mb-2">
                                    Il est utilisé dans les secteurs de la
                                    télécommunication, l’enseignement supérieur,
                                    la technologie, le service financier, la
                                    publicité marketing, l’education, la santé
                                    etc.
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

export default Nocodb;
