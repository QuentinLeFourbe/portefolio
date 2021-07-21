import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, animated, config } from 'react-spring'
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';
import ExpTitle from './CVComponents/ExpTitle';
import VisiblitySensor from 'react-visibility-sensor';

const Container = styled(animated.div)`
    display:flex;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    background-color: #fff;
    /* background-color: #226D68; */
    padding-bottom: 5vh;
    padding-top: 5vh;

    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    justify-content:space-between;
`;


const ExpContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    min-width: fit-content;
    ${props => props.rightSide ? 'align-items: flex-end;' : 'align-items: flex-start;'}
`;

const InfoContainer = styled(animated.div)`
    display:flex;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    justify-content:space-between;

`;


const CompanyContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    margin:  0 2rem 0 2rem;
    /* align-items:center; */
    ${props => props.rightSide ? 'margin-right: 5vw;' : 'margin-left: 5vw;'}

`;


const CompanyItem = styled.div`
    font-size: 2rem;
    display:flex;
    align-items: center;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-top: 1rem;
`;

const LocalisationContainer = styled.div`
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-top: 1rem;
`;

const DetailsListItem = styled.ul`
    list-style: none outside none;
    ${props => !props.rightSide ? '' : 'text-align: right;'}
    padding:0;
    ${props => props.rightSide ? 'padding-right: 5vw;' : 'padding-left: 5vw;'}
    margin: 0.5rem;
    

`;

const DetailListItem = styled.li`
    margin-bottom:1rem;
`;

const DetailButton = styled.button`
    background-color:transparent;
    border:none;
    padding: 0.5rem;
    margin: 0.5rem 0.5rem 0 0.5rem;
    border: 1px solid #18534f6f;
    border-radius: 10px;
    &:hover{
        color:#226D68;
        background-color:#ECF8F6;
    }

    &:active{
        color:#226D68;
    }
`;



const ButtonsContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    /* border-bottom: 1px solid #18534F; */
`;

function ExpCard(props) {
    const { date, title, company, localisation, detailsList, rightSide } = props
    const [isExpanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const spring = useSpring({
        from: {
            x: rightSide ? 100 : -100,
            opacity: 0,
        },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    })

    const expandTransition = useTransition(isExpanded, {
        from: { height: 0, opacity: 0 },
        enter: [
            { height: 200 },
            { opacity: 1 },
        ],
        leave: () => async (next, cancel) => {
            await next({ opacity: 0 })
            await next({ height: 0 })
        },
        config: config.tight,
    })

    const onChangeVisibility = (isVisible) => {
        setIsVisible(isVisible);
        console.log("visible: " + isVisible)
    }

    return (
        <VisiblitySensor onChange={onChangeVisibility} offset={{top:-100, bottom:-100}}>
            <div>
                <Container style={spring} rightSide={rightSide}>
                    <ExpContainer rightSide={rightSide}>
                        <ExpTitle
                            date={date}
                            title={title}
                            rightSide={rightSide}
                            isExpanded={isExpanded}
                            setExpanded={setExpanded}
                        />
                        {expandTransition((styles, isExpanded) => (
                            isExpanded ?
                                <InfoContainer style={styles} rightSide={rightSide}>
                                    <CompanyContainer rightSide={rightSide}>
                                        <CompanyItem rightSide={rightSide}>
                                            <BusinessIcon style={{ margin: "0 1rem 0 1rem" }} />
                                            {company}
                                        </CompanyItem>

                                        <LocalisationContainer rightSide={rightSide}>
                                            <RoomIcon style={{ margin: "0 1rem 0 1rem" }} />
                                            {localisation}
                                        </LocalisationContainer>
                                    </CompanyContainer>

                                    <DetailsListItem rightSide={rightSide}>
                                        {
                                            detailsList.map((x, index) => <DetailListItem key={index}>{x}</DetailListItem>)
                                        }
                                    </DetailsListItem>
                                </InfoContainer>
                                :
                                ""
                        ))}

                    </ExpContainer>
                </Container>
            </div>
        </VisiblitySensor>
    )
}

export default ExpCard
