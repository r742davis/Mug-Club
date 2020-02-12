import {
  FETCH_BEERS_BEGIN,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE,
  CREATE_BEER,
  UPDATE_BEER,
  DELETE_BEER
} from './action-types';
import axios from 'axios';

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

export const createBeer = (newBeer) => () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  };
  axios.post('http://localhost:5000/beers', newBeer, {crossDomain: true}, config)
};

export const deleteBeer = (id) => (dispatch) => {
  axios.delete('http://localhost:5000/customers/'+id)
    .then(res =>
      dispatch({
        type: DELETE_BEER,
        payload: id
      })  
    )
    .catch(error => console.log(error))
}



