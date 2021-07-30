import React, { useState } from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useTransition, useSpring, animated, config } from 'react-spring';

const TitleContainer = styled.div`
    width: 70vw;
    min-width:fit-content;

    display: flex;
    ${props => props.rightSide ? 'flex-flow: row-reverse nowrap;' : 'flex-flow: row nowrap;'};
    align-items: center;
    justify-content: space-between;

    background-color: #fff4cd;

    padding: 1rem;
    ${props => props.rightSide ? 'padding-right: 5vw;' : 'padding-left: 5vw;'}
    font-size: 3rem;
    cursor: pointer;
`;

const ExpandIcon = styled(animated(AddIcon))`
    margin: "0 1rem 0 1rem";
`;

// const ReduceIcon = styled(animated(RemoveIcon))`
const ReduceIcon = styled(animated(RemoveIcon))`
    margin: "0 1rem 0 1rem";

`;

const Container = styled(animated.div)`

`;

function ProjectTitle(props) {
    const { date, title, rightSide, isExpanded, setExpanded } = props;

    const spring = useSpring({
        from: {
            x: rightSide ? 100 : -100,
            opacity: 0,
        },
        x:0,
        opacity: 1,
        config: config.molasses
    })

    const expandTransition = useTransition(isExpanded, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        // leave: { opacity: 0 },
        config: { tension: 280, friction: 200 },
    })

    return (
        <Container style={spring}>
            <TitleContainer onClick={() => setExpanded(!isExpanded)}>
                {title}
                {
                    expandTransition((styles, isExpanded) =>
                        (isExpanded ? <ReduceIcon style={styles} fontSize='inherit' /> : <ExpandIcon style={styles} fontSize='inherit' />)
                    )
                }
            </TitleContainer>
        </Container>
    )
}

export default ProjectTitle
