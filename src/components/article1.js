import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import {illustrations} from '../data/illustrations';

const Article1 = ({article1, article2}) => {
    return(
        <ArticleSection>
        <Article
            article={article1}
            side = 'left'
        />
        <Article
            article={article2}
            side = 'right'
        />
        </ArticleSection>
    );
};

export default Article1;

const Article = ({article, side}) => {
    return (
        <>
        {article ?
        <Wrapper href={article.article_link} className={side}>
            {(side == "left") ? null : <Image illustration={illustrations[Math.floor(Math.random() * illustrations.length)]}><img src={article.image_url}/></Image>}
            <div className="textbox">
                <Title><Letter>{article.article_title.substring(0,1)}</Letter><Text>{article.article_title.substring(1)}</Text></Title>
                <Author>By {article.article_authors}</Author>
            </div>
            {(side == "right") ? null : <Image illustration={illustrations[Math.floor(Math.random() * illustrations.length)]}><img src={article.image_url}/></Image>}
        </Wrapper> : null}
        </>
    );
};

const ArticleSection = styled.div`
    margin: 0rem 8rem 0rem 8rem;
`;

const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 1rem 0rem 1rem 0rem;

    img {
        opacity: 0;
        display: block;
        object-fit: cover;
        margin: auto 0rem auto -13rem;
        width: 28rem;
        height: 22rem;
        //content: url("https://womenshistorymonth2021.s3.amazonaws.com/File_001(2).png");    
    }

    .textbox {
        margin: auto 0rem auto auto;
        width: 80vw;
        padding: 0.2rem 1rem 1.2rem 1rem;
    }

    :hover{
        img {
            opacity: 1;
        }
        .textbox {
            background: rgba( 255, 255, 255, 0.75);
        }
    }

    &.right {
        img {
            margin: auto -13rem auto auto;
        }

        .textbox {
            margin: auto 0rem auto auto;
            padding: 0.2rem 1rem 1.2rem 1rem;
            text-align: right;
        }
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
`;

const Letter = styled.div`
    font-family: Playfair Display;
    font-size: 6rem;
    font-style: italic;
    font-weight: 700;
    color: #D0867C;
    text-transform: uppercase;
`;

const Text = styled.div`
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    margin: 3.5rem 0rem auto -1.8rem;
`;

const Author = styled.div`
    font-family: Khula;
    font-size: 1.25rem;
    margin-left: 3rem;
`;
const Image = styled.div`
    margin: auto 0rem auto 0rem;
    z-index: -1;
    background-image: url("${props => props.illustration}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;