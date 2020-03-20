import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles/Modals.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflowY: 'auto',
  },
  item: {
    width: '300px',
    height: '50px',
    borderRadius: '0.5rem',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    margin: '2px',
    background: '#F0D3D7'
  },
  completedItem: {
    width: '300px',
    height: '50px',
    borderRadius: '0.5rem',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    margin: '2px',
    background: '#BDE7DF'
  },
  primary: {
    fontSize: '12px',
  },
  secondary: {
    fontSize: '10px'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
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
    <>
      <List dense className={classes.root}>
        {props.beers.map(beer => {
          const labelId = `checkbox-list-secondary-label-${beer.id}`;
          return (
            <ListItem
              key={beer.id}
              onClick={handleToggle(beer)}
              dense
              button
              className={beer.finished ? classes.completedItem : classes.item}
              >
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt={`${beer.brewery}`} src={`${beer.url}`} />
              </ListItemAvatar>
              <ListItemText
                classes={{primary: classes.primary, secondary: classes.secondary}}
                primary={`${beer.name}`}
                secondary={`${beer.brewery}`} />
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  className={classes.checkbox}
                  checked={beer.finished || checked.indexOf(beer) !== -1}
                  disabled={beer.finished}
                  inputProps={{ 'aria-labelledby': labelId }}
                  />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
      <div className={classes.buttonContainer}>
        <button
          onClick={(e) => props.handleEditCustomerSubmit(e, checked)}
          className={styles.EditButton}>Submit Edit</button>
        <button
          onClick={props.toggleEditCustomerModal}
          className={styles.CancelButton}>Cancel</button>
      </div>
    </>
  );
}
