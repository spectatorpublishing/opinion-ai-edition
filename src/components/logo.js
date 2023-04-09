import React from 'react';
import styled from 'styled-components';
import logo from '../assets/spectator-logo.svg';

const Logo = () => {
    return (
            <Wrapper >
                <a href="https://www.columbiaspectator.com/">
                    <img src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator Logo"></img>
                </a>
            </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.div`
    margin: 2rem auto 1rem auto;
    height: 1.75rem;
    width: fit-content;

    img {
        height: 1.75rem;
    }
`;