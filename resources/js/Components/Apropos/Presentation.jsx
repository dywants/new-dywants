import React from 'react';

const Presentation = () => {
    return (
        <div className="container mx-auto max-w-6xl px-7 pb-10  relative">
            <div className="wrapper flex gap-3 mb-10 mt-48">
                <div className="left max-w-[414px] w-full">
                    <h2>Presentation de l'entreprise</h2>
                </div>
                <div className="right w-[552px] h-[267px]">
                    <img src="assets/images/apropos/hero-start-ups.png" alt="" />
                </div>
            </div>
            <div className="space-y-3">
            <p className='text-muted leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium odio iusto ullam natus quae tempora culpa. Laudantium dignissimos soluta ducimus culpa, dolorum dicta magnam repudiandae suscipit consectetur est, labore tempore rerum libero vitae accusamus illo! Illum, ut placeat, ipsa aliquid facilis vitae tempora minus nostrum, quisquam perferendis odit porro.
            </p>
            <p className='text-muted leading-relaxed '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium odio iusto ullam natus quae tempora culpa. Laudantium dignissimos soluta ducimus culpa, dolorum dicta magnam repudiandae suscipit consectetur est, labore tempore rerum libero vitae accusamus illo! Illum, ut placeat, ipsa aliquid facilis vitae tempora minus nostrum, quisquam perferendis odit porro.
            </p>
            <p className='text-muted leading-relaxed '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti accusantium odio iusto ullam natus quae tempora culpa. Laudantium dignissimos soluta ducimus culpa, dolorum dicta magnam repudiandae suscipit consectetur est, labore tempore rerum libero vitae accusamus illo! Illum, ut placeat, ipsa aliquid facilis vitae tempora minus nostrum, quisquam perferendis odit porro.
            </p>
            </div>
            <div className='absolute -top-40 right-0 space-y-2'>
                <div className="w-[267px] h-[267px] bg-[#FFB400]"></div>
                <div className="w-[180px] h-[180px] bg-[#1B3567]"></div>
            </div>
        </div>
    );
};

export default Presentation;