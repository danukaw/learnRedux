var redux = require('redux');

console.log("starting redux exmples 2");

var defauleState = {

  showCompleted : false,
  searchText : "",
  todolist : []

};

var reducer = (state = defauleState , action) => {
  //state = state || {name : 'Anonymous'}
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText : action.searchText
      };

    default:
      return state;
  }

};

var store = redux.createStore(reducer);

store.subscribe(() => {
  var currentState = store.getState();
  console.log('currentState', currentState);
})

store.dispatch({
  type : "CHANGE_SEARCH_TEXT",
  searchText : 'work'
});
