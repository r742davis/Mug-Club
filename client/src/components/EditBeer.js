import React, { Component } from "react";
import classes from "./styles/Modals.module.css";
import { typeMap } from "../lib/TypeMap";
import Grow from "@material-ui/core/Grow";
import swal from "@sweetalert/with-react";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
import { deleteBeer, updateBeer, fetchBeers } from "../actions/beerActions";
const actions = {
  openModal,
  closeModal,
  deleteBeer,
  updateBeer,
  fetchBeers
};

class EditBeer extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    type: this.props.type,
    brewery: this.props.brewery,
    breweryLocation: this.props.breweryLocation,
    url: this.props.url
  };

  static propTypes = {};

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const updatedBeer = {
      name: this.state.name,
      type: this.state.type,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      url: this.state.url
    };
    try {
      const id = this.state.id;
      await this.props.updateBeer(updatedBeer, id);
      swal({
        title: `You've updated the ${this.state.name} Beer`,
        icon: "success",
        button: "Sweet!"
      });
      this.props.closeModal();
      this.props.fetchBeers();
    } catch (e) {
      console.log(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!"
      });
    }
  };

  deleteBeerAlert = () => {
    swal({
      title: `Delete ${this.props.name}?`,
      text: `Do you really want to delete this beer?`,
      buttons: true,
      icon: "warning",
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal(`Hasta la Vista! ${this.props.name} has been deleted!`, {
          icon: "success"
        });
        this.props.deleteBeer(this.props.id);
        this.props.fetchBeers();
        this.props.closeModal();
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
              src={this.props.url}
              alt={this.props.name}
            />
            <form
              className={classes.ModalForm}
              onSubmit={e => this.handleSubmit(e)}
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="name"
                  className={classes.Input}
                  defaultValue={this.props.name}
                  onChange={e => this.handleInputChange(e)}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="name" className={classes.Label}>
                  Beer Name
                </label>
              </div>
              <div className={classes.Group}>
                <label htmlFor="type" className={classes.ListLabel}>
                  Type
                </label>
                <select
                  name="type"
                  className={classes.Select}
                  onChange={this.handleInputChange}
                  defaultValue={this.props.type}
                >
                  <optgroup label="Current Beer Type">
                    <option defaultValue={this.props.type}>
                      {this.props.type}
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
                  defaultValue={this.props.brewery}
                  onChange={this.handleInputChange}
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
                  defaultValue={this.props.breweryLocation}
                  onChange={this.handleInputChange}
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
                  name="url"
                  className={classes.Input}
                  defaultValue={this.props.url}
                  onChange={this.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="url" className={classes.Label}>
                  Beer/Brewery Image URL
                </label>
              </div>
              <input
                type="submit"
                value="Submit Edit"
                onClick={e => this.handleSubmit(e)}
                className={classes.EditButton}
              />
              <input
                type="submit"
                value="Cancel"
                onClick={() => this.props.closeModal()}
                className={classes.CancelButton}
              />
            </form>
            <input
              type="submit"
              value="Delete"
              onClick={() => this.deleteBeerAlert()}
              className={classes.CancelButton}
            />
          </div>
        </Grow>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  id: state.modal.info._id,
  name: state.modal.info.name,
  type: state.modal.info.type,
  brewery: state.modal.info.brewery,
  breweryLocation: state.modal.info.breweryLocation,
  url: state.modal.info.url
});

export default connect(mapStateToProps, actions)(EditBeer);
