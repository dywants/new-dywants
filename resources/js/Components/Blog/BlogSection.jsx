import { articles } from '@/Pages/Data/blog';
import React from 'react';
import styled from 'styled-components';
import CardBlog from '../Elements/CardBlog';

const BlogSection = () => {
    return (
        <section className="container mx-auto p-20">
            <h2 className="text-left">Articles de blog</h2>
            <WrapperBlog>
                {
                    articles.map((aritcle, i) => {
                        return(
                            <CardBlog key={i} 
                            title={aritcle.title} 
                            description={aritcle.description} 
                            image={aritcle.image}
                            url={aritcle.url}
                            category={aritcle.category}
                            />
                        )
                    })
                }
            </WrapperBlog>
        </section>
    );
};


const WrapperBlog = styled.div`
display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   margin: 3rem auto;
   gap: 1rem;
`;

export default BlogSection;