import React from "react";
import classes from "../../../css/BeerDisplay.module.css";
import Spinner from "../../UI/Spinner/Spinner";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { openModal, closeModal } from "../../../store/actions/index";

const beerDashboard = ({ loading, beers, openModal, closeModal}) => {

  let beerList = <Spinner />;
  if (!loading && beers) {
    beerList = beers.map((beer) => {
      return (
        <ListItem
          key={beer.name}
          dense
          button
          className={classes.ListItem}
          onClick={() => openModal("EDIT_BEER", beer)}
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
    });
  }

  return (
    <section className={classes.DisplayContainer}>
      <h1 className={classes.BeersTitle}>
        Beers List
        <div
          className={classes.AddIcon}
          onClick={() => openModal("NEW_BEER")}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </h1>
      <List dense className={classes.ListContainer}>
        {beerList}
      </List>
    </section>
  );
};

const mapDispatchToProps = { openModal, closeModal };
const mapStateToProps = ({ beers: { beers, loading } }) => ({
  beers: beers,
  loading: loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(beerDashboard);
