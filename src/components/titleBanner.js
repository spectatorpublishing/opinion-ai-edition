import React from 'react';
import styled from 'styled-components/macro';
import TypeText from './TypeText';

const Banner = () => (
    <Wrapper>
        <CoverImgWrapper><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/EBGQL7LVLNF6VETHGRGTU2RFBE.jpg" alt="Cover Illustration"></img></CoverImgWrapper>
        <TitleWrapper><TypeText>discourse on <span className='green'>AI</span></TypeText></TitleWrapper>
    </Wrapper>
);

export default Banner;

const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    flex-direction: column;
    width: fit-content;
    margin: 0rem auto;
`;

const CoverImgWrapper = styled.div`
    padding: 0rem 10rem;
    
    img {
        height: 35vw;
    }

    @media only screen and (max-width: 768px){
        padding: 0rem 2rem;
        margin: 0rem auto;

        img {
            height: 100%;
            width: 100%;
        }
    }
`;

const TitleWrapper = styled.div`
    margin: 2rem 0rem 1rem auto;

    font-size: 3rem;

    @media only screen and (max-width: 768px){
        font-size: 1.1rem;
        margin: 2rem 2rem 1rem auto;
    }
`