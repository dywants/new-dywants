import HeaderPage from "@/Components/Elements/HeaderPage";
import Image from "@/Components/Elements/Image";
import CustomLink from "@/Components/CustomLink";
import Layout from "@/Layouts/Layout";
import React from "react";
import { Wrapper } from "../styles/globalStyles";
import CardItem from "@/Components/Elements/CardItem";
import LinkElement from "@/Components/LinkElement";
import CallToAction from "@/Components/Elements/CallToAction";
import Accordion from "@/Components/Accordion/Accordion";
import { Helmet } from "react-helmet-async";

const Dolibarr = () => {
    const titles = [
        "Gestion des Employés",
        "Processus de recrutement",
        "Demande de congés",
        "Feuilles de temps",
        "Gestion des associations",
        "Note de frais"
    ];
    const titlesEntreprises = [
        "DTS Sarl",
        "ETS FATOU",
        "AFRICA SERVICES",
        "SOS CAMEROUN",
        "Societé Guilleux",
        "GAPAWA"
    ];
    return (
        <>
             <Helmet>
                <title>DYWANTS - Integrateur Dolibarr Cameroun</title>
                <meta
                    name="description"
                    content="Nous integretrons, developpons des modules Dolibarr personnalises et formons les employés de votre entreprise a l'utilisation de l'ERP/CRM"
                />
                <link rel="canonical" href="https://dywants.com/digitalisation/integrateur-dolibarr-au-cameroun/" />
            </Helmet>
            <Layout>
                <HeaderPage
                    icon={"/assets/images/digitalisation/dolibarr.png"}
                    smallTile={"-Nous vous proposons le meilleur-"}
                    title={"la « colonne vertébrale » de votre entreprise."}
                    description={
                        "Gérez votre entreprise avec un outil qui n’a pas de limites."
                    }
                    link={"Contactez-nous"}
                    url={route("contact")}
                />
                <section className="my-8">
                    <div className="wrapper">
                        <Wrapper>
                            <div className="flex-1">
                                <h2>
                                    <span className="text-primary">
                                        Un seul outil
                                    </span>{" "}
                                    pour toute votre entreprise.
                                </h2>
                                <p>
                                    Dolibarr un ERP open source qui est
                                    essentiel à tous quelque soit la taille , le
                                    secteur, l'activité concernée. Pour les
                                    clients, les adhérents,les factures, les
                                    cotisations, les stocks,la comptabilité ....
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
                                        "/assets/images/dolibarr/module-dolibarr.png"
                                    }
                                />
                            </div>
                        </Wrapper>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="max-w-[585px]">
                                <h2>
                                    Gestion des
                                    <span className="text-primary">
                                        {" "}
                                        Ressources humaines
                                    </span>{" "}
                                </h2>
                                <p className="mt-1">
                                    Dolibarr un ERP qui est essentiel à tous
                                    quelque soit la taille , le secteur,
                                    l'activité concernée. Pour les clients, les
                                    adhérents,les factures, les cotisations, les
                                    stocks,la comptabilité ....
                                </p>
                            </div>
                            <div className=" flex-end">
                                <CustomLink secondary href={route("contact")}>
                                    Faire un devis
                                </CustomLink>
                            </div>
                        </div>
                        <CardItem titles={titles} />
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <Wrapper>
                            <div>
                                <h2>Outil tout en un</h2>
                                <p>
                                    Nous mettons à votre disposition un outil
                                    pour gérer tous les différents aspects de
                                    votre entreprise.
                                </p>
                                <div className="mt-4">
                                    <LinkElement href={route("contact")}>
                                        Faire un devis
                                    </LinkElement>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={
                                        "/assets/images/dolibarr/section-extension-dolibarr.svg"
                                    }
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
                                    Nous vous accompagnons avec un outil qui a
                                    déjà fait ses preuves. De nombreuses
                                    entreprises utilisent cette solution au
                                    quotidien.
                                </p>
                                <p className="font-light mb-2">
                                    Il est notamment apprécié pour sa
                                    flexibilité car il s’intègre parfaitement
                                    peu importe le niveau structurel de
                                    l’entreprise
                                </p>
                            </div>
                        </div>
                        <CardItem titles={titlesEntreprises} />
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

export default Dolibarr;
