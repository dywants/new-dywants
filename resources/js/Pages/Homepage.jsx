import React from "react";
import Layout from "@/Layouts/Layout";
import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import Expertises from "@/Components/Expertises/Expertises";
import Values from "@/Components/Values/Values";
import Newsletter from "@/Components/Newsletter/Newsletter"
import Projets from "@/Components/Projets/Projet";
import {projetsObj} from "@/Pages/Data/projets";
import {processInfos} from "@/Pages/Data/process";
import {articles} from "@/Pages/Data/blog";
import BlogSection from "@/Components/Blog/BlogSection";
import About from "@/Components/Abouts/About";
import Process from "@/Components/Process/Process";
import Digitalisation from "@/Components/Digitalisation/Digitalisation";

const Homepage = () => {
    return (
        <Layout>
            <Header />
            <About/>
            <Expertises />
            <Services />
            <Digitalisation/>
            <Process {...processInfos}/>
            <Values/>
            <Projets {...projetsObj}/>
            <BlogSection {...articles}/>
            <div className="container mx-auto max-w-7xl px-7 mb-8">
                <Newsletter/>
            </div>
        </Layout>
    );
};

export default Homepage;
