import { v4 as uuidv4 } from "uuid";

export const projetsObj = {
    projets: [
        {
            title: "toSearchFind",
            type: "Application web",
            description:
                "Plate-forme de collecte et recherche de pièce egarées. Celle-ci met en relation les finders(les personnes ayant trouvées la pièce) et les proprietaires des pièce egarées ",
            image: "/assets/images/projets/image-toseachfind.png",
            tags: ["Vue js", "Laravel", "Inertia js", "Tailwindcss", "CSS"],
            site: "https://www.toseachfind.com",
            id: uuidv4(),
        },
        {
            title: "Event Presta",
            type: "Site de mise en relation",
            description:
                "Plate-forme de mise en relation entre prestataires évenementiele et client avec soumission d'annonce par les client et soumission d'une proposition par les prestataires",
            image: "/assets/images/projets/projet-eventpresta.png",
            tags: ["Laravel", "Adonis js", "Tailwindcss", "Lararel Livewire"],
            site: "https://www.event-presta.com",
            id: uuidv4(),
        },
        {
            title: "Mounavac",
            type: "Application Mobile",
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
            image: "/assets/images/projets/event-presta.png",
            tags: ["Figma"],
            site: "",
            id: uuidv4(),
        },
        {
            title: "Digital Black Business",
            type: "Site Vitrine",
            description:
                "Site vitrine d'une agence de marketing digital resident au Cameroun. Ce site met en avant les services, valeurs, les clients et projet de cette agence ",
            image: "/assets/images/projets/home-digitalbb.png",
            tags: ["Next js", "Chakra UI", "Styled Component"],
            site: "https://www.digitalblackbusiness.com",
            id: uuidv4(),
        },
        {
            title: "Portfolio BAYONG",
            type: "Porfolio",
            description:
                "Porfolio de BAYONG Cyrille, Développeur FullStack resident au Cameroun, mettant ainsi les competences, expertises et projet de celui-ci",
            image: "/assets/images/projets/bayong.png",
            tags: ["React", "JavaScript"],
            site: "https://www.linkedin.com/in/tiffanie-rouillard-73b9a9168/",
            id: uuidv4(),
        },
        {
            title: "Ej-collection",
            type: "E-commerce",
            description:
                "Site e-commerce d'une styliste ivoiriene, mettant en avant ses differentes collection de vêtements et permettant une vente en ligne avec paiement mobile",
            image: "/assets/images/projets/homepage_ej-collection.png",
            tags: ["Laravel", "Sass", "Javascript"],
            site: "https://www.ej-collection.com",
            id: uuidv4(),
        },
    ],
};
