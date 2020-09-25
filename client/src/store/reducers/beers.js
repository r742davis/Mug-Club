import * as actionType from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  beers: null
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_BEERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionType.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        loading: false,
        beers: action.payload
      };
    case actionType.FETCH_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        beers: null
      };
    case actionType.CREATE_BEER:
      return {
        ...state,
        beers: [...state.beers, action.payload]
      };
    case actionType.DELETE_BEER:
      return {
        ...state,
        beers: state.beers.filter(beer => beer._id !== action.payload)
      };
    default:
      return state;
  }
}

export default beerReducer;
