import React from 'react';
import HomePage from "../pages/homePage";
import SearchPage from "../pages/searchPage";
import BeersPage from "../pages/beersPage";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = props => {
  const urlName = ""
  return (
    <>
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route exact path={`${urlName}/`}>
            <HomePage />
          </Route>
          <Route path={`${urlName}/search-customers`}>
            <SearchPage />
          </Route>
          <Route path={`${urlName}/beers-list`}>
            <BeersPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default Routing;