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

export const itemsDevps = [
    {
        id: uuidv4(),
        title: "Test",
        describe: "Le site web est analysé par rapport à plusieurs critères afin de prévenir les différents problèmes et de l’optimiser.",
        img: "/assets/images/devops/cog.png",
    },
    {
        id: uuidv4(),
        title: "Choix de la pile technique",
        describe: "En fonction de vos attentes et des resultats du test, un environnement propice pour votre site internet est mis sur pied",
        img: "/assets/images/devops/boxes.png",
    },
    {
        id: uuidv4(),
        title: "Deploiement",
        describe: "Après les deux étapes, le déploiment est amorcé. Tout au long de cette étape nous continuons toujours de vérifier s’il n’y a aucun désagrément!",
        img: "/assets/images/devops/rocket.png",
    },
]