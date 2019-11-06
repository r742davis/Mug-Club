import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classes from './Customer.module.css';

const customer = (props) => {
  return (
    <div className={classes.CustomerBox}>
      <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.firstName} {props.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Mug Club ID: {props.clubId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Customer</Button>
      </CardActions>
    </Card>

    </div>
  )
}

export default customer;
