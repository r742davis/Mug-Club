const ADD_BEER = 'ADD_BEER';

{
  type: ADD_BEER,
  text: 'Adding Beer to Database'
}

function addBeer(text) {
  return {
    type: ADD_BEER,
    text
  }
}

dispatchEvent(addBeer(text))