/*
    Render principal.
    Menu lateral y contenedor dinamico de contenidos
*/

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";
import styled from 'styled-components';
import MenuLateral from '../components/lateralMenu';
import MenuContainer from '../components/containerMenu';

import Home from '../views/Home';
import CalendarView from '../views/Calendar';
import AppsView from '../views/Apps';
import UserView from '../views/Users';
import ReportsView from '../views/Reports';
import GraphicsView from '../views/Graphics';
import MessagesView from '../views/Messages';
import SearchView from '../views/Search';
import SettingsView from '../views/Settings';

const WrapperDash = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: stretch;
    align-items: stretch;

    @media (max-width: 768px) {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: none;
        justify-items: stretch;
        align-items: stretch;
    }
`;

const WrapperContainer = styled.div`
    background-color: #E3E4E6;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    justify-items: stretch;
    align-items: stretch;

    @media (max-width: 768px) {
        padding: 0;
    }

`

const RoutesContainer = () => {
    return (
        <Router>
            <WrapperDash>
                <MenuLateral />
                <WrapperContainer>
                    <MenuContainer />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/calendar">
                            <CalendarView />
                        </Route>
                        <Route path="/apps">
                            <AppsView />
                        </Route>
                        <Route path="/users">
                            <UserView />
                        </Route>
                        <Route path="/reports">
                            <ReportsView />
                        </Route>
                        <Route path="/graphics">
                            <GraphicsView />
                        </Route>
                        <Route path="/search">
                            <SearchView />
                        </Route>
                        <Route path="/messages">
                            <MessagesView />
                        </Route>
                        <Route path="/settings">
                            <SettingsView />
                        </Route>
                    </Switch>
                </WrapperContainer>
            </WrapperDash>
        </Router> 
    );
};

export default RoutesContainer;