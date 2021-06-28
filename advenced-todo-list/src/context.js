import { createContext, useReducer, useContext } from 'react';

import reducer, { initialState } from './reducer';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error('invalid Context');
  return context;
};

export const useDispatchContext = () => {
  const context = useContext(DispatchContext);
  if (!context) throw new Error('invalid Context');
  return context;
};

export default ContextProvider;
