import HeaderContact from '@/Components/Contact/HeaderContact';
import SectionForm from '@/Components/Contact/SectionForm';
import SectionInfoContact from '@/Components/Contact/SectionInfoContact';
import SectionMap from '@/Components/Contact/SectionMap';
import Layout from '@/Layouts/Layout';
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <HeaderContact/>
                <SectionMap/>
                <SectionInfoContact />
                <SectionForm/>
            </Layout>
        );
    }
}

export default Contact;