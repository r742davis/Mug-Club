import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BeersList from './BeersList/BeersList';
import classes from './Customer.module.css';

const customer = (props) => {

  return (
    <div className={classes.CustomerBox}>
      <Card>
      <CardContent>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          {props.name.first} {props.name.last}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Mug Club ID: {props.clubId}
        </Typography>
        {/*
          <Typography variant="h5">
            Beers:
          </Typography>
          <BeersList
            beers={props.beers}
          />
        */}

      </CardContent>
      <CardActions>
        <Button size="small" name={props.name.first}>Edit Customer</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default customer;
