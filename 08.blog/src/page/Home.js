import { getPosts } from '../api';
import { creatorLoading, creatorSuccess, creatorError } from '../modules/posts';
import useAsync from '../hooks/useAsync';

export default function Home() {
  const { loading, error, payload } = useAsync(
    getPosts,
    creatorLoading,
    creatorSuccess,
    creatorError
  );

  if (loading) return <span>loading...</span>;
  if (error) return <span>{error}</span>;
  if (!payload) return null;

  return <div>Home</div>;
}
