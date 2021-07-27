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
    border-top: solid 1px #18534F;
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

const MailLink = styled(animated.a)`
    font-family: "Times New Roman", Times, serif;
    color: white;
    margin: 1rem;
    font-size: 3rem;
    text-decoration: none;
`;

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const springProps = useSpring({
        from: {
            y: 100,
            opacity: 0,
        },
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    });

    const hoverSpring = useSpring({
        from: {
            scale: 1,
        },
        backgroundColor: isHovered ? "#fff" : '#18534F',
        color: isHovered ? '#18534F' : "#ECF8F6",
        scaleX: isHovered ? 1.5 : 1,
    })

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    const onMouseEnter = () => {
        setIsHovered(true);
    }

    const onMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <VisiblitySensor onChange={onChangeVisibility} partialVisibility>
            <Container style={{
                backgroundColor: hoverSpring.backgroundColor
            }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <AnimatedContent style={springProps}>
                    <MailLink 
                    href="mailto:quentingarcia40@gmail.com"
                    style={hoverSpring}
                    >
                        Contactez-moi !
                        </MailLink>
                </AnimatedContent>
            </Container>
        </VisiblitySensor>
    )
}



export default Footer
