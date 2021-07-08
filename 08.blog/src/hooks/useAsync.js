import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useAsync(callback, creatorLoading, creatorSuccess, creatorError) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.posts);

  const fetchPosts = useCallback(async () => {
    dispatch(creatorLoading());
    try {
      const payload = await callback();
      dispatch(creatorSuccess(payload));
    } catch (e) {
      dispatch(creatorError(e));
    }
  }, [callback]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return data;
}

export default useAsync;
