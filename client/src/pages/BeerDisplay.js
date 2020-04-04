import React from "react";
import classes from "../styles/BeerDisplay.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
const actions = { openModal, closeModal };
const uniqid = require("uniqid");

const BeerDisplay = props => {
  const beerList = props.beers
    ? props.beers.map(beer => {
        return (
          <ListItem
            key={uniqid()}
            dense
            button
            className={classes.ListItem}
            onClick={() => props.openModal("EDIT_BEER", beer)}
          >
            <ListItemAvatar>
              <Avatar alt={`${beer.brewery}`} src={beer.url} />
            </ListItemAvatar>
            <div className={classes.Group}>
              <h3>{beer.brewery}</h3>
              <h2>{beer.name}</h2>
            </div>
          </ListItem>
        );
      })
    : null;

  return (
    <section className={classes.DisplayContainer}>
      <h1 className={classes.BeersTitle}>
        Current Beers
        <div
          className={classes.AddIcon}
          onClick={() => props.openModal("NEW_BEER")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </h1>
      <List dense className={classes.List}>
        {beerList}
      </List>
    </section>
  );
};

const mapStateToProps = state => ({
  beers: state.beers.beers
});

export default connect(mapStateToProps, actions)(BeerDisplay);
