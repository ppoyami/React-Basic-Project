import { searchSymbols } from '../api';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const GET_SYMBOLS = 'iex/symbols';
const GET_SYMBOLS_SUCCESS = 'iex/symbols-success';
const GET_SYMBOLS_ERROR = 'iex/symbols-error';

function symbols(state = initialState, action) {
  switch (action.type) {
    case GET_SYMBOLS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_SYMBOLS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case GET_SYMBOLS_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

// * thunk 함수를 작성
/*
 (params) => (dispatch, state) => {..logic}
 */

export const getSymbols = symbol => async (dispatch, _) => {
  dispatch({ type: GET_SYMBOLS });
  try {
    const payload = await searchSymbols(symbol);
    dispatch({ type: GET_SYMBOLS_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_SYMBOLS_ERROR, error: e });
  }
};

export default symbols;
