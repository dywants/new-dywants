import { v4 as uuidv4 } from "uuid";

export const processInfos = {
    processes: [
        {
            id: uuidv4(),
            title: "Introduction",
            description:
                "Nous visons à atteindre la plus grande satisfaction de nos clients, ceci en ecoutant, evaluant leur besoins pour un service de qualité",
            icon: "/assets/images/process/discover.png",
            number: "1",
        },
        {
            id: uuidv4(),
            title: "Conception",
            description:
                "Recueillir les besoins des utilisateurs afin de mettre en place la meilleure experience utilisateurs",
            icon: "/assets/images/process/designing.png",
            number: "2",
        },
        {
            id: uuidv4(),
            title: "Développement",
            description:
                "Nous développons des solutions sur mesure avec des outils modernes nécessaire pour vous démarquer de la concurrence.",
            icon: "/assets/images/process/development.png",
            number: "3",
        },
        {
            id: uuidv4(),
            title: "Testing",
            description:
                "Toutes nos applications et sites web sont testés pour une meilleure performance en production.",
            icon: "/assets/images/process/testing.png",
            number: "4",
        },
        {
            id: uuidv4(),
            title: "Deployment",
            description:
                "Nous vous conseillons sur le meilleur environnement pour vos applications et nous nous occupons de tous.",
            icon: "/assets/images/process/deplyment.png",
            number: "5",
        },
        {
            id: uuidv4(),
            title: "Maintenance",
            description:
                "Nous avons des experts en informatique pour toute intervention sur site comme à distance.",
            icon: "/assets/images/process/maintenance-new.png",
            number: "6",
        },
    ],
};
