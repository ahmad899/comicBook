import React from 'react'
import styled from 'styled-components';
import Logo from '../componenets/Header/Logo';
import Header from '../componenets/Header/Header';
import Home from '../pages/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';



const Div = styled.div`
    display:flex;
    flex-flow:column wrap;
    width:95%;
    justify-content:space-evenly;
    margin:30px auto;
`;


function Container() {
    return (
        <div>
            <Logo />
            <Div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}>
                        <Redirect to='/year' />
                    </Route>
                    <Route exact path='/:id' component={Home} />
                </Switch>
            </Div>
        </div>
    )
}

export default Container
