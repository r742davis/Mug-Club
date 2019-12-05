import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classes from './BeerDisplay.module.css';

const BeerDisplay = (props) => {
  return (
    <>
    <section className={classes.DisplayContainer}>
    <h1>Current Mug Club Beers</h1>
    <button>Create New Beer</button>
      <List dense className={classes.List}>
        {props.beers
          .map(beer => {
          const labelId = `checkbox-list-secondary-label-${props.beers.id}`;
          return (
            <ListItem
              key={beer.id}
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
                id={labelId}
                primary={`${beer.name}`}
                secondary={`${beer.brewery}`} />
            </ListItem>
          );
        })}
      </List>
    </section>
    </>
  )
}

export default BeerDisplay;
