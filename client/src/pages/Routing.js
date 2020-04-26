import React from "react";
import HomePage from "./homePage";
import SearchPage from "./searchPage";
import BeersPage from "./beersPage";
import AccountPage from "./accountPage";
import NavBar from "../components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = ({ auth }) => ({
  auth: auth,
  isAuthenticated: auth.isAuthenticated,
});

const Routing = (props) => {
  const urlName = "";
  const { token, isAuthenticated } = props.auth;

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
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default connect(mapStateToProps)(Routing);