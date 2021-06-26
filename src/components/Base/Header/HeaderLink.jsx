import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useTransition, useTrail } from 'react-spring'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../AppContext';

const Container = styled(animated(Link))`
    padding: 1rem;
    text-decoration: none;
    color:black;
`;

function HeaderLink(props) {
    const { to, children } = props;
    const { dataDispatch } = useContext(AppContext);
    const [isHover, setIsHover] = useState(false);
    const [isTriggered, setIsTriggered] = useState(false);
    const timing = 50;
    const springStyle = useSpring({
        from: {
            y: 0,
        },
        y: isHover ? -3 : 0,
        color: isTriggered ? '#ff6f61' : 'black',
        config: {
            tension: 300,
            friction: 10,
        },
    })

    const hover = () => {
        setIsHover(true)
        setIsTriggered(true)
    }
    const notHover = () => {
        setIsTriggered(false)
    }

    const activateLoading = () => {
        dataDispatch({ type: 'APP_LOADING' });
    }

    useEffect(() => {
        if (!true) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsHover(false);
        }, timing);
        return () => {
            window.clearTimeout(timeoutId);
        };

    }, [isHover, timing]);


    return (
        <Container
            to={to}
            onMouseEnter={hover}
            onMouseLeave={notHover}
            onClick={activateLoading}
            style={springStyle}
        >
            {children}
        </Container>
    )
}

export default HeaderLink
