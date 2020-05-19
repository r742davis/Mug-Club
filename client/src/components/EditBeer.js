import React, { Component } from "react";
import classes from "../css/Modals.module.css";
import DeleteIcon from "./DeleteIcon";
import { typeMap } from "../lib/TypeMap";
import Grow from "@material-ui/core/Grow";
import swal from "@sweetalert/with-react";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { openModal, closeModal } from "../actions/modalActions";
import { deleteBeer, updateBeer, fetchBeers } from "../actions/beerActions";
const actions = {
  openModal,
  closeModal,
  deleteBeer,
  updateBeer,
  fetchBeers,
};
const mapStateToProps = ({ modal: { info }, auth: { user } }) => {
  const { _id, name, type, brewery, breweryLocation, url } = info;
  return {
    id: _id,
    name: name,
    type: type,
    brewery: brewery,
    breweryLocation: breweryLocation,
    url: url,
    user: user,
  };
};

class EditBeer extends Component {
  state = {
    name: "",
    type: "",
    brewery: "",
    breweryLocation: "",
    url: "",
  };

  componentDidMount = () => {
    console.log("Edit Beer Modal Mounted");
    const { id, name, type, brewery, breweryLocation, url } = this.props;
    this.setState({
      id: id,
      name: name,
      type: type,
      brewery: brewery,
      breweryLocation: breweryLocation,
      url: url,
    });
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brewery: PropTypes.string.isRequired,
    breweryLocation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBeer = {
      name: this.state.name,
      type: this.state.type,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      url: this.state.url,
    };
    try {
      const id = this.state.id;
      await this.props.updateBeer(updatedBeer, id);
      swal({
        title: `You've updated the ${this.state.name} Beer`,
        icon: "success",
        button: "Sweet!",
      });
      await this.props.fetchBeers();
      await this.props.closeModal();
    } catch (e) {
      console.log(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!",
      });
    }
  };

  deleteBeerAlert = () => {
    const { name, user, id } = this.props;
    console.log(user.role)
    // if ( user.role !== "ADMIN") {
    //   swal({
    //     text: `You do not have permission to delete ${name}`,
    //     icon: "error",
    //     buttons: {
    //       confirm: true,
    //     }
    //   })
    // } else {

      swal({
        title: `Delete ${name}?`,
        text: `Do you really want to delete this beer?`,
        buttons: true,
        icon: "warning",
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          swal(`Hasta la Vista! ${name} has been deleted!`, {
            icon: "success",
          });
          await this.props.deleteBeer(id, user.role);
          await this.props.fetchBeers();
          this.props.closeModal();
        } else {
          swal(`Today is your luck day, you sweet sweet miracle drink!`);
        }
      });

    // }

  };

  render() {
    return (
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>Edit Beer</h2>
            <div className={classes.ModalContent}>
              {/* <img
                className={classes.ModalImage}
                src={this.props.url}
                alt={this.props.name}
              /> */}
              <form
                className={classes.ModalForm}
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <div className={classes.Group}>
                  <input
                    type="text"
                    name="name"
                    className={classes.Input}
                    defaultValue={this.props.name}
                    onChange={(e) => this.handleInputChange(e)}
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
                    defaultValue={this.props.type}
                    required
                  >
                    <optgroup label="Current Beer Type">
                      <option defaultValue={this.props.type}>
                        {this.props.type}
                      </option>
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
                <div className={classes.ButtonContainer}>
                  <input
                    type="submit"
                    value="Submit"
                    onClick={(e) => this.handleSubmit(e)}
                    className={classes.EditButton}
                  />
                  <input
                    type="submit"
                    value="Cancel"
                    onClick={() => this.props.closeModal()}
                    className={classes.CancelButton}
                  />
                </div>
              </form>
              <DeleteIcon delete={this.deleteBeerAlert} />
            </div>
          </div>
        </Grow>
      </section>
    );
  }
}

export default connect(mapStateToProps, actions)(EditBeer);
