import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import NextSection from '../components/nextSection';

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
                <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/episode/2iC7btGumjDU6RQJl9oxjJ?utm_source=generator" width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </PodcastWrapper>
            <Text>
                <p>The first Spectator Summer Fellowship Program, held during the summer of 2020, arose as a response to the pandemic, which had brought the world to a standstill. With regular life suspended, Spectator launched SSFP as a way to simultaneously document the drastic changes that had transformed daily life and invite the participation of incoming Columbia students who might have faced accessibility barriers to joining Spectator.</p>
                <p><strong>Transcript:</strong></p>
                <p>Dear readers, </p>
                <p>The first Spectator Summer Fellowship Program, held during the summer of 2020, arose as a response to the pandemic, which had brought the world to a standstill. With regular life suspended, Spectator launched SSFP as a way to simultaneously document the drastic changes that had transformed daily life and invite the participation of incoming Columbia students who might have faced accessibility barriers to joining Spectator.</p>
                <p>That cohort’s success can be seen not just in the quality of the content it produced, but in the  composition of Spectator’s current leaders. Many of the 2020 SSFP fellows now hold managing and deputy board positions at Spectator.</p>
                <p>While our lives may be less affected by the pandemic now than they were two years ago, we launched SSFP 2022 this year with a similar objective as its first iteration: to get incoming students excited about and involved with Spectator before stepping onto campus.</p>
                <p>During this program, we welcomed 56 incoming undergraduates, including transfer and dual-degree students, from around the world to embark on a two-part journey. For the first seven days, fellows engaged with 19 staff-led workshops introducing them to the fundamentals of journalism and the work of nearly every Spectator section. These online workshops were offered both synchronously and asynchronously to accommodate fellows’ time zones and other personal circumstances. For the remainder of the program, each fellow was assigned a mentor from current Spectator staff, who walked them through the creation of their first articles, videos, graphics, and illustrations.</p>
                <p>This edition is the culmination of those projects. It has blown our expectations out of the water.</p>
                <p>We’ve been impressed by our fellows’ engagement and depth of thought as they’ve grappled with the challenging concepts that comprise journalism, many of which have been novel to them. We’re also incredibly grateful for all of the wonderful Spectator staffers who have produced robust workshops, provided quality mentorship, and created this webpage you’re reading now—many while simultaneously working full-time jobs or internships.</p>
                <p>We have no doubt that this creative, empathetic, and energetic fellowship class has the potential to become part of the next generation of great journalists, engineers, and business leaders.</p>
                <p>With all our very best,</p>
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