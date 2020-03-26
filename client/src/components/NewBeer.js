import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import classes from "./styles/Modals.module.css";
import { typeMap } from "../lib/TypeMap";
import swal from "@sweetalert/with-react";

// Redux Imports
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modalActions";
import { createBeer, fetchBeers } from "../actions/beerActions";
const actions = {
  openModal,
  closeModal,
  createBeer,
  fetchBeers
};

class NewBeerModal extends Component {
  state = {};

  static propTypes = {};

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const newBeer = {
        name: this.state.name,
        type: this.state.type,
        brewery: this.state.brewery,
        breweryLocation: this.state.breweryLocation,
        url: this.state.beerUrl,
        finished: false
      };
      await this.props.createBeer(newBeer);
      swal({
        title: `${this.state.name} has been created!`,
        icon: "success",
        button: "Cool!"
      });
      await this.props.fetchBeers();
      this.props.closeModal()
    } catch (e) {
      console.error(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!"
      });
    }
  };

  render() {
    return (
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>Create New Beer</h2>
            <form
              className={classes.ModalForm}
              onSubmit={e => this.props.handleSubmit(e)}
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="name"
                  className={classes.Input}
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="name" className={classes.Label}>
                  Beer Name
                </label>
              </div>

              <div className={classes.Group}>
                <label htmlFor="type" className={classes.SelectLabel}>
                  Type
                </label>
                <select
                  name="type"
                  className={classes.Select}
                  onChange={this.handleInputChange}
                  value={this.state.type}
                  placeholder="Select Type of Beer"
                >
                  <optgroup label="Current Beer Type">
                    <option value={this.state.type}>
                      {this.state.type}
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
                  value={this.state.brewery}
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
                  value={this.state.breweryLocation}
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
                  name="beerUrl"
                  className={classes.Input}
                  value={this.state.beerUrl}
                  onChange={this.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="beerUrl" className={classes.Label}>
                  Beer/Brewery Image URL
                </label>
              </div>
              <input
                type="submit"
                value="Create New Beer"
                onClick={e => this.handleSubmit(e)}
                className={classes.EditButton}
              />
              <input
                type="submit"
                value="Cancel"
                onClick={() => this.props.closeModal()}
                className={classes.CancelButton}
                formNoValidate
              />
            </form>
          </div>
        </Grow>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(NewBeerModal);
