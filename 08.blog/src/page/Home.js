import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { getPosts } from '../api';
import useAsync from '../hooks/useAsync';
import { creatorLoading, creatorSuccess, creatorError } from '../modules/posts';
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
  const query = location.search;
  const string = query?.slice(query.indexOf('=') + 1).trim();

  const filterGetPosts = useMemo(
    () =>
      filterDecorator(
        getPosts,
        post => post.title.includes(string) || post.body.includes(string)
      ),
    [string]
  );

  const { loading, error, payload } = useAsync(
    filterGetPosts,
    creatorLoading,
    creatorSuccess,
    creatorError
  );

  console.log(payload);

  if (loading) return <span>loading...</span>;
  if (error) return <span>error</span>;
  if (!payload) return null;

  return (
    <Layout>
      <Sidebar />
      <List posts={payload} />
    </Layout>
  );
}
