import React from 'react';
import './Home.module.css';

const home = (props) => {
  return (
    <>
    <body>
      <nav classNameName="home__nav">
        <li><a href="#">Database</a></li>
        <li><a href="#">Beer List</a></li>
        <li><a href="#">Add Customer</a></li>
        <li><a href="#">Add Employee</a></li>

        {/*<li><button className="nav__login-button" onClick={() => {
          this.setState({ active: true })
        }}>Log In</button></li>*/}
      </nav>
      <main className="home__main">
        <section className="main__section">
          <div className="section__title">
            <h1>Mug Club</h1>
          </div>
          <div className="section__search">
            <input type="text" name="main search" placeholder="SEARCH - Name or ID" />
          </div>
        </section>

        {props.active ?
          <section className="home__login-modal">

            <form className="login-modal__form-container" action="#" method="post">
              <div className="form__close">
                <button onclick="document.querySelector('.home__login-modal').classNameList.remove('active')">X</button>
              </div>

              <div className="form__avatar-container">
                <img className="avatar-container__avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" alt="avatar image" />
              </div>

              <div className="form__input-container">
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="Enter Username" />
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Enter Password" />
                <button type="submit" name="login">SUBMIT</button>
              </div>
            </form>
          </section>
          : null}

      </main>
    </body>
    </>
  )
};

export default home;
