import React from "react";
import classes from "./styles/Modals.module.css";
import Grow from "@material-ui/core/Grow";
import BeersList from "./BeersList";

const EditCustomer = props => {
  if (!props) {
    return null;
  }
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.EditModal}>
            <h2 className={classes.ModalTitle}>Edit Customer</h2>
            <form
              className={classes.EditForm}
              onSubmit={e => props.handleSubmit(e)}
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="firstName"
                  className={classes.Input}
                  value={props.firstName}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="firstName" className={classes.Label}>
                  First Name
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="lastName"
                  className={classes.Input}
                  value={props.lastName}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="lastName" className={classes.Label}>
                  Last Name
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="clubId"
                  className={classes.Input}
                  value={props.clubId}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="clubId" className={classes.Label}>
                  Mug Club ID
                </label>
              </div>
              <div>
                <label htmlFor="beerList" id={classes.ListLabel}>
                  Beer List
                </label>
                <BeersList
                  beers={props.beers}
                  updateCompletedBeers={props.updateCompletedBeers}
                  handleSubmit={props.handleSubmit}
                  toggleModal={props.toggleModal}
                />
              </div>
            </form>
          </div>
        </Grow>
      </section>
    </>
  );
};

export default EditCustomer;
