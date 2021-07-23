import React, { useEffect, useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import LoadingComponent from './Loading/LoadingComponent';
import ScrollToTop from './ScrollToTop';
import { AppContext } from '../../AppContext';
import styled from 'styled-components'
import { useSpring, animated, config, useTransition } from 'react-spring'

const Container = styled.div`
    position:absolute;
    width: 100%;
    min-height:100vh;
    padding:0;
    margin:0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header"
    "main"
    "footer";
`;


function ContentFromRoute() {
    const { dataState } = useContext(AppContext);

    const transition = useTransition(dataState.isAppLoading, {
        from: { x: -100, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        leave: { x: 100, opacity: 0 },
    })

    return (
        <Router>
            <Container>
                {/* <Header  show={!showLoading} /> */}
                <Header show={true} />
                {
                    dataState.isAppLoading ?
                        <LoadingComponent />
                        :
                        (<>
                            <ScrollToTop />
                            <Switch>
                                <Route exact path="/">
                                    <Main />
                                </Route>

                                <Route exact path="/about">
                                    <About />
                                </Route>
                            </Switch>
                            <Footer />
                        </>)
                }
            </Container>
        </Router>
    )
}

export default ContentFromRoute
