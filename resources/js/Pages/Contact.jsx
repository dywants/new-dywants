import SectionForm from '@/Components/Contact/SectionForm';
import SectionMap from '@/Components/Contact/SectionMap';
import Layout from '@/Layouts/Layout';
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <SectionForm/>
                <SectionMap/>
            </Layout>
        );
    }
}

export default Contact;