import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { creatorLoading, creatorSuccess, creatorError } from '../modules/post';
import useAsync from '../hooks/useAsync';
import { getPost } from '../api';

export default function Detail() {
  const { postId } = useParams();

  // const memoGetPost = useCallback(async () => {
  //   return await getPost(postId);
  // }, [postId]);

  const { loading, payload, error } = useAsync(
    () => getPost(postId),
    creatorLoading,
    creatorSuccess,
    creatorError
  );

  console.log(loading);
  console.log(payload);
  console.log(error);

  return <div>Detail</div>;
}
