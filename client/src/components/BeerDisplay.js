import React from "react";
import classes from "../css/BeerDisplay.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../store/actions/modalActions";
const actions = { openModal, closeModal };
const mapStateToProps = ({ beers: { beers, loading } }) => ({
  beers: beers,
  loading: loading
});
const uniqid = require("uniqid");

const BeerDisplay = (props) => {
  const { beers } = props;
  const beerList = beers
    ? beers.map((beer) => {
        return (
          <ListItem
            key={uniqid()}
            dense
            button
            className={classes.ListItem}
            onClick={() => props.openModal("EDIT_BEER", beer)}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.Avatar}
                alt={`${beer.brewery}`}
                src={beer.url}
              />
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
        Beers List
        <div
          className={classes.AddIcon}
          onClick={() => props.openModal("NEW_BEER")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </h1>
      <List dense className={classes.ListContainer}>
        {props.loading && <h2>Loading Beers Bro...</h2>}
        {beerList}
      </List>
    </section>
  );
};

export default connect(mapStateToProps, actions)(BeerDisplay);
