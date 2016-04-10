export function createStore(reducer, initialState) {
  let currentReducer = reducer
  let currentState = initialState
  let listeners = []

  let store = {
    getState() {
      return currentState
    },

    dispatch(action) {
      console.log(`Dispatching: ${action.type}, action:`, action)
      currentState = reducer(currentState, action)

      for (let listener of listeners) {
        listener()
      }

      return action
    },

    subscribe(listener) {
      let isSubscribed = true

      listeners.push(listener)

      return function unsubscribe() {
        if (!isSubscribed) {
          return
        }

        isSubscribed = false

        let index = listeners.indexOf(listener)
        listener.splice(index, 1)
      }
    }
  }

  store.dispatch({
    type: '@@INIT'
  })

  return store
}

export function combineReducers(reducerObj) {
  return (state, action) => {
    let nextState = {}
    for (let partial in reducerObj) {
      nextState = {
        ...nextState,
        [partial]: reducerObj[partial](state[partial], action)
      }
    }

    return nextState
  }
}
