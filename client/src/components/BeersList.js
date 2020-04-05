import React from "react";
import classes from "../css/Modals.module.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
const actions = { openModal, closeModal };
const uniqid = require("uniqid");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "300px",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflowY: "auto",
    marginBottom: "1rem"
  },
  item: {
    width: "300px",
    border: "1px solid blue",
    height: "50px",
    borderRadius: "0.5rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    margin: "2px",
    background: "#F0D3D7"
  },
  completedItem: {
    width: "300px",
    height: "50px",
    borderRadius: "0.5rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    margin: "2px",
    background: "#BDE7DF"
  },
  primary: {
    fontSize: "12px"
  },
  secondary: {
    fontSize: "10px"
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }
}));

function BeerList(props) {
  const styles = useStyles();
  const [checked, setChecked] = React.useState([-1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const mappedBeers = props.beers.map(beer => {
    return (
      <ListItem
        key={uniqid()}
        onClick={handleToggle(beer)}
        dense
        button
        className={beer.finished ? styles.completedItem : styles.item}
      >
        <ListItemAvatar>
          <Avatar
            className={styles.avatar}
            alt={`${beer.brewery}`}
            src={`${beer.url}`}
          />
        </ListItemAvatar>
        <ListItemText
          classes={{
            primary: styles.primary,
            secondary: styles.secondary
          }}
          primary={`${beer.name}`}
          secondary={`${beer.brewery}`}
        />
        <ListItemIcon>
          <Checkbox
            edge="end"
            className={styles.checkbox}
            checked={beer.finished || checked.indexOf(beer) !== -1}
            disabled={beer.finished}
          />
        </ListItemIcon>
      </ListItem>
    );
  });

  return (
    <>
      <List dense className={styles.root}>
        {mappedBeers}
      </List>
      <div className={classes.ButtonContainer}>
        <input
          type="submit"
          value="Submit Edit"
          onClick={e => props.handleSubmit(e, checked)}
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(BeerList);
