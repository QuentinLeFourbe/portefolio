import React, { useState } from 'react'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor'

const TitleRow = styled(animated.div)`
    display: flex;
    flex-flow: column nowrap;
    align-items:center;
    margin-top: 10vh;
    margin-bottom: 10vh;
`;

const Title = styled(animated.div)`
    font-size: 4rem;
    padding-bottom: 8px;
`;

const TitleUnderline = styled(animated.div)`
    width: 600px;
    border-bottom: solid black 1px;
`;

function TitleSeparator(props) {
    const { title } = props;
    const [isVisible, setIsVisible] = useState(true);

    const titleSpring = useSpring({
        from: { x: -100, opacity: 0 },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    });

    const underlineSpring = useSpring({
        from: { opacity: 0 },
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: 800,
    });

    const onChangeVisibility = (isVisible) => {
        setIsVisible(isVisible);
    }

    return (
        <ReactVisibilitySensor onChange={onChangeVisibility}>
            <TitleRow>
                <Title style={titleSpring}>{title}</Title>
                <TitleUnderline style={underlineSpring}/>
            </TitleRow>
        </ReactVisibilitySensor>
    )
}

export default TitleSeparator