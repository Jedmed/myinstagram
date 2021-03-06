// Reducer takes in 1. Action 2. Copy of Current State

function posts(state = [], action) {
  // Pure function (not mutating original, better for user testing)
  switch(action.type) {
    // Incrementing Likes
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    // Do nothing
    default:
      return state;
  }
}

export default posts;
