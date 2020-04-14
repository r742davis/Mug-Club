import React from "react";
import classes from "../css/Modals.module.css";
import styles from "../css/BeersList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
const actions = { openModal, closeModal };
const uniqid = require("uniqid");

function BeerList(props) {
  const [checked, setChecked] = React.useState([-1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const checkForIcon = (beer) => {
    if (checked.indexOf(beer) !== -1 && !beer.finished) {
      return (
        <span className={styles.CheckIcon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      );
    } else {
      return null;
    }
  };

  const mappedBeers = props.beers.map((beer) => {
    return (
      <li
        key={uniqid()}
        onClick={handleToggle(beer)}
        className={
          beer.finished 
          ? `${styles.Item} ${styles.Completed}` 
          : styles.Item
        }
      >
        <img
          className={styles.Avatar}
          alt={`${beer.brewery}`}
          src={`${beer.url}`}
        />
        <div className={styles.NameContainer}>
          <h1>{`${beer.brewery}`}</h1>
          <h2>{`${beer.name}`}</h2>
        </div>
        <div>
          {checkForIcon(beer)}
          {beer.finished && (
            <span className={styles.CheckIcon}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
          )}
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.ListContainer}>{mappedBeers}</ul>
      <div className={classes.ButtonContainer}>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => props.handleSubmit(e, checked)}
          className={classes.EditButton}
        />
        <input
          type="submit"
          value="Cancel"
          onClick={() => props.closeModal()}
          className={classes.CancelButton}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(BeerList);
