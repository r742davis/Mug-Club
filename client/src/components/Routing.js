import React from "react";
import HomePage from "../pages/homePage";
import SearchPage from "../pages/searchPage";
import BeersPage from "../pages/beersPage";
import NavBar from "../components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

const Routing = (props) => {
  const urlName = "";
  const { token, isAuthenticated } = props.auth;

  return (
    <>
      <Router>
        {!isAuthenticated && !token && <Redirect to={`${urlName}/`} push={true} />}
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
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routing);
