import React from 'react';
import HomePage from "../pages/homePage";
import SearchPage from "../pages/searchPage";
import BeersPage from "../pages/beersPage";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = props => {
  return (
    <>
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/searchCustomers">
            <SearchPage />
          </Route>
          <Route path="/beersList">
            <BeersPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default Routing;