import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default combineReducers({
  counter,
  routing
})
