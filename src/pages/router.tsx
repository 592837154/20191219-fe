import React from 'react';
import {HashRouter, Route, Switch,useHistory } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';


const BasicRoute = () => (
    <HashRouter  > 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;