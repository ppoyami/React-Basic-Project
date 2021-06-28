import { createContext, useReducer, useContext, useRef } from 'react';

import reducer, { initialState } from './reducer';

const StateContext = createContext(null);
const DispatchContext = createContext(null);
const IdContext = createContext(null);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const collectionId = useRef(1);
  const todoId = useRef(1);

  const id = {
    collectionId,
    todoId,
  };

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <IdContext.Provider value={id}>{children}</IdContext.Provider>
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

export const useIdContext = () => {
  const context = useContext(IdContext);
  if (!context) throw new Error('invalid Context');
  return context;
};

export default ContextProvider;
