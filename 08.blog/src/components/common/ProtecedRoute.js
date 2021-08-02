import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { selector } from '../../modules/loggedInUser';

export default function ProtecedRoute({ component: Component, ...props }) {
  const { payload: user } = useSelector(selector);
  // MEMO: 조건부 라우팅 해주는 ProtecedRoute 컴포넌트 작성
  return (
    <Route
      render={() =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
      {...props}
    />
  );
}
