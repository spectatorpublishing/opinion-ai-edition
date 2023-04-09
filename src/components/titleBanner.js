import React from 'react';
import styled from 'styled-components/macro';
import tempcoverillo from '../assets/tempcoverillo.png'

const Banner = () => (
    <Wrapper>
        <CoverImgWrapper><img src={tempcoverillo} alt="Cover Illustration"></img></CoverImgWrapper>
        <TitleWrapper><Title>discourse on <span className='green'>AI</span></Title></TitleWrapper>
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
`;

const TitleWrapper = styled.div`
    margin: 2rem 0rem 1rem auto;
`

const Title = styled.div`
  overflow: hidden;
  border-right: .15em solid #1FFDB2; 
  white-space: nowrap;
  margin: 0 auto; 
  letter-spacing: .15em;
  font-family: 'Press Start 2P', cursive;
  color: white;
  .green {
    color: #1FFDB2;
  }
  font-size: 3rem;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #1FFDB2; }
  }
`;