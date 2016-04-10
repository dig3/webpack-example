
import { createStore } from './redix';

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

let incrementButton = document.getElementById('increment')
incrementButton.addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch({
    type: 'INCREMENT'
  })
})

let decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', (e) => {
  e.preventDefault()
  store.dispatch({
    type: 'DECREMENT'
  })
})

let counter = document.getElementById('counter')
counter.innerHTML = store.getState()

store.subscribe(() => counter.innerHTML = store.getState())
