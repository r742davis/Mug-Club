import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import classes from './BeerDisplay.module.css';
const uniqid = require('uniqid');

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3196f3' },
    secondary: { main: '#11cb5f' },
  },
});


const BeerDisplay = (props) => {
  const styles = useStyles();
  const beerList = props.beers.map(beer => {
    return (
      <ListItem
        key={uniqid()}
        dense
        button
        className={classes.ListItem}
        onClick={() => props.toggleEditModal(beer)}
        >
        <ListItemAvatar>
          <Avatar
            alt={`${beer.brewery}`}
            src={beer.url}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`${beer.name}`}
          secondary={`${beer.brewery}`} />
      </ListItem>
    );
  })

  return (
    <>
    <section className={classes.DisplayContainer}>
    <h1>Current Mug Club Beers</h1>
    <ThemeProvider theme={theme}>
      <Button
        onClick={props.toggleNewModal}
        className={styles.margin}
        variant="contained"
        color="primary">Create New Beer</Button>
    </ThemeProvider>
      <List dense className={classes.List}>
        {beerList}
      </List>
    </section>
    </>
  )
}

export default BeerDisplay;
