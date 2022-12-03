import CustomLink from "@/Components/CustomLink";
import HeaderPage from "@/Components/Elements/HeaderPage";
import Image from "@/Components/Elements/Image";
import Item from "@/Components/Elements/Item";
import Layout from "@/Layouts/Layout";
import Accordion from "@/Components/Accordion/Accordion";
import CallToAction from "@/Components/Elements/CallToAction";
import React from "react";
import { Wrapper } from "../styles/globalStyles";

const Zimbra = () => {
    return (
        <Layout>
            <HeaderPage
                icon={"/assets/images/digitalisation/zimbraZ.png"}
                smallTile={"-Nous vous proposons le meilleur-"}
                title={"L'outil parfait pour la messagerie et la collaboration"}
                description={
                    "Echanger en toute sécurité des informations sur les e-mails, les messages, le calendrier, les contacts, les fichiers et les tâches.o"
                }
                link={"Contactez-nous"}
                url={route("contact")}
            />
            <section className="my-4 md:my-8">
                <div className="container mx-auto max-w-7xl my-10 md:py-20 px-8 text-left">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>
                                <span className="text-primary">
                                    L’expérience mailing{" "}
                                </span>{" "}
                                change totalement.
                            </h2>
                            <p>
                                Zimbra Collaboration est le premier fournisseur
                                mondial de logiciels de collaboration par
                                e-mail. Nous maitrisons cette outil pour vous
                                afin de vous offrir ce qu’il y’a de mieux pour
                                votre activité.
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
                                    Contactez-nous
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Item
                                title={"Collaboration par mail"}
                                describe={
                                    "Avec des atouts comme les visionneuses de documents intégrés etc."
                                }
                                icon={"/assets/images/point2.svg"}
                            />
                            <Item
                                className="bg-secondaryGraded"
                                whiteColor
                                title={"Communication"}
                                describe={
                                    "Zimbra facilite la communication entre les membres d’une équipe."
                                }
                                icon={"/assets/images/point.svg"}
                            />
                            <Item
                                title={"Gestion documentaire"}
                                describe={
                                    "Des processus et fonctionnalités en plus pour améliorer l’experience lors de la gestion mailing."
                                }
                                icon={"/assets/images/point2.svg"}
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <Wrapper>
                        <div className="flex-1">
                            <Image
                                src={
                                    "/assets/images/zimbra/outil-gestion-zimbra.png"
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <h2>
                                L’outil idéal pour la{" "}
                                <span className="text-primary">
                                    Collaboration par mail.
                                </span>{" "}
                            </h2>
                            <p className="mt-2">
                                Travailler simultanément avec votre équipe ou
                                vos clients/partenaires. Cette solution permet:
                            </p>
                            <p>
                                Le partage de notes, possède un intranet, la
                                gestion des réunions, la planifications
                                d’évènements, la synchronisation avec l’agendas
                                et la base de savoir wiki.
                            </p>
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>
                                Une communication{" "}
                                <span className="text-primary">
                                    Avancée par mail
                                </span>{" "}
                            </h2>
                            <p className="mt-2">
                                Synchroniser et gérer directement votre
                                calendrier professionnel et partager les
                                événements avec tous vos collaborateurs.
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
                                    Contactez-nous
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={"/assets/images/zimbra/comm-zimbra.png"}
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-6xl pb-14 text-left">
                    <Wrapper>
                        <div className="flex-1">
                            <Image
                                src={
                                    "/assets/images/zimbra/document-zimbra.png"
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <h2>
                                Gestion documentaire
                            </h2>
                            <p className="mt-2">
                                La gestion des documents est l’un des points fort de Zimbra. Il offre des fonctionnalités avancées qui vont faciliter largement votre expérience.
                            </p>
                            <p>
                                Parmi elles nous avons : Le partage de dossier, le tableur et le texteur intégré, les modèles de documents, les horodatages, les versions de documents, visionneuse des documents et synchronisation...
                            </p>
                            <div className="my-4">
                                <CustomLink secondary href={route("contact")}>
                                    Faire un devis
                                </CustomLink>
                            </div>
                        </div>
                    </Wrapper>
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
                                Nous sommes là pour vous aider. Si vous ne
                                trouvez pas la réponse à votre question ici,
                                contactez-nous. C'est avec plaisir que nous
                                discuterons avec vous.
                            </p>
                            <div className="mt-4">
                                <CustomLink secondary url={route("contact")}>
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
    );
};

export default Zimbra;
