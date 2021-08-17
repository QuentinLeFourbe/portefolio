import React from 'react'
import styled from 'styled-components'
import CssIcon from './images/icon_css.svg'
import Es6Icon from './images/icon_es6.svg'
import GitIcon from './images/icon_git.svg'
import HtmlIcon from './images/icon_html.svg'
import MongodbIcon from './images/icon_mongodb.svg'
import ReactIcon from './images/icon_react.svg'
import NodeIcon from './images/icon_node.svg'
import JsIcon from './images/icon_js.svg'
import SkillCard from './SkillCard'

const GridDiv = styled.div`
    display: grid;
    margin-left: 10vw;
    margin-right: 10vw;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    /* This is better for small screens, once min() is better supported */
    /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
    /* This is the standardized property now, but has slightly less support */
    /* margin: 1rem; */
    row-gap: 10vh;
    /* align-items: center; */
    justify-items: center;

    @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
`;


function SkillsGrid() {
    return (
        <GridDiv>
            <SkillCard src={ReactIcon} alt="React js icon">
                React.js
            </SkillCard>
            <SkillCard src={NodeIcon} alt="Node js icon">
                Node.js
            </SkillCard>
            <SkillCard src={MongodbIcon} alt="MongoDB icon" >
                MongoDB
            </SkillCard>
            <SkillCard src={HtmlIcon} alt="Html icon" >
                HTML
            </SkillCard>
            <SkillCard src={CssIcon} alt="CSS icon" >
                CSS
            </SkillCard>
            <SkillCard src={JsIcon} alt="Javascript icon" >
                Javascript ES6
            </SkillCard>
        </GridDiv>
    )
}

export default SkillsGrid
