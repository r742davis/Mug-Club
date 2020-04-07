import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  CREATE_BEER,
  DELETE_BEER
} from "./action-types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const fetchBeers = () => {
  return (dispatch, getState) => {
    dispatch(fetchBeersBegin());
    return fetch("https://bearmugclub.herokuapp.com/api/beers")
      .then(res => res.json())
      .then(beers => {
        dispatch(fetchBeersSuccess(beers));
        return beers;
      })
      .catch(error => dispatch(fetchBeersFailure(error)));
  };
};

export const fetchBeersBegin = () => ({
  type: FETCH_BEERS_BEGIN
});

export const fetchBeersSuccess = beers => ({
  type: FETCH_BEERS_SUCCESS,
  payload: beers
});

export const fetchBeersFailure = error => ({
  type: FETCH_BEERS_FAILURE,
  payload: { error }
});

export const createBeer = newBeer => (dispatch, getState) => {
  axios
    .post("https://bearmugclub.herokuapp.com/api/beers", newBeer)
    .then(res =>
      dispatch({
        type: CREATE_BEER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBeer = id => (dispatch, getState) => {
  axios
    .delete("https://bearmugclub.herokuapp.com/api/beers/" + id)
    .then(res =>
      dispatch({
        type: DELETE_BEER,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateBeer = (beer, id) => (dispatch, getState) => {
  const beerURL = "https://bearmugclub.herokuapp.com/api/beers/" + id;
  axios
    .put(beerURL, beer)
    .then(dispatch(fetchBeers()))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
