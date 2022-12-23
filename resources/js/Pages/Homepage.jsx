import React from "react";
import Layout from "@/Layouts/Layout";
import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import Expertises from "@/Components/Expertises/Expertises";
import Values from "@/Components/Values/Values";
import Newsletter from "@/Components/Newsletter/Newsletter";
import Projets from "@/Components/Projets/Projet";
import { projetsObj } from "@/Pages/Data/projets";
import { processInfos } from "@/Pages/Data/process";
import { articles } from "@/Pages/Data/blog";
import BlogSection from "@/Components/Blog/BlogSection";
import About from "@/Components/Abouts/About";
import Process from "@/Components/Process/Process";
import Digitalisation from "@/Components/Digitalisation/Digitalisation";
import { Helmet } from "react-helmet-async";

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
                <Values />
                <Projets {...projetsObj} />
                <BlogSection {...articles} />
                <div className="wrapper md:my-20">
                    <Newsletter />
                </div>
            </Layout>
        </>
    );
};

export default Homepage;
