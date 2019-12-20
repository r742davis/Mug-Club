import React from 'react';
import classes from '../Modals.module.css';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const EditCustomer = (props) => {
  const styles = useStyles();
  return (
    <>
      <h1>Beers Will Appear Here</h1>

      <section className={classes.ModalContainer}>
        <Grow in={true}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Edit Customer</h2>
          <form
            className={classes.ModalForm}
            onSubmit={props.handleEditCustomerSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" value={props.firstName} onChange={props.handleInputChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={props.lastName} onChange={props.handleInputChange} />
            <label htmlFor="clubId">Mug Club ID</label>
            <input type="text" name="clubId" placeholder="Mug Club ID" value={props.clubId} onChange={props.handleInputChange} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={props.handleEditCustomerSubmit}
              className={styles.margin}>Submit</Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              onClick={props.toggleEditCustomerModal}
              className={styles.margin}>Cancel</Button>
          </form>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default EditCustomer;
