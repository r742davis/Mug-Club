import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import classes from './styles/BeerDisplay.module.css';
import { connect } from 'react-redux';

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
  console.log(props)
  const styles = useStyles();
  const beerList = props.beers ? 
    props.beers.map(beer => {
      return (
        <ListItem
          key={uniqid()}
          dense
          button
          className={classes.ListItem}
          onClick={() => props.toggleEditBeerModal(beer)}
          >
          <ListItemAvatar>
            <Avatar
              alt={`${beer.brewery}`}
              src={beer.url}
            />
          </ListItemAvatar>
          <div className={classes.Group}>
            <h3>{beer.brewery}</h3>
            <h2>{beer.name}</h2>
          </div>
          
          {/* <ListItemText
            primary={`${beer.name}`}
            secondary={`${beer.brewery}`} /> */}
        </ListItem>
      );
    })
    : null

  return (
    <>
    <section className={classes.DisplayContainer}>
      <h1>Current Beers</h1>
      <ThemeProvider theme={theme}>
        <Button
          onClick={props.toggleNewBeerModal}
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

const mapStateToProps = (state) => ({
  beers: state.beers.beers
})


export default connect(mapStateToProps)(BeerDisplay);
