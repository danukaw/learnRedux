export var nameReducer = (state ="anonymous", action) => {

  switch (action.type) {

    case 'CHANGE_NAME' :
      return action.name;

    default :
      return state;
  }
};

var hobbiesId = 1;
export var hobiesReducer = (state = [], action) => {

  switch (action.type) {

    case 'ADD_HOBBY' :
      return [
          ...state,
          {
            id : hobbiesId++,
            hobby : action.hobby
          }
      ];

    case 'REMOVE_HOBBY' :

      return state.filter( (hobby) => hobby.id !== action.id);

    default :
      return state;
  }
};

var nextMovie = 1;
export var movieReducer = (state = [], action) => {

  switch (action.type) {

    case 'ADD_MOVIE' :

      return [
              ...state,
              {
                id : nextMovie++,
                title : action.title,
                genre : action.genre
              }
            ];

    case 'REMOVE_MOVIE':

      return state.filter((movie) => movie.id !== action.id);

    default :
      return state;
  }

};

export var mapReducer = (state = {isFetchCompleted : false , url : undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH' :
      return {
        isFetchCompleted : true
      };
    case 'FINISH_LOCATION_FETCH' :
      return {
        url :action.url
      };
    default:
      return state;
  }
};
