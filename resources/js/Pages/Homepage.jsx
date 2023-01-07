import React from "react";
import Layout from "@/Layouts/Layout";
import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import Projets from "@/Components/Projets/Projet";
import { projetsObj } from "@/Pages/Data/projets";
import { processInfos } from "@/Pages/Data/process";
import { ReasonWork } from "@/Pages/Data/raisonsWork";
import { articles } from "@/Pages/Data/blog";
import BlogSection from "@/Components/Blog/BlogSection";
import About from "@/Components/Abouts/About";
import Process from "@/Components/Process/Process";
import Digitalisation from "@/Components/Digitalisation/Digitalisation";
import { Helmet } from "react-helmet-async";
import Image from "@/Components/Elements/Image.jsx";
import { GridSection } from "./styles/globalStyles.js";
import Iframe from "react-iframe";
import { NewsLetter } from "@/Components/Newsletter";

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>DYWANTS TECHNOLOGIE AND SERVICES</title>
                <meta
                    name="description"
                    content="Bienvenue chez DYWANTS agence de développement informatique au Cameroun, spécialiser dans le développement application web, mobile et logiciel sur mesure."
                />
                <link rel="canonical" href="https://dywants.com/" />
            </Helmet>
            <Layout>
                <Header />
                <About />
                <Services />
                <Digitalisation />
                <Process {...processInfos} />
                <section>
                    <div className="wrapper sm:pr-28 pr">
                        <div className="flex items-center flex-wrap justify-between gap-5">
                            <div className="flex-1 md:mr-32">
                                <h2 className="mb-10 w-full md:max-w-[590px]">
                                    Pourquoi{" "}
                                    <span className="text-primary">
                                        travailler avec Dywants
                                    </span>
                                    Technologies and Services ?
                                </h2>
                                <GridSection>
                                    {ReasonWork.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="w-[70px] h-[70px] mb-1">
                                                    <Image
                                                        src={p.icon}
                                                        className=""
                                                    />
                                                </div>
                                                <h4 className="text-justify text-title font-semibold text-lg mb-2">
                                                    {p.title}
                                                </h4>
                                                <p className="text-base font-normal">
                                                    {p.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </GridSection>
                            </div>
                            <div className="max-w-[560px]">
                                <Image
                                    src={"/assets/images/why-work-with-us.png"}
                                    alt="image pourquoi travailler avec nous"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Projets {...projetsObj} />
                <BlogSection {...articles} />
                <div className="wrapper md:my-20">
                    <div className="w-full flex items-center justify-cente">
                        <NewsLetter />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Homepage;
