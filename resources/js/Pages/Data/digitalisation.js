import { v4 as uuidv4 } from "uuid";


export const ReasonWork = {
    titleSection :"Nous utilisons des outils open-sources car votre succès compte réellement pour nous!",
    description : "Dans notre stratégie d’accompagnement des entreprises dans leur processus de digitalisation nous avons le meilleur choix pour. Travaillez exclusivement avec les logiciels open-sources.",
    infoReason :[
    {
        id: uuidv4(),
        title: "La sécurité",
        description:
            "Les logiciels open-sources beneficient d’une sécurité vigoureuse. Ce qui limite les fuites d’informations et intrusions",
        icon: "assets/images/digitalisation/security.png",
    },
    {
        id: uuidv4(),
        title: "La stabilité",
        description:
            "Ce critère est très important pour nous car nous travaillons toujours avec une vision long terme. Il est primordial que nous offrons à nos clients des solutions stables.",
        icon: "assets/images/digitalisation/stability.png",
    },
    {
        id: uuidv4(),
        title: "Le contrôle",
        description:
            "Nous avons pour loi, offrir au clients les outils dont nous avons parfaitement le contrôle. Ainsi peu importe la situation nous avons la capacité d’agir à la seconde près",
        icon: "assets/images/digitalisation/controle.png",
    },
    {
        id: uuidv4(),
        title: "L’éfficacité",
        description:
            "Les logiciel open-sources sont des logiciels perfomants car ils sont maintenus par une grande communauté de developpeurs.",
        icon: "assets/images/digitalisation/efficacity.png",
    },

    ]
}