import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring'
import VisiblitySensor from 'react-visibility-sensor';

const Container = styled(animated.footer)`
    grid-area: footer;
    min-height: 20vh;
    background-color: #18534F;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`;

const AnimatedContent = styled(animated.div)`
    
`;

const FooterLink = styled(Link)`
    font-family: "Times New Roman", Times, serif;
    color: white;
    font-size: 3rem;
    margin: 1rem;
    text-decoration: none;
`;

const MailLink = styled.a`
    font-family: "Times New Roman", Times, serif;
    color: white;
    margin: 1rem;
    font-size: 3rem;
    text-decoration: none;
`;

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const springProps = useSpring({
        from: {
            y: 100,
            opacity: 0,
        },
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    });

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    return (
        <VisiblitySensor onChange={onChangeVisibility} partialVisibility>
            <Container >
                <AnimatedContent style={springProps}>
                    <MailLink href="mailto:email@example.com">Contactez-moi !</MailLink>
                </AnimatedContent>
            </Container>
        </VisiblitySensor>
    )
}



export default Footer
