import * as actionType from "./actionTypes";
import axios from "axios";
import { tokenConfig, returnErrors } from "./index";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://bearmugclub.herokuapp.com/api/beers/"
    : "http://localhost:5000/api/beers/";

export const fetchBeers = () => {
  return (dispatch, getState) => {
    dispatch(fetchBeersBegin());
    return fetch(URL, tokenConfig(getState))
      .then((res) => res.json())
      .then((beers) => {
        dispatch(fetchBeersSuccess(beers));
        return beers;
      })
      .catch((error) => dispatch(fetchBeersFailure(error)));
  };
};

export const fetchBeersBegin = () => ({
  type: actionType.FETCH_BEERS_BEGIN,
});

export const fetchBeersSuccess = (beers) => ({
  type: actionType.FETCH_BEERS_SUCCESS,
  payload: beers,
});

export const fetchBeersFailure = (error) => ({
  type: actionType.FETCH_BEERS_FAILURE,
  payload: { error },
});

export const createBeer = (newBeer) => (dispatch, getState) => {
  axios
    .post(URL, newBeer, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: actionType.CREATE_BEER,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBeer = (id, role) => async (dispatch, getState) => {
  const config = tokenConfig(getState);
  const headers = config.headers;
  await axios
    .delete(URL + id, { headers: headers, data: { role: role } })
    .then((res) =>
      dispatch({
        type: actionType.DELETE_BEER,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateBeer = (beer, id) => (dispatch, getState) => {
  const beerURL = URL + id;
  axios
    .put(beerURL, beer, tokenConfig(getState))
    .then(dispatch(fetchBeers()))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
