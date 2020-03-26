import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./styles/Modals.module.css";
import { typeMap } from "../lib/TypeMap";
import Grow from "@material-ui/core/Grow";
import { deleteBeer } from "../actions/beerActions";
import swal from "@sweetalert/with-react";

class EditBeerModal extends Component {
  deleteBeerAlert = () => {
    swal({
      title: `Delete ${this.props.beerName}?`,
      text: `Do you really want to delete this beer?`,
      buttons: true,
      icon: "warning",
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal(`Hasta la Vista! ${this.props.beerName} has been deleted!`, {
          icon: "success"
        });
        this.props.deleteBeer(this.props.id);
        this.props.toggleModal();
      } else {
        swal(`Today is your luck day, you sweet sweet miracle drink!`);
      }
    });
  };

  render() {
    return (
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>Edit Beer</h2>
            <img
              className={classes.ModalImage}
              src={this.props.beerUrl}
              alt={this.props.beerName}
            />
            <form
              className={classes.ModalForm}
              onSubmit={e => this.props.handleSubmit(e)}
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="beerName"
                  className={classes.Input}
                  value={this.props.beerName}
                  onChange={this.props.handleInputChange}
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
                  onChange={this.props.handleInputChange}
                  value={this.props.beerType}
                >
                  <optgroup label="Current Beer Type">
                    <option value={this.props.beerType}>
                      {this.props.beerType}
                    </option>
                  </optgroup>
                  {typeMap}
                </select>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="brewery"
                  className={classes.Input}
                  value={this.props.brewery}
                  onChange={this.props.handleInputChange}
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
                  value={this.props.breweryLocation}
                  onChange={this.props.handleInputChange}
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
                  value={this.props.beerUrl}
                  onChange={this.props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="beerUrl" className={classes.Label}>
                  Beer/Brewery Image URL
                </label>
              </div>
              <button
                onClick={this.props.handleEditBeerSubmit}
                className={classes.EditButton}
              >
                Submit Edit
              </button>
              <button
                onClick={this.props.toggleModal}
                className={classes.CancelButton}
              >
                Cancel
              </button>
            </form>
            <button
              onClick={() => this.deleteBeerAlert()}
              className={classes.CancelButton}
            >
              Delete
            </button>
          </div>
        </Grow>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { deleteBeer })(EditBeerModal);
