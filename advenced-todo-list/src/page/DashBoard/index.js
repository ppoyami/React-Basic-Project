import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addCollection } from '../../modules/collections';
import { useCollectioId } from '../../context';

import DashBoard from './DashBoard';

export default function DashBoardContainer({ history }) {
  const { collections, todos } = useSelector(state => state);
  const dispatch = useDispatch();

  const collectionId = useCollectioId();

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

  const getCount = id =>
    todos[id] ? todos[id].filter(todo => !todo.done).length : 0;

  const props = {
    collections,
    goHome,
    onCreateCollection,
    getCount,
  };

  return <DashBoard {...props} />;
}
