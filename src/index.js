import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from './redix'
import { Provider, connect } from './react-redix'
import Counter from './Counter'

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(reducer)

const ConnectedCounter = connect((state) => ({
  counter: state
}), (dispatch) => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'})
}))(Counter)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('app')
)
