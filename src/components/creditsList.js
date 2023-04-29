import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';
import theme from '../theme';

const Wrapper = styled.div`
    margin: 0rem 5rem 0rem 5rem;    

    @media only screen and (max-width: 768px) {
        margin: 0rem;  
    }
`;

const Direction = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    color: ${theme.colors.white};
    
    h2 {
        font-weight: normal;
        font-size: 26px;
        text-transform: uppercase;

        @media only screen and (max-width: 750px) {
            font-size: 18px;
        }

        @media only screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
    
    @media only screen and (max-width: 750px) {
        padding: 0;
        font-size: 17px;
    }

    @media only screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

const Padding = styled.div`
    height: 12px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem;

    @media only screen and (max-width: 750px) {
        margin: 0rem 2rem 0rem 2rem;
    }
`;

const SubDiv = styled.div`
    padding-bottom: 3rem;

    @media only screen and (max-width: 750px) {
        text-align: center;
        padding-bottom: 2rem;
    }
`;

const CreditsList = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    if (width < 801) {
        return (
            <Wrapper>
                <Text>
                    <Column>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            {credits['Corporate Board'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            {credits['Design and Development'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            {credits['Cover Illustration'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Opinion</h2>
                            {credits['Opinion'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Audio</h2>
                            {credits['Audio'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Illustrations</h2>
                            {credits['Illustrations'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Photo</h2>
                            {credits['Photo'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Copy</h2>
                            {credits['Copy'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                    </Column>
                </Text>
            </Wrapper>
        );
    } else if (width > 800 && width < 1050) {
        return (
            <Wrapper>
                <Text>
                    <Direction>
                        <Column>
                            <SubDiv>
                                <h2>Corporate Board</h2>
                                {credits['Corporate Board'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Audio</h2>
                                {credits['Audio'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Opinion</h2>
                                {credits['Opinion'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Copy</h2>
                                {credits['Copy'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Design and Development</h2>
                                {credits['Design and Development'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Lead Illustration By</h2>
                                {credits['Cover Illustration'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Photo</h2>
                                {credits['Photo'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Illustrations</h2>
                                {credits['Illustrations'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Text>
                    <Direction>
                        <Column>
                        <SubDiv>
                                <h2>Corporate Board</h2>
                                {credits['Corporate Board'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Lead Illustration By</h2>
                                {credits['Cover Illustration'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Illustrations</h2>
                                {credits['Illustrations'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Photo</h2>
                                {credits['Photo'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Audio</h2>
                                {credits['Audio'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Opinion</h2>
                                {credits['Opinion'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Design and Development</h2>
                                {credits['Design and Development'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Copy</h2>
                                {credits['Copy'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    }
};


export default CreditsList;