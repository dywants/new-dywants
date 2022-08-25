import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <SectionFooter>
            <Container>
                <FooterWrapper>
                    <div className="text-center">
                        <img src="assets/logo/logo.png" className="w-[60px] h-[60px] mx-auto rounded-full bg-white object-cover mb-2" alt="logo dywants"/>
                        <p className="text-md text-left leading-relaxed font-medium">
                            L'entreprise DYWANTS TECHNOLOGIE AND SERVICES (DTS) vous accompagne dans tous vos projets digitaux.

                            Nous proposons un service complètes permettant de répondre à vos besoins de communication digitale, création graphique, UX/UI, développement web & application mobile.
                        </p>
                    </div>
                    <div className="name">
                        <h3 className="footer__title">Nos services</h3>
                        <hr className="h-8 font-bold text-white w-24 mt-1 mx-auto"/>
                        <ul className="text-left text-gray-800 space-y-6">
                            <li className="hover:scale-x-75"><a href="#" className="text-lg"> Développement web</a></li>
                            <li className="hover:scale-x-75"><a href="#" className="text-lg"> UI/UX Design</a></li>
                            <li className="hover:scale-x-75"><a href="#" className="text-lg"> Développement Apps Mobile</a></li>
                            <li className="hover:scale-x-75"><a href="#" className="text-lg"> Développement Apps métiers</a></li>
                        </ul>
                    </div>
                    <div className="name">
                        <h3 className="footer__title">Nos partenaires</h3>
                        <hr className="h-8 text-white w-24 mt-1 mx-auto"/>
                    </div>
                    <div className="name">
                        <h3 className="footer__title">Contact</h3>
                        <hr className="h-8 text-white w-14 mt-1 mx-auto"/>
                        <ul className="text-left text-gray-800 space-y-3">
                            <li><a href="#"><img src="assets/images/icons/map-pin.png" className="inline-flex mr-1" alt="icon arrow-right-circle"/>Douala Cameroun, sis Lycée cité des palmier</a></li>
                            <li><a href="#"><img src="assets/images/icons/mail.png" className="inline-flex mr-1" alt="icon arrow-right-circle"/>contact@dywants.com</a></li>
                            <li><a href="#"><img src="assets/images/icons/phone-call.png" className="inline-flex mr-1" alt="icon arrow-right-circle"/>(+237) 699278240</a></li>
                        </ul>
                    </div>
                </FooterWrapper>
                <Copyright className="border-t-2">Copyright &copy; dywants. Tous droits réservés</Copyright>
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
    max-width: calc(100% - 10rem);
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

const FooterWrapper = styled.div`
 display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 3rem auto;
    gap: 1.5rem;
    text-align: center;

 .footer__title{
   font-weight: 700;
   font-size: 24px;
   line-height: 28px;
   color: black;
 }
`;

export const Copyright = styled.div`
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem 0;
`;

export default Footer;
