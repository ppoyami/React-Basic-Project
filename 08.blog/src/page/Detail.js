import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import * as P from '../modules/post';
import * as U from '../modules/user';

import useAsync from '../hooks/useAsync';
import { getPost, getUser } from '../api';

export default function Detail() {
  const { postId } = useParams();

  const memoGetPost = useCallback(async () => {
    return await getPost(postId);
  }, [postId]);

  // MEMO: useCallback 쓰지 않으면 무한 루프에 걸림
  const {
    loading: PLoading,
    payload: post,
    error: PError,
  } = useAsync(
    memoGetPost,
    P.creatorLoading,
    P.creatorSuccess,
    P.creatorError,
    P.selector
  );
  // TODO: post를 받고나서 user 정보를 요청할 수 있을까?
  // post 가 있을 때, userId를 받아올 수 있고, callback 함수를 선언할 수 있다!
  // console.log(post?.data?.userId);

  return <div>Detail</div>;
}
