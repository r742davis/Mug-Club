import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
import { login } from "../actions/authActions";
import PropTypes from "prop-types";
import classes from "./styles/Login.module.css";
import Register from "./Register";
import Log from "./Log";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faBeer } from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
  state = {
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

    //If authenticated, reroute to search page __NEEDS WORK__
    // if (this.state.modalOpen) {
    //   if (isAuthenticated) {
    //     this.toggleRoute();
    //   }
    // }
  }

  // toggleRoute = () => {
  //   this.props.clearErrors();
  // };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    //Attempting to log in
    this.props.login(user);
  };

  toggleLogin = () => {
    this.props.clearErrors();
    this.setState({
      toggleLogin: !this.state.toggleLogin
    })
  };

  toggleReg = () => {
    this.props.clearErrors();
    this.setState({
      toggleReg: !this.state.toggleReg
    })
  };

  render() {
    let buttons;
    if (!this.state.toggleLogin && !this.state.toggleReg) {
      buttons = <div className={classes.ButtonContainer}>
      <button 
        name="login" 
        onClick={() => this.toggleLogin()}
        className={classes.Button}>
            Login
        </button>
        <button 
          name="register" 
          onClick={() => this.toggleReg()} 
          className={classes.Button}>
          Register
        </button>
      </div>
      
    };

    return (
      <div>
        <section className={classes.Container}>
          <h1 className={classes.Title}>Mug Club 🍻
          </h1>
          { buttons }
          {
            this.state.toggleLogin &&
            <form onSubmit={this.onSubmit} method="post">
            <div className={classes.LoginContainer}>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="username"
                  className={classes.Input}
                  onChange={this.onChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="username" className={classes.Label}>
                  Username
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
              <button type="submit" name="login" className={classes.Button}>
                Login
              </button>
              <div 
                onClick={() => this.toggleLogin()}
                className={classes.Back}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </div>
            </div>
            </form>
          }
          {
            this.state.toggleReg &&
            <form>
            <div className={classes.LoginContainer}>
              <div className={classes.Group}>
                <input type="text" name="name" className={classes.Input} required />
                <span className={classes.Bar}></span>
                <label htmlFor="name" className={classes.Label}>
                  Name
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="username"
                  className={classes.Input}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="username" className={classes.Label}>
                  Username
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="password"
                  name="password"
                  className={classes.Input}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="password" className={classes.Label}>
                  Password
                </label>
              </div>
              <button type="submit" name="register" className={classes.Button}>
                Register
              </button>
              <div 
                onClick={() => this.toggleReg()}
                className={classes.Back}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </div>
            </div>
            </form>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
