import React from 'react';
import styled from 'styled-components';
import ArticleCard from '../components/article-card'

const Articles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`;

const ArticleTest = () => (
    <Articles>
    
    <ArticleCard
        title = 'This is an Article and it is Numbered One'
        name = 'Author 1'
        imageURL = 'https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg'
        buttonLink = '/Article1'
    />

    <ArticleCard
        title = 'Second Article'
        name = 'Author 2'
        imageURL = 'https://gocolumbialions.com/images/2017/3/8/NKPIEYSRWVIDFJI.20170308192011.jpg'
        buttonLink = '/Article2'
    />

    <ArticleCard
        title = 'Article Number Three'
        name = 'Author 3'
        imageURL = 'https://pyxis.nymag.com/v1/imgs/63c/931/914cbf67cac29b6ee2d4d9746c667a145c-columbia-university.rsquare.w1200.jpg'
        buttonLink = '/Article3'
    />
    
    </Articles>
);

export default ArticleTest;