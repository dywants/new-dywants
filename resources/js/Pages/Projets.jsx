import Layout from "@/Layouts/Layout.jsx";
import { Helmet } from "react-helmet-async";
import React from "react";
import LinkElement from "@/Components/LinkElement.jsx";
import SectionFlex from "@/Components/Elements/SectionFlex.jsx";

const Projets = () => {
    const titles = [
        "+15 projets délivrés",
        "+5 industries",
        "+10 services supportés",
        "+10 sites web crées",
    ];
    return (
        <div>
            <Helmet>
                <title>DYWANTS - Nos réalisations</title>
                <meta
                    name="description"
                    content="Nous sommes une équipe dynamique et d'experts dans le développement web & mobile, dans la transformation digitale des entreprises."
                />
                <link
                    rel="canonical"
                    href="https://dywants.com/qui-sommes-nous/"
                />
            </Helmet>
            <Layout>
                <div
                    className="w-full pb-20 lg:h-[700px] relative overflow-hidden bg-left object-contain lg:bg-cover lg:object-cover flex items-center"
                    style={{
                        backgroundImage: `url('/assets/images/projets/bg-projects.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        paddingTop: "0px",
                    }}
                >
                    <div
                        className="wrapper mt0 relative"
                        style={{ marginBottom: "0px" }}
                    >
                        <div className="text-left flex justify-start w-full lg:w-[750px]">
                            <div>
                                <h3 className="text-white pb-2">
                                    Nous sommes des experts
                                </h3>
                                <h1 className="text-white text-[40px] lg:text-[50px] leading-11 font-extrabold m-0">
                                    Nos projets
                                </h1>
                                <p className="text-white text-[25px] mt-[30px] mb-[41px]">
                                    Au fil du temps, notre expertise nous a
                                    permis de travailler dans plusieurs projets
                                    aussi différents les uns que les autres.
                                </p>
                                <div>
                                    <LinkElement
                                        primary
                                        href={route("contact")}
                                    >
                                        Contactez-nous
                                    </LinkElement>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 bg-secondary w-full">
                        <div className="mx-auto max-x-7xl flex flex-wrap items-center justify-around">
                            {titles.map((title, i) => {
                                return (
                                    <h4
                                        key={i}
                                        className="p-5 inline-flex text-base text-[#C5CFE3] rounded"
                                    >
                                        {title}
                                    </h4>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <main className="wrapper">
                    <h2 className="text-secondary text-2xl">
                        Une poignée de nos projets
                    </h2>
                    <section>
                        <SectionFlex />
                    </section>
                </main>
            </Layout>
        </div>
    );
};

export default Projets;
