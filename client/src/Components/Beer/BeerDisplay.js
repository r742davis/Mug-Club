import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import classes from './BeerDisplay.module.css';

const BeerDisplay = (props) => {
  return (
    <>
    <section className={classes.DisplayContainer}>
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
              >
              <ListItemAvatar>
                <Avatar
                  alt={`${beer.brewery}`}

                  // src={`/static/images/avatar/${beer + 1}.jpg`}
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
