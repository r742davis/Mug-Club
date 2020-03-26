import React, { Component } from "react";
import classes from "./styles/Login.module.css";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
    toggleReg: false
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //-- Submit for Login and Register
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    //Attempt to log in
    this.props.login(user);
  };

  onSubmitReg = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };
    //Attempt to register
    this.props.register(newUser);
  };

  //-- Toggles for Login and Register
  toggleLogin = () => {
    this.props.clearErrors();
    this.setState({
      toggleLogin: !this.state.toggleLogin
    });
  };
  toggleReg = () => {
    this.props.clearErrors();
    this.setState({
      toggleReg: !this.state.toggleReg
    });
  };

  render() {
    let buttons;
    if (!this.state.toggleLogin && !this.state.toggleReg) {
      buttons = (
        <div className={classes.ButtonContainer}>
          <button
            name="login"
            onClick={() => this.toggleLogin()}
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
      );
    }

    let error = (
      <div>
        <h3 className={classes.Error}>{this.state.message}</h3>
      </div>
    );

    return (
      <div>
        {this.props.isAuthenticated ? <Redirect to="/searchCustomers" /> : null}
        {!this.props.isAuthenticated && (
          <section className={classes.Container}>
            <h1 className={classes.Title}>Mug Club 🍻</h1>
            {buttons}
            {this.state.toggleLogin && (
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
                    <span className={classes.Bar}></span>
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
                    <span className={classes.Bar}></span>
                    <label htmlFor="password" className={classes.Label}>
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    name="login"
                    className={`${classes.Button} ${classes.bounce}`}
                  >
                    Login
                  </button>
                  <div
                    onClick={() => this.toggleLogin()}
                    className={classes.Back}
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </div>
                </div>
              </form>
            )}
            {this.state.toggleReg && (
              <form onSubmit={e => this.onSubmitReg(e)}>
                <div className={classes.LoginContainer}>
                  {this.state.message && error}
                  <div className={classes.Group}>
                    <input
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      className={classes.Input}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="name" className={classes.Label}>
                      Name
                    </label>
                  </div>
                  <div className={classes.Group}>
                    <input
                      type="email"
                      name="email"
                      onChange={this.onChange}
                      className={classes.Input}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="email" className={classes.Label}>
                      Email
                    </label>
                  </div>
                  <div className={classes.Group}>
                    <input
                      type="password"
                      name="password"
                      onChange={this.onChange}
                      className={classes.Input}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="password" className={classes.Label}>
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    name="register"
                    className={`${classes.Button} ${classes.bounce}`}
                  >
                    Register
                  </button>
                  <div
                    onClick={() => this.toggleReg()}
                    className={classes.Back}
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </div>
                </div>
              </form>
            )}
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, actions)(
  Login
);
