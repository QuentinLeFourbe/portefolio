import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor'
import TitleSeparator from './TitleSeparator';

const Container = styled(animated.div)`
    margin: 5vh 10vw 20vh 10vw;
    display:flex;
    flex-flow: row wrap;
    min-width: 300px;
    justify-content: space-around;
`;

const Title = styled(animated.div)`
    display: flex;
    justify-content:center;
    border-bottom: solid black 1px;
    font-size: 2rem;
    width: 400px;
    padding-bottom: 8px;
`;

const TitleRow = styled(animated.div)`
    display: flex;
    justify-content: center;
    margin-top: 15vh;
`;

const SkillTypeCol = styled.div`
    margin: 0 1rem 0 1rem;
    display:flex;
    flex-flow: column wrap;
    align-items:center;
`;

const TypeTitle = styled.div`
    font-size: 1.5rem;
    margin: 1rem;
`;

const SkillItem = styled.div`

`;

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    const springEffect = useSpring({
        from: { x: -100, opacity: 0 },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: 1000,
    });

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }


    return (
        <>
            <TitleSeparator title="Compétences" />

            <ReactVisibilitySensor onChange={onChangeVisibility} partialVisibility>
                <div>
                    <Container style={springEffect}>
                        <SkillTypeCol>
                            <TypeTitle>
                                Langues
                            </TypeTitle>
                            <SkillItem>Français: natif</SkillItem>
                            <SkillItem>Anglais: courant</SkillItem>
                        </SkillTypeCol>
                        <SkillTypeCol>
                            <TypeTitle>
                                Programmation
                            </TypeTitle>
                            <SkillItem>React js</SkillItem>
                            <SkillItem>Node js</SkillItem>
                            <SkillItem>HTML</SkillItem>
                            <SkillItem>CSS</SkillItem>
                            <SkillItem>Javascript</SkillItem>
                        </SkillTypeCol>
                        <SkillTypeCol>
                            <TypeTitle>
                                Base de donnée
                            </TypeTitle>
                            <SkillItem>T-SQL</SkillItem>
                            <SkillItem>MongoDB</SkillItem>
                        </SkillTypeCol>
                        <SkillTypeCol>
                            <TypeTitle>
                                Versionning
                            </TypeTitle>
                            <SkillItem>Git</SkillItem>
                            <SkillItem>SVN</SkillItem>
                            <SkillItem>GitKraken</SkillItem>
                        </SkillTypeCol>
                    </Container>
                </div>
            </ReactVisibilitySensor>
        </>
    )
}

export default Skills
