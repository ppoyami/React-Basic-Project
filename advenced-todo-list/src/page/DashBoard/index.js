import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addCollection } from '../../modules/collections';

import DashBoard from './DashBoard';

export default function DashBoardContainer({ history }) {
  const { collections, todos } = useSelector(state => state);
  const dispatch = useDispatch();
  // BUG: 함수 호출될 때마다, 초기화 된다.
  const collectionId = useRef(0);

  const goHome = () => {
    history.push('/');
  };

  const onCreateCollection = title => {
    const collection = {
      id: collectionId.current,
      title,
    };
    collectionId.current++;
    dispatch(addCollection(collection));
  };

  const getCount = id => (todos[id] ? todos[id].length : 0);

  const props = {
    collections,
    goHome,
    onCreateCollection,
    getCount,
  };

  return <DashBoard {...props} />;
}
