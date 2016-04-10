var redix = require('./redix');

var initialState = 0;

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

var store = redix.createStore(reducer);

var incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', function (e) {
  e.preventDefault();
  store.dispatch({
    type: 'INCREMENT'
  });
});

var decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', function (e) {
  e.preventDefault();
  store.dispatch({
    type: 'DECREMENT'
  });
});

var counter = document.getElementById('counter');
counter.innerHTML = store.getState();

store.subscribe(function () {
  counter.innerHTML = store.getState();
});
