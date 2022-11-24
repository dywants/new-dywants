import { v4 as uuidv4 } from "uuid";

export const items = [
    {
        id: uuidv4(),
        title: "Détection d’une anomalie",
        describe: "un membre de votre entreprise détecte une anomalie ensuite il nous le signale",
        img: "/assets/images/support-technique/package-search.png",
    },
    {
        id: uuidv4(),
        title: "Analyse du problème",
        describe: "Nous examinons le problème après nous mettons sur pied une methode adéquate pour comprendre l’origine du problème",
        img: "/assets/images/support-technique/flask-conical.png",
    },
    {
        id: uuidv4(),
        title: "Traitement du problème",
        describe: "Après détection de la cause nous procedons instantannement à la correction du problème.",
        img: "/assets/images/support-technique/syringe.png",
    },
]