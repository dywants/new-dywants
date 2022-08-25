import {v4 as uuidv4} from "uuid";

export const TestimonialObj = {
    lightText: true,
    pTestimo: "Ce que disent mes clients",

    testimonial: [
        {
            title: "Océane Furet",
            description:
                "J'ai contacté Thibaut suite à de grosses difficultés dans la gestion et la création de mon site internet, et il a vraiment été là pour chacune de mes questions et m'a aidé à ce que mon site puisse ressembler à ce que je souhaitais :) Très professionnel et avenant, je le recommande à 100% … car il connait son métier et sait de quoi il parle. Allez-y les yeux Fermés ! ",
            image: "/assets/images/testimonial/Oceane_furet.png",
            site: "https://visitez-sans-bouger.com/",
            id: uuidv4(),
        },
        {
            title: "Creativity Trendy",
            description:
                "J'ai contacté Dywants concernant un problème que j'avais rencontré sur mon site Internet et il a été extrêmement efficace. il est très sympathique et surtout très professionnel. Vous pouvez lui faire confiance les yeux fermés.",
            image: "/assets/images/testimonial/Creativity_rendy.png",
            tags: ["React", "JavaScript"],
            site: "http://souadbysonia.com/",
            id: uuidv4(),
        },
        {
            title: "WebRTC App",
            description:
                "Thibaut Bayong est un partenaire polyvalent avec qui il est très souple de travailler. Il est très à l’écoute, très polyvalent et toujours présent pour aider et avancer dans nos projets. Il intervient sur tous les aspects informatiques : conseil, assistance, support techniques, manipulation, etc. L’avantage avec Monsieur Thibaut c’est la transparence et les bons conseils car il nous propose toujours des solutions adaptées à notre budget, y compris à nos capacités. Je leur remercie très sincèrement et je vous conseille vivement ce professionnel !",
            image: "/assets/images/testimonial/photo_tiffanie_rouillard.png",
            site: "https://www.linkedin.com/in/tiffanie-rouillard-73b9a9168/",
            id: uuidv4(),
        },
    ],
};
