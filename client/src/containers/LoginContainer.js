import React, { Component } from "react";
import classes from "../css/LoginContainer.module.css";
import Register from "../components/Register";
import Login from "../components/Login";
import PasswordReset from "../components/PasswordReset";
import { Redirect } from "react-router-dom";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { login, register, sendReset } from "../actions/authActions";
const actions = {
  login,
  register,
  sendReset,
  clearErrors,
};
const mapStateToProps = ({ auth, error }) => ({
  auth: auth,
  error: error,
});

class LoginContainer extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    message: null,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for login/register error
      if (error.id === "LOGIN_FAIL" || error.id === "REGISTER_FAIL" ) {
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
    this.props.clearErrors();
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
    this.props.clearErrors();
  };

  onSubmitReset = (e) => {
    e.preventDefault();
    const { email } = this.state;
    this.props.sendReset(email);
    console.log(email);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { registerOpen, passwordResetOpen } = this.props.auth;

    return (
      <div>
        {isAuthenticated && <Redirect to="/search-customers" />}
        {!isAuthenticated && (
          <section className={classes.Container}>
            <div className={classes.Title}>
              <h2>Welcome to</h2>
              <h1>
                Mug Club 🍻
              </h1>
            </div>
            {!registerOpen && !passwordResetOpen && (
              <Login
                onSubmit={this.onSubmit}
                error={this.state.message}
                onChange={this.onChange}
              />
            )}

            {registerOpen && (
              <Register
                onSubmit={this.onSubmitReg}
                error={this.state.message}
                onChange={this.onChange}
              />
            )}

            {passwordResetOpen && (
              <PasswordReset 
                error={this.state.message}
                onChange={this.onChange}
                onSubmit={this.onSubmitReset}
              />
            )

            }
          </section>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(LoginContainer);
