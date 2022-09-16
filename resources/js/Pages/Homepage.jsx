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
import {articles} from "@/Pages/Data/blog";
import Valeurs from "@/Components/Elements/Valeurs";
import BlogSection from "@/Components/Blog/BlogSection";

const Homepage = () => {
    return (
        <Layout>
            <Header />
            <Mission />
            <Services />
            <div className="container mx-auto max-w-6xl px-7">
                <h2 className="text-right">Nos valeurs</h2>
                <Valeurs/>
            </div>
            <Expertises />
            {/*<Temoignages {...TestimonialObj}/>*/}
            <Projets {...projetsObj}/>
            {/*<Compagnies />*/}
            <BlogSection {...articles}/>
            
        </Layout>
    );
};

export default Homepage;
