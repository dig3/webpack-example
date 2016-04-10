module.exports.createStore = function (reducer, initialState) {
  var currentReducer = reducer;
  var currentState = initialState;
  var listeners = [];

  var store = {
    getState: function () {
      return currentState;
    },

    dispatch: function (action) {
      console.log('Dispatching:', action.type ,', action:', action);
      currentState = reducer(currentState, action);

      for (var i in listeners) {
        listeners[i]();
      }

      return action;
    },

    subscribe: function (listener) {
      var isSubscribed = true;

      listeners.push(listener);

      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        var index = listeners.indexOf(listener);
        listener.splice(index, 1);
      };
    }
  };

  store.dispatch({
    type: '@@INIT'
  });

  return store;
};

module.exports.combineReducers = function (reducerObj) {
  return function (state, action) {
    var nextState = {};
    for (var partial in reducerObj) {
      nextState[partial] = reducerObj[partial](state[partial], action);
    }

    return nextState;
  };
};
