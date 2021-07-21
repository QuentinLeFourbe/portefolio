import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import ExpCard from '../CV/ExpCard';
import Presentation from '../CV/Presentation';


const Container = styled(animated.div)`
    grid-area: main;
    margin:0;
    /* display: grid;
    grid-template-columns: 1fr 5vw 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "left middle right"; */
`;

function Main() {
    const springStyle = useSpring(
        {
            from: {
                opacity: 0,
            },
            opacity: 1,
            config: config.tight,
        });

    return (
        <Container style={springStyle}>
            <Presentation/>
            <ExpCard
                date="Décembre 2020"
                title="Ingénieur d'étude conception"
                company="CS Group"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Application destinée à la gestion de connexion de systèmes tactiques",
                    "Rédaction des exigences systèmes",
                    "Analyse du besoin",
                ]}
            />

            <ExpCard
                date="Août 2019 - Décembre 2020"
                title="Développeur simulation C# WPF"
                company="Diginext CS Group"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Application de simulation pour le commandement, destinée à l’armée de terre",
                    " Développement C# sur client lourd",
                    "Architecture modulaire sous forme de plugins",
                    "Analyse et conception",
                    "Rédactions de spécifications fonctionnels",
                    "Travail au sein d’une équipe de 20 personnes"
                ]}
            />

            <ExpCard
                date="Septembre 2018 – Février 2019"
                title="Consultant indépendant Unity3D VR"
                company="Faurecia "
                localisation="Seloncourt"
                detailsList={[
                    "Application de simulation de chaîne de production en réalité virtuelle",
                    "Projet R&D en collaboration avec le CEA de Saclay",
                    "Leader développement Unity3D",
                    "Recueil des besoins métiers",
                    "Organisation des workshops avec l’équipe projet",
                    "Présentation et démonstration du produit dans différents salons internes à Faurecia en France et à l’étranger",
                ]}
            />

            <ExpCard
                date="Avril – Septembre 2018"
                title="Stage Unity3D VR"
                company="Faurecia"
                localisation="Seloncourt"
                detailsList={[
                    "Application de simulation de chaîne de production en réalité virtuelle",
                    "Reprise et compréhension du code de l’application déjà existante",
                    "Développement de nouvelles fonctionnalités en accord avec les retours utilisateurs",
                    "Rédaction des spécifications fonctionnelles pour la phase 2 de l’application",
                ]}
            />

            <ExpCard
                date="Avril – Septembre 2017"
                title="Stage développement ASP.net MVC, Business Intelligence"
                company="Rimeo"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Accompagnement à la mise en production d’une application de collecte de données auprès de collectivités territoriales.",
                    "Suivi de la campagne de collecte et mise en place de service BI pour le client.",
                ]}
            />
        </Container>
    )
}

export default Main
