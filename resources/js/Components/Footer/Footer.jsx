import React from "react";
import styled from "styled-components";
import Title from "@/Components/Elements/Title";
import { Link } from "@inertiajs/inertia-react";

const Footer = () => {
    return (
        <SectionFooter>
            <Container>
                <div className="grid grid-cols-5 gap-4 py-14">
                    <div className="text-left col-span-2">
                        <Title white title="Let's make something special" />
                        <h3 className="my-4 text-lg font-medium">
                            Let's talk! 🤙{" "}
                        </h3>
                        <ul className="text-left text-white space-y-3">
                            <li>contact@dywants.com</li>
                            <li>(+237) 699278240</li>
                            <hr className="bg-white opacity-75 w-20"/>
                            <li>Douala Cameroun, sis Lycée cité des palmier</li>
                        </ul>
                    </div>
                    <div className="name col-span-1">
                        <h3 className="footer__title">Liens rapides</h3>
                        <hr className="h-8 text-white w-24 mt-1" />
                        <ul className="text-left text-white space-y-6">
                            <li className="hover:scale-x-75"><Link href="#">Services</Link></li>
                            <li className="hover:scale-x-75"><Link href="#">Projets</Link></li>
                            <li className="hover:scale-x-75"><Link href="#">Podcast</Link></li>
                            <li className="hover:scale-x-75"><Link href="#">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="name col-span-1">
                        <h3 className="footer__title">Nos services</h3>
                        <hr className="h-8 font-bold text-white w-24 mt-1" />
                        <ul className="text-left text-white space-y-6">
                            <li className="hover:scale-x-75">
                                <Link href="#" className="text-lg">
                                    {" "}
                                    Développement web&mobile
                                </Link>
                            </li>
                            <li className="hover:scale-x-75">
                                <Link href="#" className="text-lg">
                                    {" "}
                                    Support Technique
                                </Link>
                            </li>
                            <li className="hover:scale-x-75">
                                <Link href="#" className="text-lg">
                                    {" "}
                                    Déployement
                                </Link>
                            </li>
                            <li className="hover:scale-x-75">
                                <Link href="#" className="text-lg">
                                    {" "}
                                    Consulting
                                </Link>
                            </li>
                            <li className="hover:scale-x-75">
                                <Link href="#" className="text-lg">
                                    {" "}
                                    Digitalisation
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="name col-span-1">
                        <h3 className="footer__title">Partenaires</h3>
                        <hr className="h-8 text-white w-14 mt-1" />
                    </div>
                </div>
                <Copyright className="border-t-2">
                    Copyright &copy; dywants. Tous droits réservés
                </Copyright>
            </Container>
        </SectionFooter>
    );
};

const SectionFooter = styled.footer`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.light};
`;

const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: calc(100% - 15rem);
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }

    .footer__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${(props) => props.theme.colors.primary};
    }
`;


const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 3rem auto;
    gap: 3rem;
    text-align: left;

    .footer__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const Copyright = styled.div`
    font-size: 1.1rem;
    text-align: center;
    padding: 1rem 0;
`;

export default Footer;
