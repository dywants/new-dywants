import { v4 as uuidv4 } from "uuid";

export const projetsObj = {
    projets: [
        {
            title: "toSearchFind",
            type: "Application web",
            description:
                "TosearchFind est une plateforme qui permet à tout individu de renseigner une pièce personnelle égarée.",
            image: "/assets/images/projets/image-toseachfind.png",
            tags: ["Vue js", "Laravel", "Inertia js", "Tailwindcss", "CSS"],
            site: "https://www.toseachfind.com",
            id: uuidv4(),
        },
        {
            title: "Event Presta",
            type: "Application web",
            description:
                "Event-presta est une plateforme de mise en relation entre les professionnels du secteur évènementiel et les clients.",
            image: "/assets/images/projets/projet-eventpresta.png",
            tags: ["Laravel", "Adonis js", "Tailwindcss", "Lararel Livewire"],
            site: "https://www.event-presta.com",
            id: uuidv4(),
        },
        {
            title: "Mounavac",
            type: "Application mobile de suivis de vaccination",
            description:
                "Une application de suivi et rappel de vaccination pour les enfants",
            image: "/assets/images/projets/projet-mounavac.png",
            tags: ["Laravel", "React native", "CSS"],
            site: "",
            id: uuidv4(),
        },
        {
            title: "BHB",
            type: "Refonte design",
            description:
                "Site Vitrine, presentant les offres et services de l'entreprise BHB Cameroun",
            image: "/assets/images/projets/projet-bhb.png",
            tags: ["Figma"],
            site: "",
            id: uuidv4(),
        },
        {
            title: "Digital Black Business",
            type: "Site Vitrine",
            description:
                "Site vitrine d'une agence de marketing digital resident au Cameroun, mettant en avant les services et prestations",
            image: "/assets/images/projets/home-digitalbb.png",
            tags: ["Next js", "Chakra UI", "Styled Component"],
            site: "https://www.digitalblackbusiness.com",
            id: uuidv4(),
        },
        {
            title: "Portfolio BAYONG",
            type: "Porfolio",
            description:
                "Porfolio de BAYONG Cyrille, Développeur FullStack resident au Cameroun, mettant ainsi les competences",
            image: "/assets/images/projets/bayong.png",
            tags: ["React", "JavaScript"],
            site: "https://www.linkedin.com/in/tiffanie-rouillard-73b9a9168/",
            id: uuidv4(),
        },
        {
            title: "Ej-collection",
            type: "E-commerce",
            description:
                "Site e-commerce d'une styliste ivoiriene, mettant en avant ses differentes collection de vêtements",
            image: "/assets/images/projets/homepage_ej-collection.png",
            tags: ["Laravel", "Sass", "Javascript"],
            site: "https://www.ej-collection.com",
            id: uuidv4(),
        },
    ],
};
