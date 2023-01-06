import { v4 as uuidv4 } from "uuid";

export const ReasonWork = [
    {
        id: uuidv4(),
        title: "Delais de livraison respecté",
        description:
            "Nous respectons les délais de livraisons. Nous savons à quel point votre temps est précieux",
        icon: "/assets/images/icons/delai.png",
    },
    {
        id: uuidv4(),
        title: "Service de meilleure qualité",
        description:
            "Nous veillons à identifier vos besoins réels et collaborons avec vous comme des membres d'une même équipe",
        icon: "/assets/images/icons/service.png",
    },
    {
        id: uuidv4(),
        title: "Le contrôle",
        description:
            "Nous avons pour loi, offrir au clients les outils dont nous avons parfaitement le contrôle.",
        icon: "/assets/images/digitalisation/controle.png",
    },
    {
        id: uuidv4(),
        title: "Assistance",
        description:
            "Un accompagnement et un suivi sur mesure et a votre rythme",
        icon: "/assets/images/icons/assistance.png",
    },
];
