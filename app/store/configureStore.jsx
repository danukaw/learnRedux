var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobiesReducer, movieReducer, mapReducer} = require('./../reducers/index');

export var configStore = () => {
  // combineReducers
  var reducers = redux.combineReducers({
    name : nameReducer,
    hobbies : hobiesReducer,
    movies : movieReducer,
    map : mapReducer
  });

  var store = redux.createStore(reducers, redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
