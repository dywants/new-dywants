import { v4 as uuidv4 } from "uuid";

export const aboutInfo = [
    {
        id: uuidv4(),
        titleSection: "À PROPOS DE NOUS",
        title: "Nous dirigions l'ensemble du processus de conception de sites Web et app, du concept à la livraison.",
        compagny: "DYWANTS TECHNOLOGIE AND SERVICES (DTS)",
        description1: "Nous visons à atteindre la plus grande satisfaction de nos clients et à être l'un des noms les plus importants en matière de service de digitalisation",
        description2: "Nous adaptons nos services à vos besoins pour vous proposer la meilleure solution digitale.",
        url: "#",
        images: [
            {
                id: uuidv4(),
                image: "/assets/images/apropos/image-innovation.png",
                name: 'Innovation'
            },
            {
                id: uuidv4(),
                image: "/assets/images/apropos/image-rigueur.png",
                name: 'Rigueur'
            },
            {
                id: uuidv4(),
                image: "/assets/images/apropos/image-excellence.png",
                name: 'Excellence'
            },
        ]
    },
]