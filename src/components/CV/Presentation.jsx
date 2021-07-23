import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor';

const Container = styled(animated.div)`
    margin: 5vh 10vw 10vh 10vw;
    display:flex;
    flex-flow: row wrap;
    width: 30vw;
    min-width: 300px;
`;

const Title = styled.div`
    padding: 1rem;
    font-size: 2rem;
`;

const TextPresentation = styled.div`
    padding: 1rem;
`;

function Presentation() {
    const [isVisible, setIsVisible] = useState(true);

    const springEffect = useSpring({
        from: { x: -100, opacity: 0 },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    });

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    return (
        <ReactVisibilitySensor onChange={onChangeVisibility} partialVisibility>
            <div>
                <Container style={springEffect}>
                    <Title>
                        Qui suis-je ?
                    </Title>

                    <TextPresentation>
                        Je m'appelle Quentin GARCIA, je suis un développeur passionné ayant un bagage technique varié.
                        Je me suis formé en React.js afin d'entrer dans le monde du Web par le biais d'une technologie passionnante et innovante.
                        <br /><br />
                        Avant cela, j'ai eu l'occasion de travailler dans du développement C# classique ou encore de la réalité virtuelle.
                        <br /><br />
                        Actuellement ingénieur d'étude conception, ou plutôt business analyst, je cherche à me réorienter vers le développement React js afin de relever de nouveaux défis.
                    </TextPresentation>
                </Container>

            </div>
        </ReactVisibilitySensor>
    )
}

export default Presentation
