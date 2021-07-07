import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'user';
const { createReducer, loading, success, error } = reducerUtils(
  TYPE,
  initialState
);

const user = createReducer();

export { user, loading, success, error };
