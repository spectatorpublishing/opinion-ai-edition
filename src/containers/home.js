import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import Letter from '../components/editorLetter';
import NextSection from '../components/nextSection';
import Banner from '../components/titleBanner';
import Credits from './credits';
import theme from '../theme';

const HomeContainer = styled.div`
    margin-bottom: 5rem;
    margin-top: 1rem;

    @media only screen and (max-width: 768px){
        margin-bottom: 0rem;
        margin-top: 0rem;
    }
`;

const CreditsTitle = styled.div`
    align-items:center;
    font-size: 2.25rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0rem 5rem 0rem 5rem;
    color: ${theme.colors.green};

    @media only screen and (max-width: 750px) {
        text-align: center;
        margin: 1rem 0rem 2rem 0rem;
        font-size: 25px;
    }

    @media only screen and (max-width: 425px) {
        text-align: center;
        margin: 1rem 0rem 2rem 0rem;
        font-size: 20px;
    }
`;

const Padding = styled.div`
    height: 7rem;

    @media only screen and (max-width: 768px){
        height: 4rem;
    }
`

const Home = ({next, nextLink, setSection}) => {

    return (
        <>
            <HomeContainer>
                <Banner />
                <Letter />
                <NextSection setSection={() => setSection(next)} nextseclink={nextLink} nextsec={next}></NextSection>
            </HomeContainer>
            <Padding id="credits"/>
            <CreditsTitle>Staff Who Made This Issue Possible</CreditsTitle>
            <Credits />
        </>
    )
};

export default Home;