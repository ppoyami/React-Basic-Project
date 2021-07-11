import { combineReducers } from 'redux';

import { user } from './user';
import { users } from './users';
import { posts } from './posts';
import { post } from './post';
import { loggedInUser } from './loggedInUser';

const rootReducer = combineReducers({
  users,
  user,
  posts,
  post,
  loggedInUser,
});

export default rootReducer;
