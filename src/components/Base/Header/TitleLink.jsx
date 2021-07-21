import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useTransition, useTrail } from 'react-spring'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../AppContext';

const Container = styled(Link)`
    font-family: "Times New Roman", Times, serif;
    font-size: 6rem;
    margin: 1rem;
    margin-right: 5vw;
    text-decoration: none;
    font-weight:bold;
    color:black;
`;

function TitleLink(props) {
    const { to, children } = props;
    const { dataDispatch } = useContext(AppContext);

    const activateLoading = () => {
        dataDispatch({ type: 'APP_LOADING' });
    }

    return (
        <Container
            onClick={activateLoading}
            to={to}
        >
            {children}
        </Container>
    )
}

export default TitleLink
