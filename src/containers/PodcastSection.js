import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import NextSection from '../components/nextSection';
import theme from '../theme';

//style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"

const PodcastLink = styled.div`
    font-size: 10px; 
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;
`

const PodcastSection = ({ header, next, nextLink, setSection, isOpinionSection }) => {

    const handleMenuItemOnClick = () => {
        if (next === "Credits") {
            setSection("Home");
        } else {
            setSection(next);
        }

        console.log(next);
    }

    return (
        <main>
            <SectionTitle isOpinionSection={isOpinionSection} title={header} />
            <PodcastWrapper>
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1503578917&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <PodcastLink>
                    <a href="https://soundcloud.com/specopiniondebate" title="Discourse and Debate" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Discourse and Debate</a> · 
                    <a href="https://soundcloud.com/specopiniondebate/discourse-and-debate-ep1" title="Discourse and Debate: How do we grapple with ChatGPT and the evolution of AI?" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Discourse and Debate: How do we grapple with ChatGPT and the evolution of AI?</a>
                </PodcastLink>
            </PodcastWrapper>
            <Text>
                <p>In this inaugural podcast for Discourse and Debate, a joint venture with Spectator’s editorial page, Jack Cleeve, CC ’25, Soham Mehta, CC ’24, and Sydney Goldson, CC ’25, sit down with Avian Muñoz, CC ’25, to talk about the influence that ChatGPT might have on academia and the workforce. In discussing tips on how to navigate this unfamiliar new horizon, Mehta encourages us “to have empathy and have unusual worldviews because that’s something that the structure of large language models can’t really take into account. It’s operating on limited information. It’s got limited ability to extrapolate.”</p>
                <a href="https://www.columbiaspectator.com/opinion/2023/04/30/discourse-and-debate-how-do-we-grapple-with-chatgpt-and-the-evolution-of-ai/"><strong>Transcript</strong></a>
            </Text>
            <NextSection setSection={handleMenuItemOnClick} nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </main>
    );
};

export default PodcastSection;

const PodcastWrapper = styled.div`
    margin: 0rem 10rem;

    @media only screen and (max-width: 768px){
        margin: 0rem 3rem;
    }
`;

const Text = styled.div`
    margin: 3rem 10rem;

    a {
        margin-top: 2rem;
        text-decoration: none;
        color: ${theme.colors.green};
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 768px){
        margin: 3rem 3rem;
    }

    p {
        font-size: 1.125rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }
`;