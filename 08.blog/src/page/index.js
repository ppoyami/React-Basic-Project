import Home from './Home';
import Detail from './Detail';
import Login from './Login';
import Profile from './Profile';
import Sign from './Sign';
import Write from './Write';

const routes = [
  { key: 1, exact: true, path: '/', component: Home },
  { key: 2, exact: true, path: '/login', component: Login },
  { key: 3, exact: true, path: '/sign-up', component: Sign },
  {
    key: 4,
    exact: true,
    path: '/profile',
    component: Profile,
    loginRequired: true,
  },
  { key: 5, exact: true, path: '/posts/:postId/:userId', component: Detail },
  {
    key: 6,
    exact: true,
    path: '/write',
    component: Write,
    loginRequired: true,
  },
];

export default routes;
