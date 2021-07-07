import { combineReducers } from 'redux';

import collections from './collections';
import todos from './todos';

// * 루트 리듀서 생성

const rootReducer = combineReducers({
  collections,
  todos,
});

export default rootReducer;
