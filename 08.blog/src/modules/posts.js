import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'posts';
const {
  createReducer,
  creatorLoading,
  creatorSuccess,
  creatorError,
  selector,
} = reducerUtils(TYPE, initialState);

const posts = createReducer();

export { posts, creatorLoading, creatorSuccess, creatorError, selector };
