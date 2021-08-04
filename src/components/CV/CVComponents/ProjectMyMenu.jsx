import React from 'react'
import styled from 'styled-components'
import CreatorImage from './Images/meal-creator.png'
import ListImage from './Images/meal-list.png'
import PlannerImage from './Images/menu-planner.png'
import AuthImage from './Images/menu-auth.png'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    margin-left: 5vw;
    margin-right: 5vw;
`;

const ImageComponent = styled.img`

    width: 40vw;
    @media (max-width: 768px) {
        width: 80vw;
    }
    margin: 1rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    ${props => props.reverse ? "flex-direction:row-reverse;" : ""}
    
`;

const TextArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    /* flex-flow: row-reverse wrap; */
    font-size:1rem;
    font-size:1.5rem;
    @media (max-width: 768px) {
        font-size:1rem;
    }

    width: 40vw;
    @media (max-width: 768px) {
        width: 80vw;
    }
`;

function ProjectMyMenu() {
    return (
        <Container>
            <InfoContainer >
                <TextArea>
                    <p>
                        Mes menus est une application développée en React js afin de planifier simplement et rapidement les menus de la semaine.
                    </p>
                    <p>
                        L'accès à l'application se fait via un compte google afin d'en faciliter l'accès.
                    </p>
                </TextArea>
                <ImageComponent src={AuthImage} alt="Page de connexion de l'application" />
            </InfoContainer>
            <InfoContainer reverse>
                <TextArea>
                    <p>
                        L'application permet dans un premier temps la création des différents plats pouvant par la suite être utilisés afin de constituer les menus par la suite. <br />
                    </p>
                    <p>
                        Un plat étant représenté par son nom, ses ingrédients ainsi que sa recette.
                    </p>
                </TextArea>
                <ImageComponent src={CreatorImage} alt="Formulaire de création d'un plat" />
            </InfoContainer>
            <InfoContainer >
                <TextArea>
                    <p>
                        Une fois les différents plats créés, il est possible de les consulter individuelement et de les modifier à souhait.
                    </p>
                </TextArea>
                <ImageComponent src={ListImage} alt="Liste des différents plats créés, représentés par une image" />
            </InfoContainer>
            <InfoContainer reverse>
                <TextArea>
                    <p>
                        Ensuite, il ne reste plus qu'à constituer les différents menus en glissant pour chaque jour de la semaine les différents plats souhaités.<br />
                    </p>
                    <p>
                        Les menus étant enregistrés automatiquement.
                    </p>
                </TextArea>
                <ImageComponent src={PlannerImage} alt="Interface de planification des menus" />
            </InfoContainer>

        </Container>
    )
}

export default ProjectMyMenu
