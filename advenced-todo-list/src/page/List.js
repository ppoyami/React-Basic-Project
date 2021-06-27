import React, { useState } from 'react';
import styled from 'styled-components';

import BackButton from '../components/List/BackButton';
import More from '../components/List/More';
import Item from '../components/List/Item';
import CreateBtn from '../components/List/CreateBtn';
import Creator from '../components/List/Creator';

const Layout = styled.div`
  position: relative;
  width: 320px;
  height: 530px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.color_primary_light2};

  overflow: hidden;
`;
const Header = styled.header`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;
const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export default function List({ searchId, addTodos, todos }) {
  const [popup, setPopup] = useState(false);
  // BUG: 라우트 컴포넌트에 props를 넘기면서 history, match 객체를 받아올 수 없다.
  // const goBack = () => {
  //   history.goBack();
  // };
  // console.log(match);
  // 키 값 탐색 -> 있으면 [] 가져오고, 없으면 String(searchId): [] 를 생성
  const key = searchId.current + '';
  // BUG: todos[key] 없으면 새로 만들어주는데, 렌더링이 안됌
  const todoList = todos[key];
  if (!todoList) addTodos({ key: [] });

  console.log(key);
  console.log(todos);

  return (
    <Layout>
      <Header>
        <BackButton />
        <More />
      </Header>
      <Body>
        {todoList &&
          todoList.map(todo => (
            <Item key={todo.id} title={todo.title} isDone={todo.done} />
          ))}
      </Body>
      <CreateBtn onClick={() => setPopup(true)} />
      <Creator show={popup} close={() => setPopup(false)} />
    </Layout>
  );
}
