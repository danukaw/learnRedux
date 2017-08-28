var axios = require('axios');

export var changeName = (name) => {
  return {
    type : 'CHANGE_NAME',
    name
  }
};

export var addHobby = (hobby) => {
  return {
    type : 'ADD_HOBBY',
    hobby
  }
};

export var removeHobby = (id) => {
  return {
    type : 'REMOVE_HOBBY',
    id : id
  }
};

export var startLocationFetch = () => {
  return {
    type : 'START_LOCATION_FETCH'
  }
};

export var finishLocationFetch = (url) => {
    return {
      type : 'FINISH_LOCATION_FETCH',
      url
    }
};

export var addMovie = (title, genre) => {
  return {
    type : 'ADD_MOVIE',
    title : title,
    genre : genre
  }
};

export var removeMovie = (id) => {
  return {
      type : 'REMOVE_MOVIE',
      id : id
  }
};

export var locationFetch = () => {
  // let syetem know that location fetching is being started
  // redux-thunk teach how to work actions that aren't object but function

  return (dispatch, getState) => {

    dispatch(startLocationFetch());

    var baseUrl ='http://maps.goolge.com?q=';
    axios.get('http://www.ipinfo.io').then(function(res){
       var loc = res.data.loc;
       dispatch(finishLocationFetch(baseUrl+loc));
    }, function(res) {
      throws.Error('unable to get ip information');
    });

  };

};
