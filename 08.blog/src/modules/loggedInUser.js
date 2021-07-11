import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'loggedInUser';
const {
  createReducer,
  creatorLoading,
  creatorSuccess,
  creatorError,
  selector,
} = reducerUtils(TYPE, initialState);

const loggedInUser = createReducer();

export { loggedInUser, creatorLoading, creatorSuccess, creatorError, selector };
