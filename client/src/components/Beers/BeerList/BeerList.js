import React from "react";
import classes from "./BeerList.module.css";
import SingleBeer from "../SingleBeer/SingleBeer";
import Button from "../../UI/Button/Button";

import { connect } from "react-redux";
import { openModal, closeModal } from "../../../store/actions/index";

const BeerList = (props) => {
  const [checked, setChecked] = React.useState([-1]);
  const [unchecked, setUnchecked] = React.useState([-1]);

  const handleToggle = (beer) => () => {
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
  };

  const mappedBeers = props.beers.map((beer) => (
    <SingleBeer
      beerDetails={beer}
      checked={checked}
      complete={handleToggle(beer)}
      unchecked={unchecked}
    />
  ));

  return (
    <>
      <ul className={classes.ListContainer}>{mappedBeers}</ul>
      <div className={classes.Buttons}>
        <Button
          buttonType="Submit"
          clicked={(e) => props.handleSubmit(e, checked)}
        >
          Submit
        </Button>
        <Button buttonType="Cancel" clicked={() => props.closeModal()}>
          Cancel
        </Button>
      </div>
    </>
  );
};

const mapDispatchToProps = { openModal, closeModal };

export default connect(null, mapDispatchToProps)(BeerList);
