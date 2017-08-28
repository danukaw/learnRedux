var redux = require('redux');

console.log("starting redux exmples 2");
var action = require('./actions/index');
var store = require('./store/configureStore').configStore();
//subscribe to changes
store.subscribe(() => {

 var state = store.getState();
 console.log('Name is ', state.name);
 //document.getElementById('app').innerHTML = state.name;
 //console.log('Hobbise ', ...state.hobiies);
 if(state.map.isFetchCompleted) {
   document.getElementById('app').innerHTML ='LOADING...';
 } else if (state.map.url) {
   document.getElementById('app').innerHTML ='<a href="'+state.map.url+'" target="_blank">Show Your Location</a>';
 }

 console.log('Current State ', store.getState());
});


//call location fetch action
store.dispatch(action.locationFetch());

// call changename action
store.dispatch(action.changeName('Andrew'));
store.dispatch(action.changeName('danuka'));
store.dispatch(action.changeName('nimesha'));

//call addhobby action
store.dispatch(action.addHobby('running'));
store.dispatch(action.addHobby('diving'));
// call remove hobby action
store.dispatch(action.removeHobby(2));
//call add movie action
store.dispatch(action.addMovie('Looper','action'));
store.dispatch(action.addMovie('Baby Driver', 'crime'));
//call remove movie action
store.dispatch(action.removeMovie(2));
