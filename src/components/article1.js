import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../device';
import {illustrations} from '../data/credits';
import theme from '../theme';
import rightBubble from './images/rightBubble.png';
import leftBubble from './images/leftBubble.png';

const Article1 = ({article1, article2, hideImage}) => {
    return(
        <ArticleSection>
        <Article
            article={article1}
            side = 'left'
            hideImage={hideImage}
        />
        <Article
            article={article2}
            side = 'right'
            hideImage={hideImage}
        />
        </ArticleSection>
    );
};

export default Article1;

const Article = ({article, side, hideImage}) => {
    return (
        <>
        {article ?
        <Wrapper href={article.article_link} className={side}>
            <Content>
                <TextBox>
                    <Title>{article.article_title}</Title>
                    <Author>By {article.article_authors}</Author>
                </TextBox>
                <Image hideImage={hideImage} className={side}><img src={article.image_url}/></Image>
            </Content>
        </Wrapper> : null}
        </>
    );
};


const ArticleSection = styled.div`
    margin: 0rem 10rem 0rem 10rem;
    @media only screen and (max-width: 1200px) {
        margin: 0rem 4rem 0rem 4rem;
    }
    @media only screen and (max-width: 1000px) {
        margin: 0rem 2rem 0rem 2rem;
    }

`;

const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 1rem 0rem 8rem 0rem;
    padding: 0; /* remove any pre-existing padding, just in case */
    //padding-bottom: 15%; /* for a 4:3 aspect ratio */
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &.right {
        background-image: url(${rightBubble});
    }

    &.left {
        background-image: url(${leftBubble});
    }

    @media only screen and (max-width: 768px) {
        margin: 1rem 0rem 3rem 0rem;
    }
`;

const Content = styled.div`
    background-color: white;
    display: flex;
    padding: 2rem;
    margin: -2rem 2rem 10rem -2rem;

    @media only screen and (max-width: 768px) {
        padding: 1.2rem;
        margin: -1rem 1rem 5rem -1rem;
    }
`

const TextBox = styled.div`
    flex: 1;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    color: ${theme.colors.articleTitleBlue};
    line-height: 3rem;
    font-weight: 500;
    font-size: 2.25rem;
    margin: auto 1rem auto 3rem;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.1rem;
        margin: auto 1rem auto 1rem;
    }
`;

const Author = styled.div`
    font-size: 1.25rem;
    margin: 0rem 1rem 0rem 3rem;

    @media only screen and (max-width: 768px) {
        font-size: 0.75rem;
        margin: 1rem 1rem 0rem 1rem;
    }
`;

const Image = styled.div`
    margin: auto 0rem auto 0rem;
    height: 25vw;
    width: 25vw;

    img {
        object-fit: cover;
        width: 25vw;
        height: 25vw;
    }

    @media only screen and (max-width: 768px) {
        
    }
`;