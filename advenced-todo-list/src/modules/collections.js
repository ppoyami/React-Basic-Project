// * 초기 상태
const initialState = [
  /*
    {
      id: 0,
      title: ''
    }
  */
];

// * action type

const ADD_COLLECTION = 'collections/add';
const REMOVE_COLLECTION = 'collections/remove';

// * 리듀서 함수

export default function collections(state = initialState, action) {
  switch (action.type) {
    case ADD_COLLECTION:
      return [...state, action.collection];
    case REMOVE_COLLECTION:
      return state.filter(collection => collection.id !== action.id);
    default:
      return state;
  }
}
// * 액션 생성함수

export const addCollection = collection => ({
  type: ADD_COLLECTION,
  collection,
});

export const removeCollection = id => ({ type: REMOVE_COLLECTION, id });
