import { combineReducers } from 'redux';

import { user } from './user';
import { users } from './users';
import { posts } from './posts';
import { post } from './post';

const rootReducer = combineReducers({
  users,
  user,
  posts,
  post,
});

export default rootReducer;
