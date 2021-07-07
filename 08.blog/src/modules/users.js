import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'users';
const { createReducer, creatorLoading, creatorSuccess, creatorError } =
  reducerUtils(TYPE, initialState);

const users = createReducer();

export { users, creatorLoading, creatorSuccess, creatorError };
