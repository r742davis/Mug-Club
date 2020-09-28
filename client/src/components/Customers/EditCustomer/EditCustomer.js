import React from "react";
import classes from "../../../css/Modals.module.css";
import Grow from "@material-ui/core/Grow";
import swal from "@sweetalert/with-react";
import BeerList from "../../Beers/BeerList/BeerList";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  closeModal,
  updateCustomer,
  fetchCustomers,
  updateCustomerBeers,
  updateBeer,
} from "../../../store/actions/index";

class EditCustomer extends React.Component {
  state = {
    first: "",
    last: "",
    clubId: "",
    customerId: "",
    completed: "",
    customerBeers: [],
  };

  static propTypes = {
    first: PropTypes.string,
    last: PropTypes.string,
    clubId: PropTypes.number,
    completed: PropTypes.bool,
    customerBeers: PropTypes.array,
    customerId: PropTypes.string,
  };

  componentDidMount = () => {
    console.log("[Edit Customer Modal Mounted]");
    const {
      first,
      last,
      clubId,
      customerId,
      completed,
      customerBeers,
    } = this.props;
    this.setState({
      first: first,
      last: last,
      clubId: clubId,
      customerId: customerId,
      completed: completed,
      customerBeers: customerBeers,
    });
  };

  updateCompletedBeers = (checked) => {
    let updatedBeers = checked.filter((item) => item !== -1);
    updatedBeers.forEach((item) => (item.finished = true));

    let newCustomerBeersArray = [...this.state.customerBeers];
    let merged = { ...updatedBeers, ...newCustomerBeersArray };
    let updated = [];
    for (let obj in merged) {
      updated.push(merged[obj]);
    }

    return updated;
  };

  checkCompletion = (beers) => {
    let value = true;
    for (let i = 0; i < beers.length; i++) {
      if (beers[i].finished === false) {
        return (value = false);
      }
    }
    if (value === true) {
      this.setState({
        completed: true,
      });
    }
  };

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async (e, checked) => {
    e.preventDefault();
    this.checkCompletion(this.state.customerBeers);
    const updatedCustomer = {
      name: {
        first: this.state.first,
        last: this.state.last,
      },
      mugClub: {
        clubId: this.state.clubId,
        completed: this.state.completed,
        beers: this.updateCompletedBeers(checked),
      },
    };
    try {
      console.log(updatedCustomer);
      await this.props.updateCustomer(updatedCustomer, this.props.customerId);
      await this.props.closeModal();
      await this.props.fetchCustomers();
      swal({
        title: `You've updated ${this.state.first} ${this.state.last}!`,
        icon: "success",
        button: "Ok!",
      });
    } catch (e) {
      console.log(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!",
      });
    }
  };

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <>
        <section className={classes.ModalContainer}>
          <Grow in={true}>
            <div className={classes.Modal}>
              <h2 className={classes.ModalTitle}>Edit Customer</h2>
              <div className={classes.ModalContent}>
                <form
                  className={classes.Form}
                  onSubmit={(e) => this.props.handleSubmit(e)}
                >
                  <div className={classes.Group}>
                    <input
                      type="text"
                      name="first"
                      className={classes.Input}
                      defaultValue={this.props.first}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="first" className={classes.Label}>
                      First Name
                    </label>
                  </div>
                  <div className={classes.Group}>
                    <input
                      type="text"
                      name="last"
                      className={classes.Input}
                      defaultValue={this.props.last}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="last" className={classes.Label}>
                      Last Name
                    </label>
                  </div>
                  <div className={classes.Group}>
                    <input
                      type="text"
                      name="clubId"
                      className={classes.Input}
                      defaultValue={this.props.clubId}
                      onChange={this.handleInputChange}
                      required
                    />
                    <span className={classes.Bar}></span>
                    <label htmlFor="clubId" className={classes.Label}>
                      Mug Club ID
                    </label>
                  </div>
                  <div>
                    <label htmlFor="beerList" className={classes.BeerLabel}>
                      Select Beer to Mark as Complete:
                    </label>
                    <BeerList
                      beers={this.props.customerBeers}
                      updateCompletedBeers={this.updateCompletedBeers}
                      handleSubmit={this.handleSubmit}
                      toggleModal={() => this.props.closeModal()}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Grow>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  closeModal,
  updateCustomer,
  fetchCustomers,
};
const mapStateToProps = ({ modal: { info }, customers }) => {
  const {
    _id,
    name: { first, last },
    mugClub: { clubId, beers, completed },
  } = info;
  const { updatedBeers } = customers;
  return {
    first: first,
    last: last,
    clubId: clubId,
    completed: completed,
    customerBeers: beers,
    customerId: _id,
    updatedBeers: updatedBeers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);
