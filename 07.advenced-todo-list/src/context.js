import { createContext, useContext, useRef } from 'react';

const CollectionIdContext = createContext(null);
const TodoIdContext = createContext(null);

export default function ContextProvider({ children }) {
  const collectionId = useRef(0);
  const todoId = useRef({});

  return (
    <CollectionIdContext.Provider value={collectionId}>
      <TodoIdContext.Provider value={todoId}>{children}</TodoIdContext.Provider>
    </CollectionIdContext.Provider>
  );
}

export const useCollectioId = () => {
  const context = useContext(CollectionIdContext);
  if (!context) throw new Error('CollectionIdContext error');
  return context;
};

export const useTodoId = () => {
  const context = useContext(TodoIdContext);
  if (!context) throw new Error('TodoIdContext error');
  return context;
};
