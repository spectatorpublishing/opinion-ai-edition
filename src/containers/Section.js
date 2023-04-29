import SectionTitle from '../components/section-title';
import Article1 from '../components/article1';
import NextSection from '../components/nextSection';
import styled from 'styled-components';

const Section = ({ articles, header, next, nextLink, setSection, isOpinionSection }) => {

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
            <Content>
                <Article1
                    article1={articles[0]}
                    article2={articles[1]}
                />
                <Article1
                    article1={articles[2]}
                    article2={articles[3]}
                />
            </Content>
            <NextSection setSection={handleMenuItemOnClick} nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </main>
    );
};

export default Section;

const Content = styled.div`
    margin-top: 8rem;

    @media only screen and (max-width: 768px) {
        margin-top: 4rem;
    }
`