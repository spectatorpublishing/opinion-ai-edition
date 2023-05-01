import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Letter = () => (
    <Wrapper>
        <Title>Letter From The Editors</Title>
        <Text>
            <p>Dear readers, </p>
            <p>The central objective of Spectator's opinion section is, verbatim, “to reflect and direct campus and community discourse.” Achieving this aim not only means publishing pieces authored by a diverse pool of voices, but also expanding the horizons of what opinion journalism can look like. At its conception in 2017, <i>Discourse and Debate</i> entailed columnists from across a range of backgrounds engaging in spoken and written dialogue with one another about polarizing issues with the goal of highlighting our community's many differing beliefs.</p>
            <p>It is our great pleasure to announce that after a years-long, pandemic-induced hiatus, <i>Discourse and Debate</i> is at last returning to Spectator's opinion page. In our reimagining of the project, we have sought to make these dialogues more accessible than ever before by including both traditional contributor-authored op-eds and a recording of the verbal exchange between them in podcast form.</p>
            <p>In this special edition, we examine ChatGPT and investigate the ways artificial intelligence has already begun to seep into the daily lives of our community. Bringing together contributors from diverse backgrounds and different disciplines, this project seeks to explore what it means for us to embrace AI, and the reasons we might be cautious about doing so.</p>
            <p>All the very best,</p>
        </Text>
        <Signatures>
            <Signature className='left'><div className='name'>Milène Klein</div><div className='title'>Editorial Page Editor</div></Signature>
            <Spacing/>
            <Signature><div className='name'>Avian Muñoz</div><div className='title'>Administrative Deputy Editorial Page Editor</div></Signature>
        </Signatures>
    </Wrapper>
);

export default Letter;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 2rem 0rem 2rem;
    padding: 2rem 8rem 0rem 8rem;
    color: ${theme.colors.white};

    @media only screen and (max-width: 1200px){
        padding: 2rem 6rem 0rem 6rem;
    }
    @media only screen and (max-width: 1000px){
        padding: 2rem 4rem 0rem 4rem;
    }
    @media only screen and (max-width: 768px){
        padding: 2rem 1rem 0rem 1rem;
    }
    @media only screen and (max-width: 570px) {
        margin: 2rem 2rem 0rem 2rem;
    }
    @media only screen and (max-width: 400px){
        padding: 0;
    }`;

const Title = styled.div`
    font-weight: 500;
    font-size: 2.75rem;
    margin-top: auto;
    margin-bottom: auto;
    color: ${theme.colors.green};

    @media only screen and (max-width: 768px){
        font-size: 1.188rem;
    }
`;

const Text = styled.div`
    p{
        font-size: 1.125rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }
`;

const Signatures = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem;
`;

const Spacing = styled.div`
    width: 8rem;
`

const Signature = styled.div`
    .name {
        font-size: 1.625rem;
        margin: 0rem;
        text-align: left;

        @media only screen and (max-width: 768px){
            font-size: 1.125rem;
            text-align: left;
        }
    }

    .title {
        font-size:  1.125rem;
        margin-bottom: 0.5rem;
        COLOR: #D700FC;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }

    .bold {
        font-weight: 600;
        font-size:  1.25rem;

        @media only screen and (max-width: 768px){
            font-size: 1.125rem;
        }
    }

    margin: 0rem;
`;