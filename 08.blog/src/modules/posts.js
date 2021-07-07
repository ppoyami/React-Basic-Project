import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'posts';
const { createReducer, loading, success, error } = reducerUtils(
  TYPE,
  initialState
);

const posts = createReducer();

export { posts, loading, success, error };
