import React from "react";
import classes from "./SingleBeer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const singleBeer = ({
  beerDetails,
  complete,
  checked,
  unchecked,
}) => {
  const listClasses = [classes.SingleBeer];
  if (beerDetails.finished) {
    listClasses.push(classes.Completed);
  }

  const checkForIcon = (beer) => {
    if (
      (checked.indexOf(beer) !== -1 && !beerDetails.finished) ||
      (beerDetails.finished && unchecked.indexOf(beer) !== -1) ||
      beerDetails.finished
    ) {
      return (
        <span className={classes.CheckIcon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      );
    }
  };

  let beerImage = (
    <img
      className={classes.SingleBeerPicture}
      alt={`${beerDetails.brewery}`}
      src={`${beerDetails.url}`}
    />
  );

  let beerName = (
    <div className={classes.SingleBeerName}>
      <h1>{`${beerDetails.brewery}`}</h1>
      <h2>{`${beerDetails.name}`}</h2>
    </div>
  );

  return (
    <li
      key={beerDetails.name}
      onClick={complete}
      className={listClasses.join(" ")}
    >
      {beerImage}
      {beerName}
      <div>{checkForIcon(beerDetails)}</div>
    </li>
  );
};

export default singleBeer;
