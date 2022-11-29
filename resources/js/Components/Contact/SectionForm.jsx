import React from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import TitleSection from "../Elements/TitleSection";
import Title from "../Elements/Title";

const SectionForm = () => {
    return (
        <div className="container mx-auto max-w-6xl mt-32 mb-16">
            <div className="wrapper flex gap-7">
                <div className="max-w-[665px]">
                    <TitleSection title="Nous Contacter"/>
                    <Title title="Avoir une question ? Prenons contact avec nous 👋"/>
                    <p className="text-texte text-base leading-6">Remplissez le formulaire et notre équipe vous répondra dans les 24 heures</p>
                    <div className=" w-full mt-4">
                        <form action="">
                            <div>
                                <Label
                                    forInput="name"
                                    value="Nom et Prenom"
                                    className="text-[#4E71CB]"
                                />

                                <Input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full bg-[#85B6FF57]"
                                    autoComplete="username"
                                    isFocused={true}
                                />
                            </div>
                            <div className="mt-4">
                                <Label
                                    forInput="email"
                                    value="Email"
                                    className="text-[#4E71CB]"
                                />

                                <Input
                                    type="text"
                                    name="email"
                                    className="mt-1 block w-full bg-[#85B6FF57]"
                                    autoComplete="username"
                                    isFocused={true}
                                />
                            </div>
                            <div className="mt-4">
                                <Label
                                    forInput="massage"
                                    value="Votre message"
                                    className="text-[#4E71CB]"
                                />
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#85B6FF57] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <div className="text-right mt-6">
                                <Button className="ml-4">Soumettre</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-secondaryGraded flex-1">
                    <div className="p-10">
                        <TitleSection className="text-white" title="Location"/>
                        <ul className="text-left text-white space-y-10 mt-4">
                            <li className="font-medium text-3xl">contact@dywants.com</li>
                            <li className="font-medium text-3xl">(+237) 699278240</li>
                            <li className="font-medium text-3xl">Douala Cameroun, sis Lycée cité des palmiers</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionForm;
