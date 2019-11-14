import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import testImage from '../../../assets/guinness.png';
import sierraNevadaLogo from '../../../assets/sierra_nevada.png';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const checkName = (brewery) => {
  const sierra = brewery.toLowerCase().includes('sierra')

  if (sierra) {
    return sierraNevadaLogo;
  }
}

export default function CheckboxListSecondary(props) {
  const classes = useStyles();
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

  console.log(props);

  return (
    <List dense className={classes.root}>
      {props.beers
        .map(value => {
        const labelId = `checkbox-list-secondary-label-${props.beers.id}`;
        return (
          <ListItem key={value.id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Beer n°${value.id}`}
                src={checkName(value.brewery)}
                // src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={`${value.name}`}
              secondary={`${value.brewery}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
