import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'post';
const { createReducer, loading, success, error } = reducerUtils(
  TYPE,
  initialState
);

const post = createReducer();

export { post, loading, success, error };
