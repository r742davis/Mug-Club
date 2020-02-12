import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CheckboxListSecondary(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([-1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(newChecked, currentIndex, checked)

    if (currentIndex === -1) {
      newChecked.push(value);
      console.log(value, newChecked)
    } else {
      newChecked.splice(currentIndex, 1);
      console.log(currentIndex, newChecked)
    }

    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
      {props.beers
        .map(beer => {
        const labelId = `checkbox-list-secondary-label-${beer.id}`;
        return (
          <ListItem
            key={beer.id}
            onClick={handleToggle(beer)}
            dense
            button
            css={{ maxWidth: 200 }}
            >
            <ListItemAvatar>
              <Avatar
                alt={`${beer.brewery}`}
                src={`${beer.url}`}
                // src={`/static/images/avatar/${beer + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={`${beer.name}`}
              secondary={`${beer.brewery}`} />
            <ListItemIcon>
              <Checkbox
                edge="end"
                checked={beer.finished || checked.indexOf(beer) !== -1}
                disabled={beer.finished}
                inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
}
