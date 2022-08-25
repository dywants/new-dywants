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

const Homepage = () => {
    return (
        <Layout>
            <Header />
            <Mission />
            <Services />
            <Temoignages {...TestimonialObj}/>
            <Projets {...projetsObj}/>
            {/*<Compagnies />*/}
            {/*<Expertises />*/}
        </Layout>
    );
};

export default Homepage;
