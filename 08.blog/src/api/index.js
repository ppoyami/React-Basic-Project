import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getPost = async id => {
  const data = await api.get(`/posts/${id}`);
  return data;
};
const getPosts = async () => {
  const { data } = await api.get('/posts');
  return data;
};
const getUsers = async () => {
  const data = await api.get('/users');
  return data;
};
const getUser = async id => {
  const data = await api.get(`/users/${id}`);
  return data;
};

const login = async (email, password) => {
  const defaultUser = {
    email: email,
    username: 'Lyan',
    phone: '011-234-1257',
  };
  // Q: setTimeout은 id를 반환함.
  // A: await은 Promise를 받는다. 1000ms 이후 로그인 유저 정보를 resolve하는 Promise 생성
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(defaultUser), 1000);
  });

  console.log(data);
  return data;
};

export { getPost, getPosts, getUser, getUsers, login };
