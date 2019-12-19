import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import guinnessLogo from '../../../assets/guinness.png';
import sierraNevadaLogo from '../../../assets/sierra_nevada.png';
import firestoneWalkerLogo from '../../../assets/firestone_walker.png';
import blueMoonLogo from '../../../assets/blue_moon.png';
import konaLogo from '../../../assets/kona.png';
import sixRiversLogo from '../../../assets/six_rivers.png';
import stellaArtoisLogo from '../../../assets/stella_artois.png';
import northCoastLogo from '../../../assets/north_coast.jpg';
import lagunitasLogo from '../../../assets/lagunitas.jpg';
import modernTimesLogo from '../../../assets/modern_times.png';
import trackSevenLogo from '../../../assets/track_seven.png';
import newGloryLogo from '../../../assets/new_glory.png';
import modeloLogo from '../../../assets/modelo.png';
import lostCoastLogo from '../../../assets/lost_coast.png';



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
            css={{ maxWidth: 360 }}
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
