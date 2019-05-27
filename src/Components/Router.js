import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail"



export default () => (
    <Router>
    <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/tv" exact component={TV} />
            <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
            <Route path="/detail" exact component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </>
    </Router>
);