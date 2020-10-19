import React from "react";
import Home from "../Home/Home";
import Search from "../Search/Search";
import Beers from "../Beers/Beers";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

class Routing extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          {/* <Route path={"reset-password"} component={Auth} /> */}
          <Route path={"/search-customers"} component={Search} />
          <Route path={"/beers"} component={Beers} />
          <Route path={"/account"} component={Auth} />
          <Route path="/" component={Home} />
          <Redirect to="/"/>
        </Switch>
      );
    }

    return (
      <Router>
        <Layout>
        {routes}
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth: auth,
  isAuthenticated: auth.token !== null,
});

export default connect(mapStateToProps)(Routing);
