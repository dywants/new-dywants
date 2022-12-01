import HeaderOtherPages from '@/Components/Elements/HeaderOtherPages.jsx';
import Layout from '@/Layouts/Layout.jsx';
import React from 'react';

const Devops = () => {
    return (
        <Layout>
            <HeaderOtherPages
            image={"/assets/images/devops/schema-devops.png"}
            title={"Une equipe d'expert Devops pour l'automatisation déploiements."}
            describe={
                "des experts passionnés vous accompagnent pour la mise en œuvre technique et opérationnelle des processus devops."
            }
            link={"Contactez-nous"}
            url={route("contact")}
            
            />
        </Layout>
    );
};

export default Devops;