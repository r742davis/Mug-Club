import React from "react";
import classes from "../../../css/Modals.module.css";
import Button from "../../UI/Button/Button";

import Grow from "@material-ui/core/Grow";
import { typeMap } from "../../../lib/TypeMap";
import swal from "@sweetalert/with-react";

import { connect } from "react-redux";
import {
  openModal,
  closeModal,
  createBeer,
  fetchBeers,
} from "../../../store/actions/index";

class NewBeerModal extends React.Component {
  state = {
    name: "",
    type: "",
    brewery: "",
    breweryLocation: "",
    url: "",
  };

  static propTypes = {};

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = {
        name: this.state.name,
        type: this.state.type,
        brewery: this.state.brewery,
        breweryLocation: this.state.breweryLocation,
        url: this.state.beerUrl,
        finished: false,
      };
      await this.props.createBeer(newBeer);
      swal({
        title: `${this.state.name} has been created!`,
        icon: "success",
        button: "Cool!",
      });
      await this.props.fetchBeers();
    } catch (e) {
      console.error(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!",
      });
    }
  };

  render() {
    return (
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>New Beer</h2>
            <div className={classes.ModalContent}>
              <form
                className={classes.ModalForm}
                onSubmit={(e) => this.props.handleSubmit(e)}
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
                  <select
                    name="type"
                    className={classes.Select}
                    onChange={this.handleInputChange}
                    defaultValue={null}
                    value={this.state.type}
                    placeholder="Beer Type"
                    required
                  >
                    <optgroup label="Current Beer Type">
                      <option value={this.state.type}>{this.state.type}</option>
                    </optgroup>
                    {typeMap}
                  </select>
                  <label htmlFor="type" className={classes.Label}>
                    Type
                  </label>
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
                <div className={classes.ButtonContainer}>
                  <Button
                    buttonType="Submit"
                    clicked={(e) => {
                      this.handleSubmit(e);
                      this.props.closeModal()
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    buttonType="Cancel"
                    clicked={() => this.props.closeModal()}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Grow>
      </section>
    );
  }
}

const mapDispatchToProps = {
  openModal,
  closeModal,
  createBeer,
  fetchBeers,
};

export default connect(null, mapDispatchToProps)(NewBeerModal);
