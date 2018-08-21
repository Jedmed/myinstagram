function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];

    case 'REMOVE_COMMENT':
      return [
        // Remove Comment from State
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];

    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // Append Comment to State
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
