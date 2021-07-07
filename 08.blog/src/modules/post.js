import { reducerUtils } from '../lib/reducerUtils';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const TYPE = 'post';
const { createReducer, creatorLoading, creatorSuccess, creatorError } =
  reducerUtils(TYPE, initialState);

const post = createReducer();

export { post, creatorLoading, creatorSuccess, creatorError };
