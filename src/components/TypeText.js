import React from "react";
import styled from "styled-components";

const TypeTextBox = styled.div`
    overflow: hidden;
    border-right: 0.5rem solid #1FFDB2; 
    white-space: nowrap;
    margin: 0 auto; 
    letter-spacing: .15em;
    font-family: 'Press Start 2P', cursive;
    color: white;
    
    .green {
        color: #1FFDB2;
    }

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
`

const TypeText = ({children}) => {
    return (
        <TypeTextBox>{children}</TypeTextBox>
    )
}

export default TypeText;