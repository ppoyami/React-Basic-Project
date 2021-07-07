import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getPost = async id => {
  const data = await api.get(`/posts/${id}`);
  return data;
};
const getPosts = async () => {
  const data = await api.get('/posts');
  return data;
};
const getUser = async () => {
  const data = await api.get('/users');
  return data;
};
const getUsers = async id => {
  const data = await api.get(`/users/${id}`);
  return data;
};

export { getPost, getPosts, getUser, getUsers };
