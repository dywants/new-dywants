import { v4 as uuidv4 } from "uuid";

export const articles = [
    {
        id: uuidv4(),
        title: "How collaboration makes us better designers",
        category: "Design",
        image: "/assets/images/blog/blog-image.png",
        url: "#",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        name: "Natali Craig",
        date: "14 Jan 2022"
    },
    {
        id: uuidv4(),
        title: "Our top 10 Javascript frameworks to use",
        category: "Product",
        image: "/assets/images/blog/blog-image.png",
        url: "#",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        name: "John Craig",
        date: "14 April 2022"
    },
    {
        id: uuidv4(),
        title: "Bill Walsh leadership lessons",
        category: "Management",
        image: "/assets/images/blog/blog-image.png",
        url: "#",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        name: "Jane Craig",
        date: "14 Feb 2022"
    },
]
