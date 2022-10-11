import React from "react";
import Layout from "@/Layouts/Layout";
import Header from "@/Components/Header/Header";
import Services from "@/Components/Services/Services";
import Expertises from "@/Components/Expertises/Expertises";
import Compagnies from "@/Components/Companies/Compagnies";
import Mission from "@/Components/Mission/Mission";
import Temoignages from "@/Components/Temoignages/Temoignages";
import {TestimonialObj} from "@/Pages/Data/temoignages";
import Projets from "@/Components/Projets/Projet";
import {projetsObj} from "@/Pages/Data/projets";
import {processInfos} from "@/Pages/Data/process";
import {articles} from "@/Pages/Data/blog";
import Valeurs from "@/Components/Elements/Valeurs";
import BlogSection from "@/Components/Blog/BlogSection";
import CallToAction from "@/Components/Elements/CallToAction";
import About from "@/Components/Abouts/About";
import Process from "@/Components/Process/Process";

const Homepage = () => {
    return (
        <Layout>
            <Header />
            <About/>
            <Expertises />
            {/*<Mission /> */}
            <Services />
            <Process {...processInfos}/>
           { /*<div className="container mx-auto max-w-6xl px-7">
                <h2 className="text-right">Nos valeurs</h2>
                <Valeurs/>
    </div>*/}
            {/*<Temoignages {...TestimonialObj}/>*/}
            <Projets {...projetsObj}/>
            {/*<Compagnies />*/}
            <BlogSection {...articles}/>
            <CallToAction/>
        </Layout>
    );
};

export default Homepage;
