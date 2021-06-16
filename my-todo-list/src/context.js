import { useReducer, createContext, useContext, useRef } from 'react';
import reducer from './reducer';

// MEMO: context.js 파일 구성하기
const StateContext = createContext(null);
const DispatchContext = createContext(null);
const IdContext = createContext(null);

function StateDispatchProvider({ children }) {
  const id = useRef(2);
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      text: '할일을 표시합니다.',
      done: false,
    },
  ]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <IdContext.Provider value={id}>{children}</IdContext.Provider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error('cannot find context');
  return context;
};
export const useDispatchContext = () => {
  const context = useContext(DispatchContext);
  if (!context) throw new Error('cannot find context');
  return context;
};
export const useIdContext = () => {
  const context = useContext(IdContext);
  if (!context) throw new Error('cannot find context');
  return context;
};

export default StateDispatchProvider;
