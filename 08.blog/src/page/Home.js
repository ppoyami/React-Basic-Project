import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { getPosts } from '../api';
import useAsync from '../hooks/useAsync';
import {
  creatorLoading,
  creatorSuccess,
  creatorError,
  selector,
} from '../modules/posts';
import filterDecorator from '../lib/filterDecorator';

import Sidebar from '../components/Sidebar';
import List from '../components/List';

const Layout = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
`;

export default function Home() {
  // MEMO: 값을 필터링 하기 위해, 기존 api 함수에 필터 기능을 데코레이터 함.
  const location = useLocation();
  // TODO: userId=, search= 두가지 방식의 필터링이 필요하다
  const query = location.search;
  const string = query?.slice(query.indexOf('=') + 1).trim();
  // MEMO: filterDecorator는 async 함수를 반환하기 때문에, useMemo 사용, useCallback사용하면, payload에 함수가 담긴다.
  const filterGetPosts = useMemo(
    () =>
      filterDecorator(
        getPosts,
        // Q: string이 undefined일 경우, 전부 false가 나와서 결과는 비어있어야하는데, 그렇지 않음
        // A: query -> ?query= 이기 때문에 string은 빈 문자열이다, 빈문자열이면 항상 true이다.
        post => post.title.includes(string) || post.body.includes(string)
      ),
    [string]
  );

  const { loading, error, payload } = useAsync(
    filterGetPosts,
    creatorLoading,
    creatorSuccess,
    creatorError,
    selector
  );

  if (loading) return <span>loading...</span>;
  if (error) return <span>error</span>;
  if (!payload) return null;

  console.log(payload);

  return (
    <Layout>
      <Sidebar />
      <List posts={payload} />
    </Layout>
  );
}
