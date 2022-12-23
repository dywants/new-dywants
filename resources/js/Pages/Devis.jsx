import TitleSection from "@/Components/Elements/TitleSection";
import Title from "@/Components/Elements/Title";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import LinkElement from "@/Components/LinkElement.jsx";
import { NavLogo } from "@/Components/Navbar/NavBarStyled.js";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Theme from "./styles/theme.js";
import Image from "@/Components/Elements/Image.jsx";

const Devis = () => {
    return (
        <Theme>
            <div className="max-h-screen min-w-screen overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                    <div
                        className="hidden md:block lg:flex-1 min-h-screen relative"
                        style={{
                            backgroundImage: `url('/assets/images/devis/bg-degreded-2.png'),url('/assets/images/devis/bg-image-devis.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <Image
                            src={"/assets/images/devis/bg-image-devis.png"}
                        />
                        <div
                            className="absolute top-0 px-16 py-10"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                minHeight: "100vh",
                            }}
                        >
                            <Link href={route("homepage")} className="flex-1">
                                <div className="flex items-center ">
                                    <img
                                        className="w-2 h-2 mr-2 inline-flex"
                                        src="assets/images/devis/left-arrow.png"
                                        alt="right-arrow icon"
                                    />
                                    <h3 className="text-md text-white">
                                        retour
                                    </h3>
                                </div>
                            </Link>
                            <div>
                                <TitleSection
                                    white
                                    title={"Nous sommes des experts"}
                                />
                                <Title
                                    white
                                    title={
                                        "Faisons quelque chose d'exceptionnel"
                                    }
                                />
                                <p className="text-white my-2">
                                    Faites nous part de votre projet, nous vous
                                    répondrons instantanément.
                                </p>
                                <h3 className="text-white mt-16">
                                    Dywants technologies and services
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-h-screen">
                        <div className="px-6 mt-0 md:-mt-16">
                            <NavLogo href={route("homepage")}>
                                <img
                                    src="/assets/logo/logo.png"
                                    alt=""
                                    className="w-[80px] h-[80px]"
                                />
                                Dywants
                            </NavLogo>
                            <form action="" className="mt-2">
                                <Title title={"Devis"} />
                                <p className="my-4">
                                    Veuillez remplir les informations
                                    ci-dessous, nous vous contacterons le plus
                                    tôt possible
                                </p>
                                <div className="flex items-center gap-5">
                                    <div className="flex-1">
                                        <Label
                                            className="pb-2"
                                            forInput="select"
                                            value="Votre status"
                                        />
                                        <select className="w-full rounded-md border-gray-300 p-3">
                                            <option value="">Entreprise</option>
                                            <option value="">
                                                Particulier
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <Label
                                            className="pb-2"
                                            forInput="number"
                                            value="Téléphone"
                                        />
                                        <Input
                                            type="number"
                                            name="phone"
                                            className="w-full"
                                            placeholder="+237 600 000 000"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 my-4">
                                    <div className="flex-1">
                                        <Label
                                            className="pb-2"
                                            forInput=""
                                            value="Nom de l’entreprise"
                                        />
                                        <Input
                                            type="text"
                                            name="phone"
                                            className="w-full"
                                            placeholder="Nom de votre entreprise"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Label
                                            className="pb-2"
                                            forInput="number"
                                            value="Adresse email"
                                        />
                                        <Input
                                            type="email"
                                            name="phone"
                                            className="w-full"
                                            placeholder="ex: adresse@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <Label
                                        className="pb-2"
                                        forInput="select"
                                        value="Service(s) sollicité(s)"
                                    />
                                    <select className="w-full rounded-md border-gray-300 p-3">
                                        <option value="">
                                            Creation site internet
                                        </option>
                                        <option value="">
                                            Creation app mobile
                                        </option>
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <Label
                                        className="pb-2"
                                        forInput="select"
                                        value="Une petite description du projet"
                                    />
                                    <textarea
                                        className="w-full rounded-md"
                                        name="texte"
                                        id=""
                                        cols="10"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div className="mt-6 text-right">
                                    <LinkElement primary>
                                        Envoyer le devis
                                    </LinkElement>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Theme>
    );
};

export default Devis;
