import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Layout = styled.div`
  position: absolute;
  right: 10%;
  padding: 8rem;
`;

export default function List({ posts }) {
  return (
    <Layout>
      {posts.map(post => (
        <Item
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          desc={post.body}
        />
      ))}
    </Layout>
  );
}
