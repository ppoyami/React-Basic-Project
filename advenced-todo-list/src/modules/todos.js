const initialState = {
  /*
  {
    key : []
    key : [
      {
        id,
        text,
        done
      }
    ]
  } 
  
  */
};

const ADD_TODOS = 'todos/add';
const ADD_TODO = 'todos/todo-add';
const TOGGLE_TODO = 'todos/todo-toggle';
const REMOVE_TODO = 'todos/todo-remove';
const UPDATE_TODO = 'todos/todo-update';

export default function todos(state = initialState, action) {
  const key = action.collectionId;

  switch (action.type) {
    case ADD_TODOS:
      return { ...state, [key]: [] };
    case ADD_TODO:
      return { ...state, [key]: [...state[key], action.todo] };
    case TOGGLE_TODO:
      return {
        ...state,
        [key]: state[key].map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        [key]: state[key].filter(todo => todo.id !== action.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        [key]: state[key].map(todo =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    default:
      return state;
  }
}

export const addTodos = collectionId => ({ type: ADD_TODOS, collectionId });
export const addTodo = (collectionId, todo) => ({
  type: ADD_TODO,
  collectionId,
  todo,
});
export const removeTodo = (collectionId, id) => ({
  type: REMOVE_TODO,
  collectionId,
  id,
});
export const toggleTodo = (collectionId, id) => ({
  type: TOGGLE_TODO,
  collectionId,
  id,
});
export const updateTodo = (collectionId, id, text) => ({
  type: UPDATE_TODO,
  collectionId,
  id,
  text,
});
