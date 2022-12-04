import Accordion from '@/Components/Accordion/Accordion.jsx';
import CustomLink from '@/Components/CustomLink.jsx';
import CallToAction from '@/Components/Elements/CallToAction.jsx';
import CardElementServices from '@/Components/Elements/CardElementServices.jsx';
import HeaderOtherPages from '@/Components/Elements/HeaderOtherPages.jsx';
import Image from '@/Components/Elements/Image.jsx';
import Layout from '@/Layouts/Layout.jsx';
import React from 'react';
import { items } from '../Data/how-it-works.js';
import { Wrapper } from '../styles/globalStyles.js';

const SupportTechnique = () => {
    return (
        <Layout>
            <HeaderOtherPages
                image={"/assets/images/support-technique/support-technique.png"}
                title={"Votre support technique disponible en tout temps."}
                describe={
                    "Des techniciens informatiques qualifiés et à votre écoute afin de répondre à des demandes d’incidents et/ou d’utilisations des outils informatiques."
                }
                link={"Contactez-nous"}
                url={route("contact")}
            />
            <section className="my-8">
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1 px-8">
                            <h2>
                                Nous facilitons votre quotidien. Concentrez-vous
                                sur votre domaine d’activité,{" "}
                                <span className="text-primary">
                                    nous faisons le reste.
                                </span>
                            </h2>
                            <p>
                                Nos ingénieurs sont des spécialistes avérés qui
                                n'ont pas peur de trouver les meilleures
                                solutions pour chaque besoin. S’il le faut, ces
                                solutions seront créées uniquement pour vous.
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={
                                    "/assets/images/support-technique/support-technique1.png"
                                }
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-8 items-center">
                    <div className="flex-1">
                        <Image
                            src={
                                "/assets/images/support-technique/support-technique2.png"
                            }
                        />
                    </div>
                    <div className="flex-1 mr-20">
                        <div className="px-5">
                            <h2>
                                <span className="text-primary">
                                    Prise en charge totale
                                </span>{" "}
                                de toutes vos difficultés.
                            </h2>
                            <p className="text-base text-texte leading-7 mb-2">
                                Nous mettons à disposition des entreprises un
                                suivi instantannée au quotidien.
                            </p>
                            <p className="text-base text-texte leading-7">
                                Nos experts previennent et extermine les
                                différents obstacles afin d’eviter une
                                quelconque rupture de service et garantir une
                                croissance continue de l’entreprise
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-8">
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1">
                            <h2>
                                Nous nous{" "}
                                <span className="text-primary">adapatons</span>{" "}
                                à votre secteur d’activité.
                            </h2>
                            <p>
                                En fonction de vos horaires et exigences, nous
                                mettons à votre disposition un support technique
                                efficace qui correspond totalement à vos
                                besoins.
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={
                                    "/assets/images/support-technique/vue-laterale-portrait-femme-developpeuse.png"
                                }
                            />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <div className="w-full md:max-w-[852px] my-6">
                        <h2>Comment ça marche? </h2>
                        <p className="text-base text-texte left-7 mt-2">
                            Nous travaillons selon les meilleurs normes, ce qui
                            rend chaque livraison facile et compréhensible pour
                            nos clients . Ils peuvent dès lors, suivre chaque
                            étape de la création du produit en toute sérénité
                        </p>
                    </div>
                    <div className="grid w-full px-8 md:p-0 md:grid-cols-3 gap-4 my-10">
                        {
                            items.map((item, i) => {
                                return(
                                    <CardElementServices key={i} center w80 h80 title={item.title} icon={item.img} describe={item.describe}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="mx-auto w-full px-8 md:max-w-[1120px] text-center md:my-10">
                <h2>
                    Concentrez-vous sur votre domaine d’activité, <span className="text-primary">Nous faisons le reste.</span>
                </h2>
            </section>
            <section>
                <div className="wrapper">
                    <Wrapper>
                        <div className="flex-1 p-8">
                            <h2>
                                Vous avez des interrogations,Nous avons{" "}
                                <span className="text-primary">
                                    des réponses.
                                </span>{" "}
                            </h2>
                            <p className="mt-2">
                                Nous sommes là pour vous aider. Si vous ne
                                trouvez pas la réponse à votre question ici,
                                contactez-nous. C'est avec plaisir que nous
                                discuterons avec vous.
                            </p>
                            <div className="mt-4">
                                <CustomLink secondary href={route("contact")}>
                                    Contactez-nous
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex-1 py-4">
                            <Accordion />
                        </div>
                    </Wrapper>
                </div>
            </section>
            <section className="my-8">
                <CallToAction />
            </section>
        </Layout>
    );
};

export default SupportTechnique;
