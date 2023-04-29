import React from "react";
import styled from "styled-components";
import theme from "../theme";

const TypeTextBox = styled.div`
    overflow: hidden;
    border-right: 0.5rem solid ${theme.colors.green}; 
    white-space: nowrap;
    margin: 0 auto; 
    letter-spacing: .15em;
    font-family: 'Press Start 2P', cursive;
    color: white;
    
    .green {
        color: ${theme.colors.green};
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
        50% { border-color: ${theme.colors.green}; }
    }
`

const TypeText = ({children}) => {
    return (
        <TypeTextBox>{children}</TypeTextBox>
    )
}

export default TypeText;