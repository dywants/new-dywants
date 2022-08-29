import React from 'react';

const SectionInfoContact = () => {
    return (
        <div className='container mx-auto max-w-6xl px-7 my-16'>
            <div className="wrapper flex flex-row w-full gap-4 items-end">
                <div class="max-w-[304px] w-full">
                    <h2 className="mb-2">Contact</h2>
                    <div className="space-y-2 text-md text-gray-600">
                       <p>Tel: +237 699278240</p>
                       <p><a href="mailto:contact@dywants.com">Email: contact@dywants.com</a></p>
                       <p>BP: 704 Edea</p>
                    </div>
                </div>
                <div class="max-w-[294px] w-full h-[176px] bg-[#4E71CB]"></div>
                <div class="w-auto border">
                    <img src="assets/images/contact/image-contact.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionInfoContact;