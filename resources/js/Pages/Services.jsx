import SectionService from "@/Components/Elements/SectionService";
import Title from "@/Components/Elements/Title";
import TitleSection from "@/Components/Elements/TitleSection.jsx";
import LinkElement from "@/Components/LinkElement";
import Newsletter from "@/Components/Newsletter/Newsletter";
import Process from "@/Components/Process/Process";
import Layout from "@/Layouts/Layout";
import { processInfos } from "@/Pages/Data/process";

const Services = () => {
    const ServivicesTitle = [
        "Support Technique",
        "Développement web&mobile",
        "Déployement",
        "Consulting",
        "Digitalisation",
    ];
    return (
        <Layout>
            <div className="bg-secondaryGraded overflow-hidden w-full">
                <div className="container mx-auto max-w-7xl text-left px-16 py-20">
                    <TitleSection className="text-white" title="Nos services" />
                    <div className="flex justify-between items-start">
                        <div className="max-w-[624px]">
                            <Title
                                white
                                className="mb-4"
                                title="Nous construisons des solutions logicielles qui résolvent les défis commerciaux de nos clients"
                            />
                            <p className="text-white text-base font-normal leading-6 opacity-80 mb-8 w-[642px]">
                                Through True Rich Attended does no end it his
                                mother since real had half every him case in
                                packages enquire we up ecstatic unsatiable.
                            </p>
                            <LinkElement>Nous contacter</LinkElement>
                        </div>
                        <div className="space-y-4">
                            {ServivicesTitle.map((service, i) => {
                                return (
                                    <h4
                                        className="text-white font-semibold text-[24px] leading-6"
                                        key={i}
                                    >
                                        {service}
                                    </h4>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F9F9FF]">
                <Process {...processInfos} />
            </div>
            <div className="bg-transparent">
                <div className="container mx-auto max-w-7xl px-16 text-left">
                    <SectionService
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature1.png"
                        titlesection="Support technique"
                        description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
                    />
                </div>
            </div>
            <div className="bg-[#ECF8F9]">
                <div className="container mx-auto max-w-7xl px-16 text-left">
                    <SectionService reverse
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature2.png"
                        titlesection="Développement web&mobile"
                        description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
                    />
                </div>
            </div>
            <div>
                <div className="container mx-auto max-w-7xl px-16 text-left">
                    <SectionService
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature3.png"
                        titlesection="Déployement"
                        description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
                    />
                </div>
            </div>
            <div className="bg-[#F9F9FF]">
                <div className="container mx-auto max-w-7xl px-16 text-left">
                    <SectionService reverse
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature4.png"
                        titlesection="Consulting"
                        description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
                    />
                </div>
            </div>
            <div>
                <div className="container mx-auto max-w-7xl px-16 text-left">
                    <SectionService
                        title="Le meilleur support technique de sa catégorie pour votre entreprise. Nous devenons votre colonne vertébrale technologique"
                        src="/assets/images/services/feature5.png"
                        titlesection="Digitalisation"
                        description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every."
                    />
                </div>
            </div>
            <div className="container mx-auto max-w-7xl px-16 mb-8">
                <Newsletter/>
            </div>
        </Layout>
    );
};

export default Services;
