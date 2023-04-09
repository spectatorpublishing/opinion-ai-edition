import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';

const Box = styled.div`
    margin: 1.25rem 0 3rem 0;
    position: relative;

    @media only screen and (max-width: 768px) {
      margin: 1.25rem 0 1rem 0;
    }
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 4rem;
    padding: ${props => props.isEyeSection ? '1rem 1.25rem 0 8.75rem' : '5rem 1.25rem 0 8.75rem'};
    color: white;

    @media only screen and (max-width: 768px) {
        font-size: 3rem;
        padding: 0.25rem 1.25rem 0 2rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 2rem;
      padding: 0.25rem 1rem 0 2rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
    padding: 0.25rem 1rem 0 2rem;
}
`;

const SectionTitle = ({ title, isEyeSection }) => {
    return (
      <Box> 
        <Title isEyeSection={isEyeSection}> {title} </Title>
      </Box>
    );
  };

export default SectionTitle