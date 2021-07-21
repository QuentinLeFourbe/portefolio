import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const Container = styled.div`
    margin: 1rem;
    width: 30vw;
    min-width: fit-content;
`;

const CompanyItem = styled.div`
 padding: 0 0.5rem 0.5rem 0;
 font-size: 3rem;
`;

const LocalisationItem = styled.div`
 padding: 0 0.5rem 0.5rem 0;
 font-size: 1.2rem;

`;
const DetailsListItem = styled.ul`
`;

const DetailListItem = styled.li`
`;

const FirstRow = styled.div`
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: space-between;
`;

function ExpDetails(props) {
    const { company, localisation, detailsList } = props;

    return (
        <Container>
            <FirstRow>
                <CompanyItem>{company}</CompanyItem>
                <LocalisationItem>{localisation}</LocalisationItem>
            </FirstRow>
            <DetailsListItem>
                {
                    detailsList.map(x => <DetailListItem>{x}</DetailListItem>)
                }
            </DetailsListItem>
        </Container>
    )
}

export default ExpDetails
