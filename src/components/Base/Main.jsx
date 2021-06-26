import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'


const Container = styled(animated.div)`
    grid-area: main;
    padding: 5vh 10vw 5vh 10vw;
`;

function Main() {
    const springStyle = useSpring(
        {
            from: {
                opacity: 0,
            },
            opacity: 1,
            config: config.tight,
        });

    return (
        <Container style={springStyle}>
            Le contenu de la page principale...
        </Container>
    )
}

export default Main
