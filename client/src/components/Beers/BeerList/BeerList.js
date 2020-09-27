import React from "react";
import classes from "../../../css/Modals.module.css";
import styles from "../../../css/BeersList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Beer from "../Beer/Beer"

import { connect } from "react-redux";
import { openModal, closeModal } from "../../../store/actions/index";

const BeerList = (props) => {
  const [checked, setChecked] = React.useState([-1]);
  const [unchecked, setUnchecked] = React.useState([-1]);

  const handleToggle = (beer) => () => {
    console.log(beer)
    const currentIndex = checked.indexOf(beer);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(beer);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    if (beer.finished === true) {
      const currentIndex = unchecked.indexOf(beer);
      const newChecked = [...unchecked];
      if (currentIndex === -1) {
        newChecked.push(beer);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setUnchecked(newChecked);
    }
    console.log(unchecked);
  };

  const checkForIcon = (beer) => {
    if (
      (checked.indexOf(beer) !== -1 && !beer.finished) ||
      (beer.finished && unchecked.indexOf(beer) !== -1) || beer.finished 
      ) {
      return (
        <span className={styles.CheckIcon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      );
    }
  };

  React.useEffect(() => {
    console.log(checked, unchecked)
  }, [checked, unchecked])

  const mappedBeers = props.beers.map((beer) => (
    <Beer
      {...beer}
      styles={styles}
      checked={checked}
      complete={handleToggle(beer)}
      checkForIcon={checkForIcon(beer)}
    />
  ));

  return (
    <>
      <ul className={styles.ListContainer}>{mappedBeers}</ul>
      <div className={classes.ButtonContainer}>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => props.handleSubmit(e, checked, unchecked)}
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

const mapDispatchToProps = { openModal, closeModal };


export default connect(null, mapDispatchToProps)(BeerList);