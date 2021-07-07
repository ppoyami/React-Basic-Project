const CREATE = "CREATE";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

function reducer(state, action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.todo];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done
            }
          : todo
      );
    default:
      return state;
  }
}

export default reducer;
