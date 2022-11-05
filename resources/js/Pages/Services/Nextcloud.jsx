import React from "react";
import Layout from "@/Layouts/Layout";
import HeaderPage from "@/Components/Elements/HeaderPage";
import styled from "styled-components";
import CustomLink from "@/Components/CustomLink";
import Image from "@/Components/Elements/Image";
import LinkElement from "@/Components/LinkElement";
import Accordion from "@/Components/Accordion/Accordion";
import CallToAction from "@/Components/Elements/CallToAction";

const Nextcloud = ({ reverse }) => {
    return (
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
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>Un seul outil pour toute votre activité.</h2>
                            <p>
                                La solution ultime pour les entreprises qui
                                veulent garder le contrôle total de leurs
                                données et optimiser leur rentabilité.
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
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
                                icon={"/assets/images/ciecle-blue.png"}
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
                                icon={"/assets/images/ciecle-blue.png"}
                            />
                            <Item
                                title={"Taillé sur mésure pour votre équipe"}
                                describe={
                                    "Tout ce dont vous avez besoin pour une activité collaborative efficace et transparente"
                                }
                                icon={"/assets/images/ciecle-blue.png"}
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
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
                                de stockage centralisé pour toute votre équipe
                            </h2>
                            <p className="mt-2">
                                Reprenez le contrôle total de vos données. Nous
                                assurons la conformité, la sécurité et la
                                disponibilité instantanée de vos données.
                            </p>
                            <p className="mt-2">
                                Peu importe où se trouvent vos employés, clients
                                ou partenaires, travaillez sans crainte vos sont
                                accessibles en tout temps.
                            </p>
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <Wrapper reverse={reverse}>
                        <div className="flex-1">
                            <h2>
                                <span className="text-primary">
                                    Ne manquez plus rien,
                                </span>{" "}
                                créez les réunions et discuter en équipe
                            </h2>
                            <p className="mt-2">
                                Gérez directement votre calendrier professionnel
                                et discuter en temps réels avec tous les membres
                                de votre équipe grâce à votre messagerie privée.
                            </p>
                            <div className="mt-4">
                                <CustomLink secondary url={route("contact")}>
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
                <div className="container mx-auto max-w-6xl py-14 text-left">
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
                                Outil d'organisation de style Kanban destiné à
                                la planification personnelle et à l'organisation
                                de projets pour les équipes intégrées à
                                Nextcloud.
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
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <Wrapper reverse={reverse}>
                        <div className="flex-1">
                            <h2>
                                Des centaines d’extensions pour personnaliser{" "}
                                <span className="text-primary">
                                    votre besoin
                                </span>{" "}
                            </h2>
                            <p className="mt-2">
                                A travers Nextcloud, nous mettons à votre
                                disposition de nombreuses applications annexes
                                pour completer vos potentiels besoins.
                            </p>
                            <div className="mt-4">
                                <CustomLink secondary url={route("contact")}>
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
                <div className="container mx-auto max-w-6xl py-20 text-left">
                    <div className="columns-2 py-2">
                        <div className="py-2">
                            <h2 className="text-[36px] font-semibold leading-10 mb-2">
                                Des milliers d’entreprises ont fait le pas,{" "}
                                <span className="text-secondaryGraded">
                                    {" "}
                                    pourquoi pas vous ?
                                </span>
                            </h2>
                            <p className="text-[18px] font-light mb-2">
                                Nous vous accompagnons avec un outil qui a déjà
                                fait ses preuves. Nextcloud est le plus souvent
                                utlisé par des entreprises avec un revenu de 1 à
                                10 millions de dollars.
                            </p>
                            <p className="text-[18px] font-light mb-2">
                                Mais nous l’adaptons parfaitement avec tout type
                                d’entreprise peu importe le niveau d’activité.
                            </p>
                        </div>
                        <div>
                            <p className="text-[18px] font-light mb-2">
                                Il est utilisé dans les secteurs de la
                                télécommunication, la technologie, le commerce,
                                le service financier, la publicité marketing,
                                l’automobile, l’education etc.
                            </p>
                        </div>
                    </div>
                    <CardItem />
                    <div className="text-center mt-10">
                        <LinkElement href={route('contact')}>Travaillons ensembles</LinkElement>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl py-20 text-left">
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

const Item = ({ title, describe, icon, whiteColor, className = "" }) => {
    return (
        <div
            className={
                `flex gap-4 px-6 py-8 items-center rounded-md ` + className
            }
        >
            <div className="w-20 h-20">
                <Image src={icon} />
            </div>
            <div className="inline-flex">
                <div>
                    <h3 whiteColor={whiteColor}>{title}</h3>
                    <p whiteColor={whiteColor}>{describe}</p>
                </div>
            </div>
        </div>
    );
};

const CardItem = () => {
    const titles = [
        "Solutec",
        "LuminarTech",
        "AVM",
        "GreyTip Softwares",
        "StoryCorp Inc",
    ];

    return (
        <div className="inline-flex space-x-2 w-full mt-4">
            {titles.map((title, i) => {
                return (
                    <Card key={i}>
                        <TitleEntreprise>{title}</TitleEntreprise>
                    </Card>
                );
            })}
        </div>
    );
};

const Card = styled.div`
    background: #ffffff;
    padding: 35px 26px;

    box-shadow: -30px 14px 50px rgba(79, 108, 164, 0.1);
    border-radius: 16px;
`;

const TitleEntreprise = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #4f6ca4;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "")};
    gap: 5rem;
    overflow: hidden;

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 50px;
        color: #0f1727;
    }

    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 0.6rem;
        color: ${(props) => (props.whiteColor ? "#FFFFFF" : "#0f1727")};
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: ${(props) => (props.whiteColor ? "#FFFFFF" : "#0f1727")};
    }
`;
export default Nextcloud;
