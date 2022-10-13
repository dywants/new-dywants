import React from 'react';
import TitleSection from "../Elements/TitleSection.jsx";
import Title from "../Elements/Title.jsx";
import Input from "@/Components/Input"

const Newsletter = () => {
    return (
        <div className="w-full p-[64px] bg-secondary rounded-lg">
            <TitleSection className="text-white mb-2" title="NEWSLETTER"/>
            <div className="flex justify-between items-center gap-7 max-x-[420px]">
                <h3 className="mb-4 font-semibold text-[36px] leading-10 text-white">Abonnez-vous à notre NewsLetter pour ne rien manquer de nos actualités.</h3>
                <form action="" className="w-full">
                    <Input className="w-full h-14"/>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;