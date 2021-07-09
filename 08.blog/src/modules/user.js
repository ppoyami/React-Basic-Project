import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'user';
const {
  createReducer,
  creatorLoading,
  creatorSuccess,
  creatorError,
  selector,
} = reducerUtils(TYPE, initialState);

const user = createReducer();

export { user, creatorLoading, creatorSuccess, creatorError, selector };
