import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import arrow from './images/arrow.png'

const Wrapper = styled.div`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    margin: 4rem 4rem 4rem auto;
    padding-bottom: 2rem;

    a {
        margin-left: auto;
        color: white;
    }

    @media only screen and (max-width: 1160px){
        font-size: 16px;
        flex-direction: row-reverse;
    }
`

const Body = styled.div`
    border: none;
    display: flex;
    align-items: center;
    padding-left:2rem;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    margin-left: auto;
    font-size: 24px;
    font-family: 'Press Start 2P', cursive;

    @media only screen and (max-width: 750px){
        font-size: 16px;
    }
`

const NextText = styled.div`
    white-space: nowrap;
    display: flex;
    text-align: right;
    font-size: 30px;

    img {
        margin-left: 1rem;
    }

    @media only screen and (max-width: 750px){
        font-size: 20px;
    }
`

const Begin = styled.div`
`

const NextSection = ( {nextseclink, nextsec, image, setSection} ) => { //add image prop if needed, currently calling from file
   
    return (
       <Wrapper onClick={setSection}>
        <HashLink to={nextseclink} style={{ textDecoration: 'none' }}>
        <Body>
            <TextBox>
                <NextText>Next: {nextsec} <img src={arrow} alt="right next arrow"/></NextText>
                <Begin></Begin>
            </TextBox>
        </Body>
        </HashLink>
    </Wrapper>
   )
};

export default NextSection;