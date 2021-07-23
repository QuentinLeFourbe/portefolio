import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useSpringRef, useChain } from 'react-spring'
import ExpCard from '../CV/ExpCard';
import Presentation from '../CV/Presentation';
import Skills from '../CV/Skills';
import Experiences from '../CV/Experiences';
import TitleSeparator from '../CV/TitleSeparator';
import ReactVisibilitySensor from 'react-visibility-sensor'

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

    return (
        <Container>
            <TitleSeparator title="Qui suis-je ?" delay={0}  />
            <Presentation />
            <TitleSeparator title="Expériences" delay={1500} />
            <Experiences />
            <TitleSeparator title="Compétences" />
            <Skills />
        </Container>
    )
}

export default Main
