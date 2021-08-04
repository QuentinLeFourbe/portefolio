import React from 'react'
import ProjectCard from './CVComponents/ProjectCard'
import ProjectMyMenu from './CVComponents/ProjectMyMenu'

function Projets() {
    return (
        <>
            <ProjectCard title="Application de gestion des menus de la semaine: Mes petits menus">
                <ProjectMyMenu/>
            </ProjectCard>
        </>
    )
}

export default Projets
