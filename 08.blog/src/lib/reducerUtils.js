export const reducerUtils = (type, initialState) => {
  const LOADING = `${type}/loading`;
  const SUCCESS = `${type}/success`;
  const ERROR = `${type}/error`;

  function createReducer() {
    return (state = initialState, action) => {
      switch (action.type) {
        case LOADING:
          return {
            loading: true,
            payload: null,
            error: null,
          };
        case SUCCESS:
          return {
            loading: false,
            payload: action.payload,
            error: null,
          };
        case ERROR:
          return {
            loading: false,
            payload: null,
            error: action.error,
          };
        default:
          return state;
      }
    };
  }

  function loading() {
    return {
      type: LOADING,
    };
  }

  function success(payload) {
    return {
      type: SUCCESS,
      payload,
    };
  }

  function error(error) {
    return {
      type: ERROR,
      error,
    };
  }

  return {
    createReducer,
    loading,
    success,
    error,
  };
};
