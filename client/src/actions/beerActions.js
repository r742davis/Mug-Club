import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  CREATE_BEER,
  UPDATE_BEER,
  DELETE_BEER
} from './action-types';

export const fetchBeers = () => {
  return dispatch => {
    dispatch(fetchBeersBegin());
    return fetch('http://localhost:5000/beers')
      .then(res => res.json())
      .then(beers => {
        dispatch(fetchBeersSuccess(beers));
        return beers;
      })
      .catch(error => dispatch(fetchBeersFailure(error)));
  }
};

export const fetchBeersBegin = () => ({
  type: FETCH_BEERS_BEGIN
});

export const fetchBeersSuccess = (beers) => ({
  type: FETCH_BEERS_SUCCESS,
  payload: beers
});

export const fetchBeersFailure = (error) => ({
  type: FETCH_BEERS_FAILURE,
  payload: { error }
});



