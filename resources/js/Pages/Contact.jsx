import SectionForm from "@/Components/Contact/SectionForm";
import SectionMap from "@/Components/Contact/SectionMap";
import Layout from "@/Layouts/Layout";
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class Contact extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>DYWANTS - Contactes-nous</title>
                    <meta
                        name="description"
                        content="Faite nous un message pour tous vos besoins en matiere de developpmment web et mobile"
                    />
                    <link
                        rel="canonical"
                        href="https://dywants.com/contact/"
                    />
                </Helmet>
                <Layout>
                    <SectionForm />
                    <SectionMap />
                </Layout>
            </>
        );
    }
}

export default Contact;
