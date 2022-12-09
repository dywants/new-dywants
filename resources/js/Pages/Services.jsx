import SectionService from "@/Components/Elements/SectionService";
import Title from "@/Components/Elements/Title";
import TitleSection from "@/Components/Elements/TitleSection.jsx";
import LinkElement from "@/Components/LinkElement";
import Newsletter from "@/Components/Newsletter/Newsletter";
import Process from "@/Components/Process/Process";
import Layout from "@/Layouts/Layout";
import { processInfos } from "@/Pages/Data/process";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const ServivicesTitle = [
        "Support Technique",
        "Développement web&mobile",
        "Déployement",
        "Consulting",
        "Digitalisation",
    ];
    return (
        <>
            <Helmet>
                <title>DYWANTS - Nos services et exprtises</title>
                <meta
                    name="description"
                    content="Nous regroupons les experts dans le domaine de la création des sites web (vitrine, blog, e-commerce, intranet...) et application web et mobile."
                />
                <link rel="canonical" href="https://dywants.com/services/" />
            </Helmet>
            <Layout>
                <div className="bg-secondaryGraded overflow-hidden w-full">
                    <div className="wrapper">
                        <TitleSection
                            className="text-white"
                            title="Nos services"
                        />
                        <div className="flex justify-between flex-col md:flex-row gap-9 md:gap-0 items-start">
                            <div className="w-full md:max-w-[724px]">
                                <Title
                                    white
                                    className="mb-4"
                                    title="Nous construisons des solutions logicielles qui résolvent les défis commerciaux de nos clients"
                                />
                                <p className="text-white text-base font-normal leading-6 opacity-80 mb-8 w-full md:w-[642px]">
                                    Nous mettons un point d'honneur à offrir un
                                    service de qualité à tous nos clients quelle
                                    que soit leur taille.
                                </p>
                                <LinkElement href={route("contact")}>
                                    Nous contacter
                                </LinkElement>
                            </div>
                            <div className="space-y-4">
                                {ServivicesTitle.map((service, i) => {
                                    return (
                                        <h3
                                            className="text-white font-semibold text-[24px] leading-6"
                                            key={i}
                                        >
                                            {service}
                                        </h3>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F9F9FF] py-8">
                    <Process {...processInfos} />
                </div>
                <div className="bg-transparent">
                    <div
                        className="wrapper text-left"
                        style={{ marginBottom: "-5rem" }}
                    >
                        <SectionService
                            title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                            url={route("devops")}
                            src="/assets/images/services/feature1.png"
                            titlesection="Support technique"
                            description="Nous avons des techniciens informatiques qualifiés et à votre écoute afin de répondre à des demandes d’incidents et/ou d’utilisations des outils informatiques tels que la messagerie, l’internet, l’accès à distance."
                        />
                    </div>
                </div>
                <div className="bg-[#ECF8F9]">
                    <div className="wrapper text-left pt-16 -pb-10 lg:pt-0 lg:pb-0">
                        <SectionService
                            reverse
                            title="Nous créons des applications et des sites web adaptent à l'image et aux valeurs de votre entreprise."
                            src="/assets/images/services/feature2.png"
                            url={route("devWeb")}
                            titlesection="Développement web&mobile"
                            description="Nos ingénieurs sont des spécialistes avérés qui n'ont pas peur de trouver les meilleures solutions pour chaque besoin. S’il le faut, ces solutions seront créées uniquement pour vous."
                        />
                    </div>
                </div>
                <div
                    className="wrapper text-left"
                    style={{ marginBottom: "-5rem" }}
                >
                    <SectionService
                        title="Un accompagnement à 360° pour une meilleure mise en place de ce dont vous avez besoins"
                        src="/assets/images/services/feature3.png"
                        titlesection="Devops"
                        url={route("devops")}
                        description="Nous anticipons les sources de complication pour une meilleure gestion de vos infrastructures et menons des actions préventives ou/et correctives."
                    />
                </div>
                <div className="bg-[#F9F9FF]">
                    <div className="wrapper text-left pt-16 -pb-10 lg:pt-0 lg:pb-0">
                        <SectionService
                            reverse
                            title="Nous sommes le prolongement de votre équipe."
                            src="/assets/images/services/feature4.png"
                            titlesection="Consulting"
                            description="Nos experts travaillent en partenariat avec vous, afin de vous assister dans l’utilisation et dans l'implémentation des technologies nécessaire à votre croissance et à la satisfaction de vos clients."
                        />
                    </div>
                </div>
                <div className="wrapper" style={{ marginBottom: "-5rem" }}>
                    <SectionService
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature5.png"
                        titlesection="Digitalisation"
                        url={route("digitalisation")}
                        description="Nous vous accompagnons dans votre processus de digitalisation en vous proposant des solutions modernes et innovantes."
                    />
                </div>
                <div className="wrapper mb-8">
                    <Newsletter />
                </div>
            </Layout>
        </>
    );
};

export default Services;
