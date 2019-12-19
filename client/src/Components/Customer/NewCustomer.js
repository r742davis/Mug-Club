import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
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
  
  return (
    <div>
      <h3>Create New Customer Component</h3>
      <ThemeProvider theme={theme}>
        <Button
          onClick={props.toggleNewModal}
          className={styles.margin}
          variant="contained"
          color="primary">Create New Customer</Button>
      </ThemeProvider>
    </div>
  )
};

export default NewCustomer;
