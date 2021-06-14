import { useState } from "react";

const useInputs = (initialState) => {
  const [state, setState] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };
  const reset = () => setState(initialState);
  return [state, onChange, reset];
};

export default useInputs;
