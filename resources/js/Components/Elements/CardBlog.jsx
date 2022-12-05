import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import styled from 'styled-components';

const CardBlog = ({image, category, title, description, children, url}) => {
    return (
        <CardBlobSection className='group'>
            <div className="group-hover:shadow-md p-[18px] rounded-sm ">
                <img src={image} alt={title} className="h-[240px] object-cover w-full" />
                <h3 className='text-[14px] text-[#6941C6] font-semibold leading-5 my-3'>{category}</h3>
                <div className='flex justify-between items-start'>
                    <Link href={url}>
                        <h3 className='text-[24px] font-semibold leading-8 text-black flex-grow-1'>{title}</h3>
                    </Link>
                    <img src="assets/images/blog/Icon.svg" alt="" />
                </div>
                <p className='text-[16px] text[#667085] font-normal leading-6 my-2'>{description}</p>
                <div className='pt-[56px] text-left'>
                    {children}
                </div>
            </div>
        </CardBlobSection>
    );
};

const CardBlobSection = styled.div`
// box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;

export default CardBlog;
