import React from 'react';
import classes from '../Modals.module.css';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
// import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

//MUI Theme Creation - Button
const theme = createMuiTheme({
  palette: {
    primary: { main: '#3196f3' },
    secondary: { main: '#11cb5f' },
  },
});


const NewCustomer = (props) => {
  const styles = useStyles();
  const component = "newCustomer";

  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Add New Customer</h2>
          <form
            className={classes.ModalForm}
            onSubmit={props.handleNewCustomerSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" value={props.firstName} onChange={props.handleInputChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={props.lastName} onChange={props.handleInputChange} />

            <label htmlFor="completed">Mug Club Completed?</label>
            <input type="text" name="completed" placeholder="True / False" value={props.completed} onChange={props.handleInputChange} />
            <label htmlFor="clubId">Mug Club ID</label>
            <input type="text" name="clubId" placeholder="Mug Club ID" value={props.clubId} onChange={props.handleInputChange} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.margin}>Submit</Button>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              onClick={props.toggleNewCustomerModal}
              className={styles.margin}>Cancel</Button>
          </form>
        </div>
        </Grow>
      </section>
    </>
  )
};

export default NewCustomer;
