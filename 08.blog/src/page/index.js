import Home from './Home';
import Detail from './Detail';
import Login from './Login';
import Profile from './Profile';
import Sign from './Sign';

const routes = [
  { key: 1, exact: true, path: '/', component: Home },
  { key: 2, exact: true, path: '/login', component: Login },
  { key: 3, exact: true, path: '/sign-up', component: Sign },
  { key: 4, exact: true, path: '/users/:userId', component: Profile },
  { key: 5, exact: true, path: '/posts/:postId/:userId', component: Detail },
];

export default routes;
