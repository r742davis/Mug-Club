import React from 'react';
import classes from './styles/Modals.module.css';

const CustomerBeersModal = (props) => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <div className={classes.Modal}>
          <h2 className={classes.ModalTitle}>Beers</h2>
        </div>
      </section>
    </>
  )
};

export default CustomerBeersModal;
