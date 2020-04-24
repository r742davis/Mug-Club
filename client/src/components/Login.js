import React, { Component } from "react";
import classes from "../css/Login.module.css";
import Register from "./Register";
import { Redirect } from "react-router-dom";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { login, register } from "../actions/authActions";
const actions = { login, register, clearErrors };

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    message: null,
    toggleLogin: false,
    toggleReg: false,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //-- Submit for Login and Register
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    //Attempt to log in
    this.props.login(user);
  };

  onSubmitReg = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    //Attempt to register
    this.props.register(newUser);
  };

  //-- Toggles for Login and Register
  toggleLogin = () => {
    this.props.clearErrors();
    this.setState({
      toggleLogin: !this.state.toggleLogin,
    });
  };
  toggleReg = () => {
    this.props.clearErrors();
    this.setState({
      toggleReg: !this.state.toggleReg,
    });
  };

  render() {
    const { toggleLogin, toggleReg } = this.state;
    const { isAuthenticated } = this.props.auth;

    let error = (
      <div>
        <h3 className={classes.Error}>{this.state.message}</h3>
      </div>
    );

    return (
      <div>
        {isAuthenticated && <Redirect to="/search-customers" />}
        {!isAuthenticated && (
          <section className={classes.Container}>
            <h1 className={classes.Title}>
              <h2>Welcome to</h2>Mug Club 🍻
            </h1>
            {!toggleReg && (
              <form onSubmit={this.onSubmit}>
                <div className={classes.LoginContainer}>
                  {this.state.message && error}
                  <div className={classes.Group}>
                    <input
                      type="text"
                      name="email"
                      className={classes.Input}
                      onChange={this.onChange}
                      required
                    />
                    <label htmlFor="email" className={classes.Label}>
                      Email
                    </label>
                  </div>
                  <div className={classes.Group}>
                    <input
                      type="password"
                      name="password"
                      className={classes.Input}
                      onChange={this.onChange}
                      required
                    />
                    <label htmlFor="password" className={classes.Label}>
                      Password
                    </label>
                  </div>
                  <div className={classes.ButtonContainer}>
                    <button
                      type="submit"
                      name="login"
                      className={classes.Button}
                    >
                      Login
                    </button>
                    <button
                      name="register"
                      onClick={() => this.toggleReg()}
                      className={classes.Button}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            )}

            {this.state.toggleReg && (
              <Register
                onSubmit={this.onSubmitReg}
                toggleReg={this.toggleReg}
                error={this.state.message}
                onChange={this.onChange}
              />
            )}
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, actions)(Login);
