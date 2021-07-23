import React, { useState } from 'react'
import styled from 'styled-components'
import DateRangeIcon from '@material-ui/icons/DateRange';
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

const DateContainer = styled.div`
    display:flex;
    align-items: center;
    font-size: 1rem;
    ${props => props.rightSide ? 'margin-right: 5vw;' : 'margin-left: 5vw;'}
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-bottom:0.5rem;
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

function ExpTitle(props) {
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
            <DateContainer rightSide={rightSide}>
                <DateRangeIcon style={{ margin: "0 1rem 0 1rem" }} />
                {date}
            </DateContainer>

            <TitleContainer rightSide={rightSide} onClick={() => setExpanded(!isExpanded)}>
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

export default ExpTitle
