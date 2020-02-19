import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home/HomeContainer";
import Search from "Routes/Search/SearchContainer";
import TV from "Routes/TV/TVContainer";
import Detail from "Routes/Detail/DetailContainer"



export default () => (
    <Router>
    <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/tv" exact component={TV} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </>
    </Router>
);