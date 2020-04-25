import React from "react";
import classes from "../css/Modals.module.css";
import BeersList from "./BeersList";

// Redux Imports
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  beers: state.beers.beers,
});

const CustomerBeersModal = (props) => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Beers</h2>
          <BeersList beers={props.beers} />
          <button onClick={props.toggleModal}>Cancel</button>
        </div>
      </section>
    </>
  );
};

export default connect(mapStateToProps)(CustomerBeersModal);
