import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../api';
import { loading, success, error } from '../modules/posts';

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  const fetchPosts = async () => {
    dispatch(loading());
    try {
      const payload = await getPosts();
      dispatch(success(payload));
    } catch (e) {
      dispatch(error(e));
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return <div>Home</div>;
}
