import { articles } from '@/Pages/Data/blog';
import React from 'react';
import styled from 'styled-components';
import CardBlog from '../Elements/CardBlog';
import MetaBlog from "@/Components/Elements/MetaBlog";

const BlogSection = () => {
    return (
        <section className="container mx-auto p-20">
            <h2 className="text-left text-title">Lisez nos derniers blogs et actualités</h2>
            <WrapperBlog>
                {
                    articles.map((article, i) => {
                        return(
                            <CardBlog key={i}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                            url={article.url}
                            category={article.category}
                            >
                                <MetaBlog img="assets/images/blog/Avatar.png" name={article.name} date={article.date} url={article.url}/>
                            </CardBlog>
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
