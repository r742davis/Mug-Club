import React from "react";
import classes from "./styles/Modals.module.css";
import { typeMap } from "../lib/TypeMap";
import Grow from "@material-ui/core/Grow";

const EditBeerModal = props => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>Edit Beer</h2>
            <img
              className={classes.ModalImage}
              src={props.beerUrl}
              alt={props.beerName}
            />
            <form
              className={classes.ModalForm}
              onSubmit={props.handleEditSubmit}
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="beerName"
                  className={classes.Input}
                  value={props.beerName}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="beerName" className={classes.Label}>
                  Beer Name
                </label>
              </div>
              <div className={classes.Group}>
                <label htmlFor="beerType" className={classes.ListLabel}>
                  Type
                </label>
                <select
                  name="beerType"
                  className={classes.Select}
                  onChange={props.handleInputChange}
                  value={props.beerType}
                >
                  <optgroup label="Current Beer Type">
                    <option value={props.beerType}>{props.beerType}</option>
                  </optgroup>
                  {typeMap}
                </select>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="brewery"
                  className={classes.Input}
                  value={props.brewery}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="brewery" className={classes.Label}>
                  Brewery
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="breweryLocation"
                  className={classes.Input}
                  value={props.breweryLocation}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="breweryLocation" className={classes.Label}>
                  Brewery Location
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="beerUrl"
                  className={classes.Input}
                  value={props.beerUrl}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="beerUrl" className={classes.Label}>
                  Beer/Brewery Image URL
                </label>
              </div>
              <button
                onClick={props.handleEditBeerSubmit}
                className={classes.EditButton}
              >
                Submit Edit
              </button>
              <button
                onClick={props.toggleEditBeerModal}
                className={classes.CancelButton}
              >
                Cancel
              </button>
            </form>
          </div>
        </Grow>
      </section>
    </>
  );
};

export default EditBeerModal;
