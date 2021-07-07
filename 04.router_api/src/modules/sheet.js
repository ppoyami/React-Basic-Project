import { getBalanceSheet } from '../api';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const GET_SHEET = 'iex/sheet';
const GET_SHEET_SUCCESS = 'iex/sheet-success';
const GET_SHEET_ERROR = 'iex/sheet-error';

function sheet(state = initialState, action) {
  switch (action.type) {
    case GET_SHEET:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_SHEET_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case GET_SHEET_ERROR:
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

export const getSheet = (symbol, queryString) => async (dispatch, _) => {
  dispatch({ type: GET_SHEET });
  try {
    const payload = await getBalanceSheet(symbol)(queryString);
    dispatch({ type: GET_SHEET_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_SHEET_ERROR, error: e });
  }
};

export default sheet;
