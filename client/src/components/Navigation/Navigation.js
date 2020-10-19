import React from "react";

const navigation = (props) => (
  <nav className={classes.Navbar}>
    <h1>
      MUG CLUB
      <span role="img" aria-label="mugs of beers">
        🍻
      </span>
    </h1>
    {mobile}
    <div className={classes.HamburgerContainer}>
      <Burger
        isOpen={this.props.navOpen}
        onClick={
          this.props.navOpen
            ? () => this.props.closeNav()
            : () => this.props.openNav()
        }
      />
    </div>
  </nav>
);

export default navigation;
