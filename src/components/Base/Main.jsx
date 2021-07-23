import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import ExpCard from '../CV/ExpCard';
import Presentation from '../CV/Presentation';
import Skills from '../CV/Skills';
import Experiences from '../CV/Experiences';

const Container = styled(animated.div)`
    grid-area: main;
    margin:0;
    /* display: grid;
    grid-template-columns: 1fr 5vw 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "left middle right"; */
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
            <Presentation />
           <Experiences/>
            <Skills />
        </Container>
    )
}

export default Main
