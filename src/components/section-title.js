import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';
import TypeText from './TypeText';

const Box = styled.div`
  margin: 1.25rem 0 5rem 0;
  position: relative;
  width: fit-content;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 0 2rem 0;
  }
`;

const Title = styled.div`
  margin: 2rem auto 1rem 10rem;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;

  font-size: 2rem;

  @media only screen and (max-width: 768px){
    font-size: 1.1rem;
    margin: 2rem auto 1rem 2rem;
  }
`;

const SectionTitle = ({ title, isOpinionSection }) => {
    return (
      <Box> 
        <Title>{isOpinionSection ? <TypeText>{title}s on <span className='green'>AI</span></TypeText> : <TypeText>{title}</TypeText>}</Title>
      </Box>
    );
  };

export default SectionTitle