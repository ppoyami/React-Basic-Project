import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'users';
const { createReducer, loading, success, error } = reducerUtils(
  TYPE,
  initialState
);

const users = createReducer();

export { users, loading, success, error };
