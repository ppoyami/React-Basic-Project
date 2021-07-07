import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { getPosts } from '../api';
import useAsync from '../hooks/useAsync';
import { creatorLoading, creatorSuccess, creatorError } from '../modules/posts';

export default function Home() {
  // MEMO: 값을 필터링 하기 위해, 기존 api 함수에 필터 기능을 데코레이터 함.
  const location = useLocation();
  const query = location.search;
  const string = query.slice(query.indexOf('=') + 1).trim();

  const filterDecorator = useCallback(async () => {
    const { data } = await getPosts();
    // TODO: string에 문자는 담을 수 있음, 필터링은 어떻게 시킬까?
    return data;
  }, []);

  const { loading, error, payload } = useAsync(
    filterDecorator,
    creatorLoading,
    creatorSuccess,
    creatorError
  );

  if (loading) return <span>loading...</span>;
  if (error) return <span>{error}</span>;
  if (!payload) return null;

  console.log(payload);
  console.log(string);

  return <div>Home</div>;
}
