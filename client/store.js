// Get Redux/React Dependencies
import { createStore, compose, applymiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

// Import Database
import comments from './data/commentseed';
import posts from './data/postseed';

var post;
fetch('/posts')
  .then(res => res.json())
  .then(data => post = data)

var comment;
fetch('/comments')
  .then(res => res.json())
  .then(data => comment = data)

// Create object for default data
const defaultState = {
  posts: posts,
  comments: comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
