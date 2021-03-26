import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import image from '../components/images/primaryImage.png'
import Letter from '../components/editorLetter';
import NextSection from '../components/nextSection';

const HomeContainer = styled.div`

`;

const Home = () => (
    <HomeContainer>
        <Letter/>
        <NextSection nextseclink='/news' nextsec='News' image={image}></NextSection>
    </HomeContainer>
);

export default Home;