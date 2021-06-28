export const initialState = {
  collections: [
    // {
    //   id: '',
    //   title: '',
    // },
  ],
  todos: {
    // id: [],
    // id: [
    //   {
    //     id: '',
    //     text: '',
    //     done: '',
    //   },
    // ],
  },
};

const ADD_COLLECTION = 'collection/add';
const REMOVE_COLLECTION = 'collection/remove';
const ADD_TODO = 'todo/add';
const ADD_TODOS = 'todos/add';
const REMOVE_TODO = 'todo/remove';
const UPDATE_TODO = 'todo/update';
const TOGGLE_TODO = 'todo/toggle';

function reducer(state, action) {
  const key = action.collectionId || undefined;

  switch (action.type) {
    case ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.collection],
      };
    case REMOVE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter(
          ({ id }) => id !== action.collectionId
        ),
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: [],
        },
      };
    case ADD_TODO:
      console.log(key);
      console.log(state.todos[key]);
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: [...state.todos[key], action.todo],
        },
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: state.todos[key].filter(todo => todo.id !== action.id),
        },
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: state.todos[key].map(todo =>
            todo.id === action.id ? { ...todo, text: action.text } : todo
          ),
        },
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: state.todos[key].map(todo =>
            todo.id === action.id ? { ...todo, done: todo.done } : todo
          ),
        },
      };
    default:
      throw new Error(`${action.type} not supported!`);
  }
}

export const addCollection = collection => ({
  type: ADD_COLLECTION,
  collection,
});
export const removeCollection = collectionId => ({
  type: REMOVE_COLLECTION,
  collectionId,
});

export const addTodos = collectionId => ({
  type: ADD_TODOS,
  collectionId,
});

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
export const updateTodo = (collectionId, id, text) => ({
  type: UPDATE_TODO,
  collectionId,
  id,
  text,
});
export const toggleTodo = (collectionId, id) => ({
  type: TOGGLE_TODO,
  collectionId,
  id,
});

export default reducer;
