import { React, useState} from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';
import { sections } from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';

const Wrapper = styled.div`
    margin: 0rem;
    padding: 1rem 0rem;
    text-transform: uppercase;

    a {
        color: black;
        text-decoration: none;
        margin: auto 0.5rem;
    }
`;

const DesktopNav = styled.div`
    display: flex;
    width: fit-content;
    border-bottom: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin: 0rem auto 0rem auto;
`;

const Link = styled.div`
    padding: 0.5rem 2rem;
    margin-bottom: -0.2rem;
    border: 3px solid transparent;
    color: white;

    &.active {
        padding-bottom: 0.2rem;
        border-bottom: 3px solid ${theme.colors.green};
        transition: all 0.2s ease;
    }

    &:hover{
        transition: all 0.2s ease;
        padding-bottom: 0.2rem;
        border-bottom: 3px solid ${theme.colors.green};
        color: ${theme.colors.green};
    }
`;

const Navbar = ({ currentSection, setSection }) => {
    const [show, setToggle] = useState(false);

    const handleMenuItemOnClick = (newSection) => {
        if (newSection.title === "Credits") {
            setSection("Home");
        } else {
            setSection(newSection.title);
        }

        setToggle(!show);
    }

    return (
        <Wrapper>
            <DesktopNav>
                {sections.map((item) => {
                    return (
                        <>
                            <NavHashLink smooth to={item.url} exact={item.exact}>
                                <Link className={currentSection === item.title ? "active" : ""} onClick={() => handleMenuItemOnClick(item)}>
                                    {item.title}
                                </Link>
                            </NavHashLink>
                        </>
                    )
                })}
            </DesktopNav>
        </Wrapper>
    );
};

export default Navbar;