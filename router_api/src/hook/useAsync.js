import { useReducer } from "react";
import api from "../api";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const loading = () => ({
  loading: true,
  data: null,
  error: null
});
const success = (data) => ({
  loading: false,
  data,
  error: null
});
const error = (error) => ({
  loading: false,
  data: null,
  error: error
});

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return loading();
    case "SUCCESS":
      return success(action.data);
    case "ERROR":
      return error(action.error);
    default:
      throw new Error(`${action.type} not supported!`);
  }
}

function useAsync() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fatchData = async (callback) => {
    try {
      dispatch({ type: "LOADING" });
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  return [state, fatchData];
}

export default useAsync;
