import React, { useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import * as P from '../modules/post';
import * as U from '../modules/user';

import useAsync from '../hooks/useAsync';
import { getPost, getUser } from '../api';

export default function Detail() {
  const { postId, userId } = useParams();

  const memoGetPost = useCallback(async () => {
    const { data } = await getPost(postId);
    return data;
  }, [postId]);

  const memoGetUser = useCallback(async () => {
    const { data } = await getUser(userId);
    return data;
  }, [userId]);

  // MEMO: useCallback 쓰지 않으면 무한 루프에 걸림
  // Q: useEffect가 두개 걸려있다. 렌더링 흐름이 어떻게 될까?
  const {
    loading: P_loading,
    payload: post,
    error: P_error,
  } = useAsync(
    memoGetPost,
    P.creatorLoading,
    P.creatorSuccess,
    P.creatorError,
    P.selector
  );
  const {
    loading: U_loading,
    payload: user,
    error: U_error,
  } = useAsync(
    memoGetUser,
    U.creatorLoading,
    U.creatorSuccess,
    U.creatorError,
    U.selector
  );
  // post 가 있을 때, userId를 받아올 수 있고, callback 함수를 선언할 수 있다!
  if (P_loading) return <span>loading...</span>;
  if (P_error) return <span>error</span>;
  if (!post) return null;

  return (
    <Layout>
      <Title>{post.title}</Title>
      <div>
        {user && (
          <UserInfo>
            <StyledLink to={`/?userId=${user.id}`}>{user.name}</StyledLink>
            <span>{user.email}</span>
          </UserInfo>
        )}
        {U_error && <span>user error</span>}
        {U_loading && <span>user loading</span>}
      </div>

      <Content>{post.body}</Content>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 60%;
  height: 100vh;
  padding: 5rem 3rem;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 7rem;
  font-weight: 300;
  padding: 2rem;
`;
const Content = styled.p`
  position: absolute;
  top: 40%;
  padding: 2rem;

  font-size: 2.5rem;
  font-weight: 600;
  line-height: 5rem;
  letter-spacing: 2px;
`;

const UserInfo = styled.div`
  position: absolute;
  right: 0;
  margin: 3rem;
  font-size: 2rem;

  & a:first-child {
    margin-right: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
`;
