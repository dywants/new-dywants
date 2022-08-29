import React from 'react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';

const SectionForm = () => {
    return (
        <div className='container mx-auto max-w-6xl px-7 mt-32 mb-16'>
             <h2 className="mb-10">Vous avez des questions</h2>
            <div className="wrapper flex gap-6">
           
            <div className="left max-w-[645px] w-full mt-4">
                <form action="">
                <div>
                    <Label forInput="name" value="Nom et Prenom" className="text-[#4E71CB]" />

                    <Input
                        type="text"
                        name="name"
                        className="mt-1 block w-full bg-[#85B6FF57]"
                        autoComplete="username"
                        isFocused={true}
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="email" value="Email" className="text-[#4E71CB]" />

                    <Input
                        type="text"
                        name="email"
                        className="mt-1 block w-full bg-[#85B6FF57]"
                        autoComplete="username"
                        isFocused={true}
                    />
                </div>
                <div className="mt-4">
                    <Label forInput="massage" value="Votre message" className="text-[#4E71CB]" />
                    <textarea name="message" id="" cols="30" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-[#85B6FF57] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                </div>
                <div className="text-right mt-6">
                <Button className="ml-4">
                        Soumettre
                </Button>
                </div>
                </form>
            </div>
            <div className="right">
                <div className="flex gap-2">
                    <div className=" flex flex-col justify-items-end">
                        <div className="w-[200px] h-[175px] bg-[#FFB400] mb-2 rounded-sm"></div>
                        <img src="assets/images/contact/img-form.png" alt="" />
                    </div>
                    <div>
                        <img src="assets/images/contact/img-form2.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SectionForm;