import React from "react";
import HomePage from "./homePage";
import SearchPage from "./searchPage";
import BeersPage from "./beersPage";
import AccountPage from "./accountPage";
import NavBar from "../components/Navigation/NavBar/NavBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

const Routing = (props) => {
  const urlName = "";
  const { token, isAuthenticated, resetPassword } = props.auth;

  return (
    <>
      <Router>
        {!isAuthenticated && !token && (
          <Redirect to={`${urlName}/`} push={true} />
        )}
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
            <Route path={`${urlName}/account`}>
              <AccountPage />
            </Route>
            {/* <Route path={`${urlName}/resetPassword`}>
              <AccountPage />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth: auth,
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routing);
