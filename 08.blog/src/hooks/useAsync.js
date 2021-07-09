import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function useAsync(
  callback,
  creatorLoading,
  creatorSuccess,
  creatorError,
  selector
) {
  const dispatch = useDispatch();
  // MEMO: hook이 특정 상태에 의존적임 -> selector 함수를 받아 해결함
  const data = useSelector(selector);
  // FIXME: fetchPosts는 의존하고 있는 값이 너무 많음
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
