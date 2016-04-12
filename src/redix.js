export function createStore(reducer, initialState) {
  let currentState = initialState
  const listeners = []

  const store = {
    getState() {
      return currentState
    },

    dispatch(action) {
      currentState = reducer(currentState, action)

      for (const listener of listeners) {
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

        const index = listeners.indexOf(listener)
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
    for (const partial in reducerObj) {
      if ({}.hasOwnProperty.call(reducerObj, partial)) {
        nextState = {
          ...nextState,
          [partial]: reducerObj[partial](state[partial], action)
        }
      }
    }

    return nextState
  }
}
