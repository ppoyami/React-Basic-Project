import "./styles.css";
import { useMemo, useReducer, createContext } from "react";
import Pannel from "./components/Pannel";
import UserList from "./components/UserList";

const initialState = {
  users: []
};

function reducer(state, action) {
  switch (action.type) {
    case "COMMENT_CREATE":
      return {
        users: [...state.users, action.userComment]
      };
    case "COMMENT_REMOVE":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      };
    case "COMMENT_UPDATE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id
            ? {
                ...user,
                comment: action.updateValue
              }
            : user
        )
      };
    default:
      return state;
  }
}

function countActiveUser(users) {
  console.log("유저 수 계산 중..");
  const userTable = users.reduce((acc, { username }) => {
    if (!acc[username]) {
      acc[username] = 1;
      return acc;
    }
    acc[username]++;
    return acc;
  }, {});
  // console.log(JSON.stringify(userTable));
  return Object.keys(userTable).length;
}

export const UserDispatch = createContext(null);

//// APP
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const commentCount = useMemo(() => countActiveUser(users), [users]);

  return (
    <div className="App">
      <UserDispatch.Provider value={dispatch}>
        <UserList users={users} />
        <Pannel commentCount={commentCount} />
      </UserDispatch.Provider>
    </div>
  );
}
