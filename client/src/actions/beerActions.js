import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  CREATE_BEER,
  UPDATE_BEER,
  DELETE_BEER
} from "./action-types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const fetchBeers = () => {
  return (dispatch, getState) => {
    dispatch(fetchBeersBegin());
    return fetch("http://localhost:5000/beers", tokenConfig(getState))
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
    .post(
    "http://localhost:5000/beers",
    newBeer, tokenConfig(getState)
  );
};

export const deleteBeer = id => (dispatch, getState) => {
  axios
    .delete("http://localhost:5000/beers/" + id, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_BEER,
        payload: id
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};
