import React, { useRef, useState } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import TitleSection from "../Elements/TitleSection";
import Title from "../Elements/Title";
import emailjs from "@emailjs/browser";
import {
    SuccessMessage,
    FailMessage,
    IsEmail,
} from "../CheckEmail/CheckAfterSend.js";

const SectionForm = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (name && IsEmail(email, "not-mail") && message) {
            emailjs
                .sendForm(
                    "service_dgtrmij",
                    "template_2kt2ldg",
                    form.current,
                    "ct4JNLVr72XyvUpBX"
                )
                .then(
                    (result) => {
                        SuccessMessage(
                            "Message envoyé ! Nous vous recontacterons dès que possible.",
                            ".form-message"
                        );
                        setName("");
                        setEmail("");
                        setMessage("");
                        console.log(result.text);
                    },
                    (error) => {
                        FailMessage(
                            "Une erreure s'est produite, veuillez réessayer.",
                            ".form-message"
                        );
                    }
                );
            e.target.reset();
        } else {
            FailMessage(
                "Merci de remplir correctement les champs requis *",
                ".form-message"
            );
        }
    };

    return (
        <div className="wrapper lg:mt-32 mb-8 lg:mb-16 relative">
            <div className="wrapper mt0 mb0 pb-6">
                <div className="form-message p-2 rounded-md text-white"></div>
            </div>
            <div className="wrapper mt0 flex flex-col lg:flex-row px-8 gap-3 lg:gap-7">
                <div className="w-full lg:max-w-[665px]">
                    <TitleSection title="Nous Contacter" />
                    <Title title="Avoir une question ? Prenons contact avec nous 👋" />
                    <p className="text-texte text-base leading-6">
                        Remplissez le formulaire et notre équipe vous répondra
                        dans les 24 heures
                    </p>
                    <div className=" w-full mt-4">
                        <form ref={form} onSubmit={sendEmail}>
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
                                    autoComplete="name"
                                    value={name}
                                    isFocused={true}
                                    handleChange={(e) =>
                                        setName(e.target.value)
                                    }
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
                                    autoComplete="email"
                                    value={email}
                                    isFocused={true}
                                    handleChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                                <span
                                    id="not-mail"
                                    className="text-red-600 text-xs hidden"
                                >
                                    Email non conforme!
                                </span>
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#85B6FF57] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <div className="text-right mt-6">
                                <Button type="submit" className="ml-4">
                                    Soumettre
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-secondaryGraded flex-1 flex justify-center items-center">
                    <div className="p-10">
                        <TitleSection className="text-white" title="Location" />
                        <ul className="text-left text-white space-y-4 lg:space-y-10 mt-4">
                            <li className="font-medium md:text-3xl">
                                contact@dywants.com
                            </li>
                            <li className="font-medium md:text-3xl">
                                (+237) 699278240
                            </li>
                            <li className="font-medium md:text-3xl">
                                Douala Cameroun, sis Lycée cité des palmiers
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionForm;
