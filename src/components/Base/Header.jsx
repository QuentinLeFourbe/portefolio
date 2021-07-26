import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useTransition, useTrail } from 'react-spring'
import { Link } from 'react-router-dom'
import TitleLink from './Header/TitleLink';
import HeaderLink from './Header/HeaderLink';

const Container = styled(animated.header)`
    grid-area: header;
    box-sizing:border-box;
    /* padding: 0px 1rem 0px 1rem; */
    background-color: #fff;
    min-height:15vh;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    /* align-items: stretch; */
    border-color:#ffd127;
    border-style:solid;
    border-width: 0px 0px 1px 0px;
`;

function Header(props) {
    const { show } = props;

    const headerTransition = useTransition(show, {
        from: { y: -50, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -50, opacity: 0 },
        config: config.tight,
    })

    return (headerTransition((style, show) => show &&
        <Container style={style}>
            <TitleLink to="/">Quentin GARCIA</TitleLink>
            <HeaderLink to="/">CV</HeaderLink>
            <HeaderLink to="/projects">Projects</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
        </Container >)
    )
}

export default Header
